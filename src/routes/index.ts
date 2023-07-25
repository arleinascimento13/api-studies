import { Router } from "express";
import { userRoutes } from "./user.routes";
import { movieRoutes } from "./movie.routes";

const routes = Router()

routes.use("/movies", movieRoutes)
routes.use("/users", userRoutes)

export { routes }