// =/= Interface de criação de Usúario

import { User } from "@prisma/client"
import { prisma } from "../../../../prisma/client"
import { CreateUserDTO } from "../../DTO/CreateUserDTO"

export class CreateUserUseCase{
     async execute( { name, email } : CreateUserDTO ): Promise<User> {
          //Verificar se o usúario já existe
          const userAlreadyExists = await prisma.user.findUnique({
               where: {
                    email
               }
          })

          if (userAlreadyExists) {}

          //Criar o usúario

          const user = await prisma.user.create({
               data: {
                    email,
                    name
               }
          })

          return user
     }


}