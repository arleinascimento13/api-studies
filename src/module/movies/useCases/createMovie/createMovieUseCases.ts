// =/= Interface de criação de Usúario

import { Movie } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateMovieDTO } from "../../DTO/CreateMovieDTO";
import { AppError } from "../../../../erros/app.error";

export class CreateMovieUseCase {
  async execute({
    title,
    duration,
    release_date,
  }: CreateMovieDTO): Promise<Movie> {
    //Verificar se o usúario já existe
    const movieAlreadyExists = await prisma.movie.findUnique({
      where: {
        title,
      },
    });

    if (movieAlreadyExists) {
      throw new AppError("Movie Already exists!");
    }

    //Criar o usúario

    const movie = await prisma.movie.create({
      data: {
        release_date,
        title,
        duration,
      },
    });

    return movie;
  }
}
