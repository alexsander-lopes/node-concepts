import { Request, Response } from "express";
import { ICidade } from "../../model/entities/ICidade";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";

//VALIDAR AS INFORMAÇÕES RECEBIDAS NO BODY DA REQUISIÇÃO
const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(4),
    estado: yup.string().required().min(4),
});

//CRIAÇÃO DA CIDADE
// eslint-disable-next-line @typescript-eslint/ban-types
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    let validatedData: ICidade | undefined = undefined;

    try {
        validatedData = await bodyValidation.validate(req.body, {
            abortEarly: false,
        });
    } catch (err) {
        const yupError = err as yup.ValidationError;
        const errors: Record<string, string> = {};

        yupError.inner.forEach((error) => {
            if (error.path === undefined) return;
            errors[error.path] = error.message;
        });

        return res.status(StatusCodes.BAD_REQUEST).json({ errors });
    }
    console.log(validatedData);
};
