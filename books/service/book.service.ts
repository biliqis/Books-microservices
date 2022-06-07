import { BookModel } from "../bookModel";
import { BookDto } from "../dto/book.dto";
import { PaginationDto } from "../pagination.dto";
import { BookEnum } from "../enum/book.enum";

export const BookService = {
  async createBook(bookData: BookDto,) {
    const newBook = await BookModel.create(bookData);
    return newBook;
  },

  async getBookByTitle(bookInfo: BookDto) {
    const getBookByTitle = await BookModel.findOne({
      BookTitle: bookInfo.bookTitle,
    });
    return getBookByTitle;
  },

  async getAllBooksPaginated(paginationDetails: PaginationDto) {
    const books = await BookModel.find()
      .limit(paginationDetails.limit * 1)
      .skip((paginationDetails.page - 1) * paginationDetails.limit)
      .exec();
    return books;
  },

  
};
