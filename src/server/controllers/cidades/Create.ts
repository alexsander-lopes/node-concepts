import { Request, Response } from "express";
import { ICidade } from "../../model/entities/ICidade";

// eslint-disable-next-line @typescript-eslint/ban-types
export const create = (req: Request<{}, {}, ICidade>, res: Response) => {
    console.log(req.body.nome);

    return res.send("Cidade criada!");
};
