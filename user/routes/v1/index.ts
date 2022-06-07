import { Router } from "express";
import userRoutes from "../../routes /user.routes";
class indexRouter {
  public router: Router = Router();

  constructor() {
   // this.router.use("/book", bookRoutes)
    this.router.use("/user", userRoutes)
  

  }
}

export default new indexRouter().router;
