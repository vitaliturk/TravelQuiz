// Facts and Tips

    let quotes = [
  "Fun fact - Italy has a free, public wine fountain.",
  "Fun fact - Great Wall of China's strength comes from sticky rice.",
  "Fun fact - Working while on vacation is worse than you think!",
  "Fun fact - Jet lag feels worse if you travel from west to east.",
  "Fun fact - 600 people work at the Eiffel Tower daily.",
  "Fun fact - 60% of the lakes on earth are located in Canada.",
  "Fun fact - The German word “fernweh” means “far sickness,” or an intense urge to travel.",
  "Eurotunnel is 31.4 miles long.",
  "Burrito is a popular Mexan dish.",
  "71% of earth is water.",
  "The Spanish Steps are in Rome.",
  "Я is the last letter in Russian alphabet",
  "Gulyás (Goulash) is Hungarian dish",
  "The Temple of the Emerald Buddha and The Grand Palace can be found in Bangok in Thailand"
 ]

// Get random facts or tips and display them
function getQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('newQuoteSection').innerHTML = quotes[randomNumber];
}