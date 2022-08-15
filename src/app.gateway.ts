/* eslint-disable indent */
import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
} from '@nestjs/websockets';
import { Logger, Req } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { SocketService } from '@/Services';

import { SocketInterfaces } from '@interfaces';

@WebSocketGateway()
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  onlineUsers: { userId: string; socketId: string }[] = [];
  private readonly socketService: SocketService;

  constructor(socketService: SocketService) {
    this.socketService = socketService;
  }

  @WebSocketServer() public server: Server;
  private logger: Logger = new Logger('AppGateway');

  afterInit(server: Server) {
    this.logger.log('Init');
    this.socketService.socket = server;
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`User disconnected with socketId: ${client.id}`);
    this.onlineUsers = this.onlineUsers.filter(
      (user) => user.socketId !== client.id,
    );
    this.server.emit('onlineUsers', { onlineUsers: this.onlineUsers });
  }

  handleConnection(client: Socket) {
    this.logger.log(`User connected with socketId: ${client.id}`);
    return client;
  }

  private addNewUser(userId: string, socketId: string) {
    const userExist = this.onlineUsers.some((user) => user.userId === userId);
    if (!userExist) this.onlineUsers.push({ userId, socketId });
    this.server.emit('onlineUsers', { onlineUsers: this.onlineUsers });
  }

  private getUser(userId: string) {
    const findone = this.onlineUsers.find((user) => user.userId === userId);
    return findone;
  }

  @SubscribeMessage('connectToServer')
  connectToServer(@MessageBody() userId: string, @Req() socket: Socket) {
    if (userId) {
      this.addNewUser(userId, socket.id);
    }
    console.log('online Users:');
    console.table(this.onlineUsers);
  }

  @SubscribeMessage('sendMessage')
  async chatting(
    @MessageBody()
    data: SocketInterfaces.SendMessages,
  ) {
    const { message, receiverId, senderId } = data;

    // retrive revicer based on onlineUser list
    const receiver = this.getUser(receiverId);
    this.server
      .in(receiver.socketId) // brodcast to a specific user
      .emit('receiveMessage', data);
  }
}
