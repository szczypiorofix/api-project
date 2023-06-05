import { NextFunction, Request, Response } from "express";

const logger = (req: Request, res: Response, next: NextFunction) => {
    console.info(`Request: ${req.method} ${req.originalUrl}`);
    next();
};

export default logger;
