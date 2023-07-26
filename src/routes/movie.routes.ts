import { Router } from "express";
import { CreateMovieController } from "../module/movies/useCases/createMovie/CreateMovieController";
import { CreateMovieRentController } from "../module/movieRent/createMovieRent/createMoviteRentController";
import { GetMoviesByReleaseDateController } from "../module/getMoviesByReleaseDate/GetMoviesByReleaseDateController";

const createMovieRentController = new CreateMovieRentController();
const createMovieController = new CreateMovieController()
const getMoviesByReleaseDateController = new GetMoviesByReleaseDateController()

const movieRoutes = Router()

movieRoutes.post("/rent", createMovieRentController.handle);
movieRoutes.get("/release", getMoviesByReleaseDateController.handle);
movieRoutes.post("/", createMovieController.handle)

export { movieRoutes }