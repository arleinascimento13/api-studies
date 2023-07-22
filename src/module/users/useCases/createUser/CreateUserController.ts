// =/= Receber as informações das Rotas e usar no UserCase

import { Response } from "express";
import { CreateUserUseCase } from "./createUserUseCases";

export class CreateUserController {
     async handle(req: Request, res: Response){
          const { name,email } = req.body

          const CreateUserUseCase = new CreateUserUseCase()

          const result = await CreateUserUseCase.execute( { name, email } )

          return res.status(201).json(result)
     }
}