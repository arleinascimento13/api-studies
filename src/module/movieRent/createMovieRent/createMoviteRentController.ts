import { Response } from "express";
import { CreateMovieRentUseCase } from "./createMovieRentUseCase";

export class CreateMovieRentController {
  async handle(req: Request, res: Response) {
    const { movieId, userId } = req.body;

    const createMovieRentUseCase = new CreateMovieRentUseCase();

    await createMovieRentUseCase.execute({ movieId, userId });

    return res.status(201).send();
  }
}
