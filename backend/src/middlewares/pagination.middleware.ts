import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class PaginationMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const { page = 1, limit = 10 } = req.query;
        req.query.page = Math.max(1, parseInt(page as string, 10)).toString();
        req.query.limit = Math.max(1, parseInt(limit as string, 10)).toString();
        next();
    }
}