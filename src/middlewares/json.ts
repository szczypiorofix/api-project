import { NextFunction, Request, Response } from "express";

const jsonContentType = (req: Request, res: Response, next: NextFunction) => {
    res.header("Content-Type", "application/json");
    next();
};

export default jsonContentType;
