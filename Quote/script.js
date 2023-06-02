import { localQuotes } from "./arQuotes.js";

let apiQuotes = [];
let newQuote;
let lang = "ar";

const quoteTextElem = document.querySelector("#quote");
const authorTextElem = document.querySelector("#author");
const quoteTextContainer = document.querySelector(".qoute-text");
const languageSelect = document.getElementById("language");
const loaderElem = document.querySelector(".loader");
const quotContainerElem = document.querySelector(".quote-container");
const newQuoteButtonElem = document.querySelector("#new-quote");
const tweetQuoteButtonElem = document.querySelector("#twitter");
const copyButtonElem = document.getElementById("copy");

function showLoader() {
  loaderElem.hidden = false;
  quotContainerElem.hidden = true;
}

function hideLoader() {
  loaderElem.hidden = true;
  quotContainerElem.hidden = false;
}

function showNewQuote() {
  showLoader();

  if (lang === "ar") {
    const randomeQuote = Math.floor(Math.random() * localQuotes.length);
    newQuote = localQuotes[randomeQuote];
  } else {
    const randomeQuote = Math.floor(Math.random() * apiQuotes.length);
    newQuote = apiQuotes[randomeQuote];
  }

  checkLength(newQuote.text.length);
  updateQuote();
}

function checkLength(len) {
  //quoteTextContainer.style.width = len < 50 ? "500px" : "auto";
}

function showNewQuoteAr() {
  showLoader();

  const randomeQuote = Math.floor(Math.random() * localQuotes.length);
  newQuote = localQuotes[randomeQuote];

  checkLength(newQuote.text.length);
  updateQuote();
}

async function getQuotes() {
  if (lang === "ar") {
    showNewQuoteAr();
  } else {
    // showLoader();

    try {
      const apiUrl =
        "https://jacintodesign.github.io/quotes-api/data/quotes.json";

      const response = await fetch(apiUrl);
      apiQuotes = await response.json();

      showNewQuote();
      console.log("new quote");
    } catch (error) {
      alert("Internet Connection Problem");
    }
  }
}

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${newQuote.text}-${newQuote.author}`;
  window.open(twitterUrl, "_blank");
}

function updateQuote() {
  quoteTextElem.textContent = newQuote.text;
  authorTextElem.textContent = newQuote.author;
  hideLoader();
}

function handleLanguageChange() {
  lang = languageSelect.value === "Arabic" ? "ar" : "en";
  newQuoteButtonElem.textContent = lang === "ar" ? "اقتباس" : "Quote";
  copyButtonElem.textContent = lang === "ar" ? "حفظ" : "Copy";
  getQuotes();
}

function copyQuoteToClipboard() {
  const input = document.createElement("input");
  input.type = "text";
  const quoteSpan = document.getElementById("quote");
  input.value = quoteSpan.innerText;
  document.body.appendChild(input);

  input.select();
  input.setSelectionRange(0, 99999);

  document.execCommand("copy");

  document.body.removeChild(input);

  alert("Text copied to clipboard!");
}

newQuoteButtonElem.addEventListener("click", getQuotes);
tweetQuoteButtonElem.addEventListener("click", tweetQuote);
languageSelect.addEventListener("change", handleLanguageChange);
copyButtonElem.addEventListener("click", copyQuoteToClipboard);

//On Load
getQuotes();
