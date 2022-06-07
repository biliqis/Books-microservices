import { Router } from "express";
class indexRouter {
  public router: Router = Router();

  constructor() {
   // this.router.use("/book", bookRoutes)
  

  }
}

export default new indexRouter().router;
