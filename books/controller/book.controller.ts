import { BookService } from "../service/book.service";
import { Request, Response } from "express";
import { BookDto } from "../dto/book.dto";

export const BookController = {
  async bookResult(req:Request, res:Response) {
    try {
      const BookInformation: BookDto = req.body as BookDto;
      let fileArray = req.files as any;
      const images = [];
      for (let i = 0; i < fileArray!.length; i++) {
        let fileLocation: string = fileArray[i]!.location;
        console.log("filename", fileLocation);
        images.push(fileLocation);
      }
      BookInformation.images = images;
      console.log((req as any).user)
      BookInformation.userId = (req as any).user._id;

      const getResult = await BookService.createBook(BookInformation);
      return res.status(200).send({message: "book succesfully added to the log", getResult})

    } catch (err: any) {
        console.error(err.message);
        return res.status(500).json({ message: err.message });
    }
}
}
