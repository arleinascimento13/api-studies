import { AppError } from "../../../erros/app.error";
import { prisma } from "../../../prisma/client";
import { CreateUserDTO } from "../../users/DTO/CreateUserDTO";

export class CreateMovieRentUseCase {
  async execute({ movieId, userId }: CreateUserDTO): Promise<void> {
    //Verificar se filme existe
    const movieExists = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movieExists) {
      throw new AppError("Movie doesn't exist!");
    }

    //Verificar se já está alugado por outra pessoa
    const movieAlreadyRented = await prisma.movieRent.findFirst({
      where: {
        id: movieId,
      },
    });

    if (movieAlreadyRented) {
      throw new AppError("Movie already rented!");
    }

    //verificar se o usuario existe
    const userExists = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      throw new AppError("User doesn't exists");
    }

    //criar locação

    await prisma.movieRent.create({
      data: {
        movieId,
        userId,
      },
    });
  }
}
