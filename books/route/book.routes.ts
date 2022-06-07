import { Router } from "express";
import { BookController } from "../controller/book.controller";
import { BookValidator } from "../validator/book.validator";
import { CreateBookGuard } from "../Guard/book.guard";
import useGuard from "../middleware/guard";
import { useValidator } from "../middleware/body.validator";
import upload from "../upload";

class bookRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.post(
      "/add-book", 
     // useGuard(CreateBookGuard.checkIfUserIsAdmin),

      useValidator.useBodyValidator(BookValidator.createBookValidator),
      upload.array("image",5),
      BookController.bookResult
    );
  }
}

export default new bookRouter().router;
