import { Router } from "express";
import { CreateUserController } from "../module/users/useCases/createUser/CreateUserController";
import { GetAllUsersController } from "../module/users/useCases/getAllUsers/GetAllUsersController";

const createUserController = new CreateUserController()
const getAllUsersController = new GetAllUsersController()

const userRoutes = Router()

userRoutes.post("/", createUserController.handle)
userRoutes.get("/", getAllUsersController.handle);


export { userRoutes }