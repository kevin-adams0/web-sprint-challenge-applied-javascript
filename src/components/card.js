 // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //



  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const cardsContainer = document.querySelector(".cards-container"); // selecting cards container within html

  axios
    .get("https://lambda-times-api.herokuapp.com/articles") //pulling from this database
    .then(response => {
      console.log(response);
      function articleCard(object){

      const card = document.createElement("div"), // adding elements
      const headline = document.createElement("div"),
      const author= document.createElement("div"),
      const imageContainer  = document.createElement("div"),
      const image = document.createElement("img"),
      const spanAuthor = document.createElement("span");

      card.classList.add("card"); // adding classes
      headline.classList.add("headline");
      author.classList.add("author");
      imageContainer.classList.add("img-container");


      headline.textContent = object.headline; // adding content and pulling from within object
      image.src = object.authorPhoto;
      spanAuthor.textContent = object.authorName;

      card.appendChild(headline); // structuring
      card.appendChild(author);
      author.appendChild(imageContainer);
      author.appendChild(spanAuthor);
      imageContainer.appendChild(image);

      return card;

      }

      console.log(Object.values(response.data.articles));

      //creating new cards for every article by targeting the respective subject within the data base. appending the new cards to the cards container

      // bootstrap
      bs = Object.values(response.data.articles.bootstrap); // 
      bs.forEach(item => {
          let newCard = articleCard(item);
          cardsContainer.appendChild(newCard);

      });

      // javascript
      js = Object.values(response.data.articles.javascript);
      js.forEach(item => {
          let newCard = articleCard(item);
          cardsContainer.appendChild(newCard);

      });

      // technology
      tech = Object.values(response.data.articles.technology);
      tech.forEach(item => {
          let newCard = articleCard(item);
          cardsContainer.appendChild(newCard);

      });

      // jquery
      jquery = Object.values(response.data.articles.jquery);
      jquery.forEach(item => {
          let newCard = articleCard(item);
          cardsContainer.appendChild(newCard);

      });

      // node.js
      node = Object.values(response.data.articles.node);
      node.forEach(item => {
          let newCard = articleCard(item);
          cardsContainer.appendChild(newCard);
        });
    });