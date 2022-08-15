import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { NestMiddleware, HttpStatus, Injectable } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import CONSTANTS from '@constants';

const { KEYS } = CONSTANTS;

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor() {
    //
  }

  async skipPermittedRoutes(req: Request) {
    return true;
  }

  async use(req: Request, res: Response, next: NextFunction) {
    const skipRoutes = await this.skipPermittedRoutes(req);
    if (skipRoutes) return next();
    const authHeaders = req.headers.authorization;
    if (authHeaders && (authHeaders as string).split(' ')[1]) {
      const token = (authHeaders as string).split(' ')[1];
      try {
        jwt.verify(token, KEYS.SECRET_KEY);
      } catch (error) {
        throw new HttpException(
          'Your token has been expired',
          HttpStatus.FORBIDDEN,
        );
      }
      // const decoded: any = jwt.verify(token, Constants.SECRET);
      next();
    } else {
      throw new HttpException('Not authorized.', HttpStatus.FORBIDDEN);
    }
  }
}
