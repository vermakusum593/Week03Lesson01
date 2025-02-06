import book1 from "../../assets/book1.png";
import book2 from "../../assets/book2.png";
import book3 from "../../assets/book3.png";
import book4 from "../../assets/book4.png";
import book5 from "../../assets/book5.png";
import Book from "../../components/Book/Book";
import "./Gallery.css";

  type BookProps = {
    logo: string;
    title: string;
    author: string;
    bookPrice?: number;  // Optional bookPrice
  }

interface GalleryProps {}

const Gallery: React.FC<GalleryProps> = () => {
  return (
    <>
      <div className="grid-container">
      <Book logo={book1} title="Great travel at desert" author="Howdy" bookPrice={19.99} />
      <Book logo={book2} title="Great travel at desert" author="Howdy" bookPrice={22.99} />
      <Book logo={book3} title="Great travel at desert" author="Howdy" bookPrice={18.99} />
      <Book logo={book4} title="Great travel at desert" author="Howdy" bookPrice={25.00} />
      <Book logo={book5} title="Great travel at desert" author="Howdy" bookPrice={20.50} />

      </div>
    </>
  );
};

export default Gallery;
