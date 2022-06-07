export type BookDto = {
  bookTitle: string;
  authorName: string;
  bookCover: string;
  isAvailable: boolean;
  userId:string;
  requestUsers: string[];
  pricePerBook: number;
  images: string[];
  isbnNumber: string;
  noOfCopies: Number;
  availableCopies: Number;
  borrowedCopies: Number;
  publishDate: Date;
  description: string;
};
