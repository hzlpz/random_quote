// getRandomQuote() stores the random quote formla in a variable.
// storeQuote selects a quote
function getRandomQuote() {
  var q = Math.floor(Math.random() * quotes.length);
  var storeQuote = quotes[q];
  return storeQuote;
}


function printQuote() {
  var randomQuote = getRandomQuote();
  //html output
  var html;
  html += '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;
  html += '<span class="citation">'+ randomQuote.citation + '</span>';
  html += '<span class="year">'+ randomQuote.year + '</span>';
  html += '</p>';

  // displays final html
  document.getElementById('quote-box').innerHTML = html;
}

// Links printQuote() to button to click through quotes
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);

