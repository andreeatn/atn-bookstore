# ATN-Bookstore

## About

Website displays books from Google Books API. It is built as a bookstore, simulating an online shopping cart.

## Development

The project is developed using Typescript langurage with React library.

The design has a mobile-first approach and two color modes (dark-default and light), which were created using Bootstrap. The selected color mode is stored in the browser's Local Storage.

## Functionality

Users can browse the list of volumes fetched from Google Books API and read more details about each book like: language, page count, publisher and the date the book was published.

Volumes can be filtered by their subject and ordered by two criteria: 'relevance'(default) and 'newest'.

The website simulates a shopping cart by storing the books selected to be added to cart in the Session storage of the browser. Cart summary contains the number of products, price and a final cost calculated by adding the delivery fee to the product's price.
