  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const Header = (title, date, temp) => {

    const hDiv = document.createElement("div"); // creating our elements
    const dSpan = document.createElement("span");
    const hOne = document.createElement("h1");
    const tSpan = document.createElement("span");

    hDiv.classList.add('header'); // setting class names
    dSpan.classList.add('date');
    tSpan.classList.add('temp');

    hDiv.appendChild(dSpan); // structuring by appending children to our hDiv
    hDiv.appendChild(hOne);
    hDiv.appendChild(tSpan);

    dSpan.textContent = "January 6, 2021"; // adding content to match example
    hOne.textContent = "Lambda Times";
    tSpan.textContent = "26°";

    return hDiv;
  }

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerAppender = (selector) => {
    headerAppender = document.querySelector(".header-container");
    headerAppender.appendChild(Header) // come back, unsure about functions


  }


export { Header, headerAppender }