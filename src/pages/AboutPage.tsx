import ThemeContext from "context/ThemeContext";
import { useContext } from "react";

function AboutPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="container mb-5"
      style={{ minHeight: "65vh" }}
      data-bs-theme={theme}
    >
      <h1 className="py-5">About</h1>
      <div id="about" className="text-light-emphasis">
        <p>
          Website displays books from Google Books API. It is built as a
          bookstore, simulating an online shopping cart.
        </p>
      </div>
      <div id="development" className="text-light-emphasis">
        <h3 className="mt-4 mb-3">Development</h3>
        <p>
          The project is developed using Typescript langurage with React
          library.
        </p>
        <p>
          The design has a mobile-first approach and two color modes
          (dark-default and light), which were created using Bootstrap. The
          selected color mode is stored in the browser's Local Storage.
        </p>
      </div>
      <div id="development" className="text-light-emphasis">
        <h3 className="mt-4 mb-3">Functionality</h3>
        <p>
          Users can browse the list of volumes fetched from Google Books API and
          read more details about each book like: language, page count,
          publisher and the date the book was published.
        </p>
        <p>
          Volumes can be filtered by their subject and ordered by two criteria:
          'relevance'(default) and 'newest'.
        </p>
        <p>
          The website simulates a shopping cart by storing the books selected to
          be added to cart in the Session storage of the browser. Cart summary
          contains the number of products, price and a final cost calculated by
          adding the delivery fee to the product's price.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
