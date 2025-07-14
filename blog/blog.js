const articles = [
  {
    id: 1,
    title: "Septimus Heap Book One: Magyk",
    date: "July 5, 2022",
    description: "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
    imgAlt: "Book cover for Septimus Heap 1",
    ages: "10-14",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐"
  },
  {
    id: 2,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",
    description: "Rick tries Norse Mythology and it's great.",
    imgSrc: "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
    imgAlt: "Book cover for Magnus Chase 1",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐"
  },
  {
    id: 3,
    title: "Belgariad Book One: Pawn of Prophecy",
    date: "Feb 12, 2022",
    description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided...",
    imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
    imgAlt: "Book cover for Pawn of Prophecy",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐⭐"
  }
];

const container = document.querySelector(".blog-articles");

articles.forEach(function(item) {
  const book = document.createElement("div");
  book.classList.add("book");

  book.innerHTML = `
    <div class="book-meta">
      <p><strong>${item.date}</strong></p>
      <p>${item.ages}</p>
      <p>${item.genre}</p>
      <p>${item.stars}</p>
    </div>

    <div class="book-content">
      <h2><strong>${item.title}</strong></h2>
      <img class="book-cover" src="${item.imgSrc}" alt="${item.imgAlt}">
      <p>${item.description} <span style="color: #AF1B3F;">Read more...</span></p>
    </div>
  `;

  container.appendChild(book);
});
