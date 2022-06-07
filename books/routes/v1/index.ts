import { Router } from "express";
import bookRoutes from "../../route/book.routes";
class indexRouter {
  public router: Router = Router();

  constructor() {
   this.router.use("/book", bookRoutes)
  

  }
}

export default new indexRouter().router;
