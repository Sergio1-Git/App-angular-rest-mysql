import { Request, Response } from "express";

class IndexController {
    index(req: Request, res: Response) {
        res.json({text: 'api rest working'});
    }
}

export const indexController = new IndexController();