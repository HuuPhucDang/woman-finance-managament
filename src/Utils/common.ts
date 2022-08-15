import * as jwt from 'jsonwebtoken';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { HttpStatus } from '@nestjs/common';
import { Request } from 'express';

import CONSTANTS from '@constants';

const { KEYS } = CONSTANTS;

export class CommonHelper {
  static async tokenDecode(req: Request) {
    const authHeaders = req.headers.authorization;
    const { company, role }: any = req.headers;
    if (authHeaders && (authHeaders as string).split(' ')[1]) {
      const token = (authHeaders as string).split(' ')[1];
      try {
        jwt.verify(token, KEYS.SECRET_KEY);
      } catch (error) {
        throw new HttpException(
          'Your token has been expired',
          HttpStatus.UNAUTHORIZED,
        );
      }
      const decoded: any = jwt.verify(token, KEYS.SECRET_KEY);
      return { ...decoded, comId: company, roleId: role };
    } else {
      throw new HttpException('Not authorized.', HttpStatus.UNAUTHORIZED);
    }
  }

  static randomSecretCode() {
    const chars =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 6; i > 0; --i)
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  }
}
