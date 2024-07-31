import { Request, Response } from "express";
import { ICidade } from "../../model/entities/ICidade";
import * as yup from "yup";

//VALIDAR AS INFORMAÇÕES RECEBIDAS NO BODY DA REQUISIÇÃO
const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3),
});

//CRIAÇÃO DA CIDADE
// eslint-disable-next-line @typescript-eslint/ban-types
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    let validatedData: ICidade | undefined = undefined;
    try {
        validatedData = await bodyValidation.validate(req.body);

        console.log(validatedData);
    } catch (error) {
        const yupError = error as yup.ValidationError;

        return res.json({
            errors: {
                default: yupError.message,
            },
        });
    }

    return res.send("Cidade criada!");
};
