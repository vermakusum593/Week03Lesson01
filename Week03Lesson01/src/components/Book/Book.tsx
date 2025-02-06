import React from "react";

 type BookProps= {
  logo: string;
  title: string;
  author: string;
  bookPrice?: number;  // Optional bookPrice
}

const Book: React.FC<BookProps> = ({ logo, title, author, bookPrice }) => {
  return (
    <div>
      <img src={logo} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
      {bookPrice && <p>Price: ${bookPrice}</p>}
    </div>
  );
};

export default Book;
