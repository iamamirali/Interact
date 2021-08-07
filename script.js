const quotesList = [
  {
    img: "./clients images/01.jpg",
    name: "John Doe",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora nisi veritatis architecto reprehenderit, ducimus cupiditate minus laboriosam nostrum sit maxime!",
  },
  {
    img: "./clients images/02.jpg",
    name: "John Doe",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora nisi veritatis architecto reprehenderit, ducimus cupiditate minus laboriosam nostrum sit maxime!",
  },
  {
    img: "./clients images/03.jpg",
    name: "John Doe",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora nisi veritatis architecto reprehenderit, ducimus cupiditate minus laboriosam nostrum sit maxime!",
  },
  {
    img: "./clients images/04.jpg",
    name: "John Doe",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora nisi veritatis architecto reprehenderit, ducimus cupiditate minus laboriosam nostrum sit maxime!",
  },
  {
    img: "./clients images/05.jpg",
    name: "John Doe",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora nisi veritatis architecto reprehenderit, ducimus cupiditate minus laboriosam nostrum sit maxime!",
  },
  {
    img: "./clients images/06.jpg",
    name: "John Doe",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora nisi veritatis architecto reprehenderit, ducimus cupiditate minus laboriosam nostrum sit maxime!",
  },
];

let quotesContainer = document.querySelector(".clients-container");

quotesList.forEach((item) => {
    let quoteItem = document.createElement("div");
    let quoteWriter = document.createElement("h4");
    let quoteImg = document.createElement("img");
    let quoteText = document.createElement("p");
    
    quoteItem.appendChild(quoteImg);
    quoteItem.appendChild(quoteText);
    quoteItem.appendChild(quoteWriter);

    const { img, name, content } = item;
    
    quoteImg.setAttribute('src',img)
    quoteWriter.textContent = `- ${name}`
    quoteText.textContent = `"${content}"`

    quotesContainer.appendChild(quoteItem)

    quoteItem.classList.add('quote-item')
});


