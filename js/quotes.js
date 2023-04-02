const quotes = [
    {
      quote:
        "You will face many defeats in life, but never let yourself be defeated.",
      author: "Maya Angelou",
    },
    {
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
    },
    {
      quote:
        "In the end, it’s not the years in your life that count. It’s the life in your years.",
      author: "Abraham Lincoln",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    {
      quote:
        "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
      author: "Thomas A. Edison",
    },
    {
      quote:
        "If you spend too much time thinking about a thing, you’ll never get it done.",
      author: "Bruce Lee",
    },
    {
      quote:
        "Success is going from failure to failure without a loss of enthusiasm.",
      author: "Winston Churchill",
    },
    {
      quote:
        "There is no use whatever trying to help people who do not help themselves. You cannot push anyone up a ladder unless he be willing to climb himself.",
      author: "Andrew Carnegie",
    },
    {
      quote:
        "Try not to become a man of success but rather try to become a man of value.",
      author: "Albert Einstein",
    },
    {
      quote:
        "We must believe in luck. For how else can we explain the success of those we don’t like?",
      author: "Jean Cocteau",
    },
  ];
  
const quote_column = document.getElementById("quotes");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const repeatBtn = document.querySelector(".repeat");
const loginFormQuote = document.querySelector("#Login-form");

const HIDDEN_CLASSNAME_QUOTE = "hidden";
const USERNAME_KEY_QUOTE = "username";

  function handleRepeatBtn() {
      const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
      
      quote.innerText = todayQuote.quote;
      author.innerText = `- ${todayQuote.author} -`;
  }

  handleRepeatBtn();
  repeatBtn.addEventListener("click", handleRepeatBtn);


  
  function onQuoteSubmit(event) {
    quote_column.classList.remove(HIDDEN_CLASSNAME_QUOTE);
}

const savedUsernameQuote = localStorage.getItem(USERNAME_KEY_QUOTE);

if(savedUsernameQuote === null){
    quote_column.classList.add(HIDDEN_CLASSNAME_QUOTE);
    loginFormQuote.addEventListener("submit", onQuoteSubmit);
}else {
    quote_column.classList.remove(HIDDEN_CLASSNAME_QUOTE);
}