import { NextFunction, Request, Response, Router } from 'express';
import { IMiddleware } from './middleware.interfase';

export interface IControllerRoute {
    path: string;
    func: (req: Request, res: Response, next: NextFunction) => void;
    method: keyof Pick<Router, 'get' | 'post' | 'delete' | 'patch' | 'put'>;
    middlewares?: IMiddleware[];
}

export type TExpressReturnType = Response<any, Record<string, any>>;
