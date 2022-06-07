import { Router } from "express";
import { useValidator } from "../middleware/body.validator";
import UserController from "../controllers/user.controller";
import {
  UserValidator,
} from "../validators/user.validator";

import userGuard from "../guards/user.guard";
import useGuard from "../middleware/guard";

import authMiddleware from "../middleware/authGuard";

import upload from "../utils/upload";
class userRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.get("/search-all-field", UserController.search);

    this.router.post(
      "/user-signup",useValidator.useBodyValidator(UserValidator.createUserValidator),
      useGuard(userGuard.userSignUpGuard),
      useGuard(userGuard.checkIfPhoneNum),
      UserController.userSignup
    );

    this.router.post(
      "/user-login", useValidator.useBodyValidator(UserValidator.loginUserValidator),
      useGuard(userGuard.userLoginGuard),
      UserController.userLogin
    );

    this.router.patch(
      "/update-user/:id",
      upload.single("image"),useValidator.useBodyValidator(UserValidator.editUserValidator),
      authMiddleware.requireAuth,
      UserController.updateUser
    );

   
    this.router.delete(
      "/delete-user/:id", useValidator.useBodyValidator(UserValidator.editUserValidator),
      authMiddleware.requireAuth,
      authMiddleware.checkIfUserIsAdmin,
      UserController.deleteUser
    );

    this.router.get(
      "/get-all-user",
      // authMiddleware.requireAuth,
      //authMiddleware.checkIfUserIsAdmin,
      UserController.getAllUserFromDataBase
    );

  
  }
}

export default new userRouter().router;
