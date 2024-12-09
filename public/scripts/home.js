const text = document.getElementById("quote");
const auth = document.getElementById("author");

const getNewQuote = async () => {
  // Storing the API into a url and using fetch that when resolved will
  // save data into the response var
  var url = "https://type.fit/api/quotes";
  const response = await fetch(url);

  // Converting the res into json format
  const allQuotes = await response.json();

  // Generating a number between 0 and total number of quotes from the API
  const index = Math.floor(Math.random() * allQuotes.length);

  // Store each element into an array object
  const quote = allQuotes[index].text;
  const author = allQuotes[index].author;

  // Setting authorless quote to anonymous
  if (author == null) {
    author = "Anonymous";
  }

  text.innerHTML = quote;
  author.innerHTML = "~ " + auth;
};

getNewQuote();
