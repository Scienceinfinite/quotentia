const quotes = [
  { "author": "Albert Einstein", "text": "Life is like riding a bicycle. To keep your balance you must keep moving." },
  { "author": "Isaac Newton", "text": "If I have seen further it is by standing on the shoulders of Giants." },
  { "author": "Yoda", "text": "Do, or do not. There is no try." },
  { "author": "Nelson Mandela", "text": "It always seems impossible until it’s done." },
  { "author": "Mahatma Gandhi", "text": "Be the change that you wish to see in the world." },
  { "author": "Confucius", "text": "It does not matter how slowly you go as long as you do not stop." },
  { "author": "Eleanor Roosevelt", "text": "The future belongs to those who believe in the beauty of their dreams." },
  { "author": "Steve Jobs", "text": "Your time is limited, so don’t waste it living someone else’s life." },
  { "author": "Martin Luther King Jr.", "text": "The time is always right to do what is right." },
  { "author": "Walt Disney", "text": "The way to get started is to quit talking and begin doing." },
  { "author": "Henry Ford", "text": "Whether you think you can or you think you can’t, you’re right." },
  { "author": "Aristotle", "text": "Quality is not an act, it is a habit." },
  { "author": "Helen Keller", "text": "The only thing worse than being blind is having sight but no vision." },
  { "author": "Thomas Edison", "text": "Genius is one percent inspiration and ninety-nine percent perspiration." },
  { "author": "Leonardo da Vinci", "text": "Learning never exhausts the mind." },
  { "author": "Benjamin Franklin", "text": "Tell me and I forget. Teach me and I remember. Involve me and I learn." },
  { "author": "Plato", "text": "The beginning is the most important part of the work." },
  { "author": "Sun Tzu", "text": "The supreme art of war is to subdue the enemy without fighting." },
  { "author": "Buddha", "text": "The mind is everything. What you think you become." },
  { "author": "Ralph Waldo Emerson", "text": "The only way to have a friend is to be one." },
  { "author": "Abraham Lincoln", "text": "Whatever you are, be a good one." },
  { "author": "Charles Darwin", "text": "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change." },
  { "author": "Mark Twain", "text": "The secret of getting ahead is getting started." },
  { "author": "Oscar Wilde", "text": "Be yourself; everyone else is already taken." },
  { "author": "Socrates", "text": "The unexamined life is not worth living." },
  { "author": "Confucius", "text": "Our greatest glory is not in never falling, but in rising every time we fall." },
  { "author": "Albert Schweitzer", "text": "Success is not the key to happiness. Happiness is the key to success." },
  { "author": "Lao Tzu", "text": "The journey of a thousand miles begins with one step." },
  { "author": "John F. Kennedy", "text": "Ask not what your country can do for you – ask what you can do for your country." },
  { "author": "Winston Churchill", "text": "Success is not final, failure is not fatal: It is the courage to continue that counts." },
  { "author": "Maya Angelou", "text": "You will face many defeats in life, but never let yourself be defeated." },
  { "author": "Albert Einstein", "text": "Imagination is more important than knowledge." },
  { "author": "Nelson Mandela", "text": "Education is the most powerful weapon which you can use to change the world." },
  { "author": "Marie Curie", "text": "Nothing in life is to be feared; it is only to be understood." },
  { "author": "Confucius", "text": "It does not matter how slowly you go as long as you do not stop." },
  { "author": "Babe Ruth", "text": "Never let the fear of striking out keep you from playing the game." },
  { "author": "Mother Teresa", "text": "Spread love everywhere you go. Let no one ever come to you without leaving happier." },
  { "author": "Henry David Thoreau", "text": "Go confidently in the direction of your dreams! Live the life you’ve imagined." },
  { "author": "Vince Lombardi", "text": "The only place success comes before work is in the dictionary." },
  { "author": "Bruce Lee", "text": "The successful warrior is the average man, with laser-like focus." },
  { "author": "Walt Disney", "text": "If you can dream it, you can do it." },
  { "author": "Napoleon Hill", "text": "Whatever the mind can conceive and believe, it can achieve." },
  { "author": "Tony Robbins", "text": "Setting goals is the first step in turning the invisible into the visible." },
  { "author": "Dalai Lama", "text": "The purpose of our lives is to be happy." },
  { "author": "J.K. Rowling", "text": "It is our choices, that show what we truly are, far more than our abilities." },
  { "author": "George Bernard Shaw", "text": "Life isn’t about finding yourself. Life is about creating yourself." },
  { "author": "Steve Jobs", "text": "Innovation distinguishes between a leader and a follower." },
  { "author": "Albert Einstein", "text": "Try not to become a man of success, but rather try to become a man of value." },
  { "author": "Helen Keller", "text": "Alone we can do so little; together we can do so much." },
  { "author": "Ralph Waldo Emerson", "text": "The only way to do great work is to love what you do." },
  { "author": "Stephen Hawking", "text": "However difficult life may seem, there is always something you can do and succeed at." },
  { "author": "Martin Luther King Jr.", "text": "Injustice anywhere is a threat to justice everywhere." },
  { "author": "Muhammad Ali", "text": "Don't count the days; make the days count." },
  { "author": "Michael Jordan", "text": "I’ve failed over and over and over again in my life and that is why I succeed." },
  { "author": "Henry Ford", "text": "Failure is simply the opportunity to begin again, this time more intelligently." },
  { "author": "Thomas Edison", "text": "I have not failed. I’ve just found 10,000 ways that won’t work." },
  { "author": "Winston Churchill", "text": "Success consists of going from failure to failure without loss of enthusiasm." },
  { "author": "Helen Keller", "text": "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." },
  { "author": "Leonardo da Vinci", "text": "Simplicity is the ultimate sophistication." },
  { "author": "Oscar Wilde", "text": "To live is the rarest thing in the world. Most people exist, that is all." },
  { "author": "Maya Angelou", "text": "If you don’t like something, change it. If you can’t change it, change your attitude." },
  { "author": "Confucius", "text": "Our greatest glory is not in never falling, but in rising every time we fall." },
  { "author": "Nelson Mandela", "text": "It always seems impossible until it’s done." },
  { "author": "Marie Curie", "text": "Nothing in life is to be feared; it is only to be understood." },
  { "author": "Mark Twain", "text": "The secret of getting ahead is getting started." },
  { "author": "Ralph Waldo Emerson", "text": "The only way to have a friend is to be one." },
  { "author": "Albert Schweitzer", "text": "Success is not the key to happiness. Happiness is the key to success." },
  { "author": "Aristotle", "text": "Quality is not an act, it is a habit." },
  { "author": "Henry David Thoreau", "text": "Go confidently in the direction of your dreams! Live the life you’ve imagined." },
  { "author": "Babe Ruth", "text": "Never let the fear of striking out"}
]

// Function to get a random quote from the list
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Function to display the quote on the webpage
function displayQuote(quote) {
  document.getElementById('quote-text').textContent = `"${quote.text}"`;
  document.getElementById('quote-author').textContent = `- ${quote.author}`;
}

// Function to share the current quote as PNG
// function shareQuote() {
//   const quoteCard = document.getElementById('quote-card');

//   // Use html2canvas to convert the quote card to a PNG image
//   html2canvas(quoteCard).then(canvas => {
//       // Convert canvas to image data URL
//       const imageData = canvas.toDataURL('image/png');

      // Create a temporary link element to download the image
//       const downloadLink = document.createElement('a');
//       downloadLink.href = imageData;
//       downloadLink.download = 'quote.png';
//       downloadLink.click();
//   });
// }

// Function to handle the "New Quote" button click
function handleNewQuote() {
  const randomQuote = getRandomQuote();
  displayQuote(randomQuote);
}

// Event listener for the "New Quote" button
document.getElementById('new-quote').addEventListener('click', handleNewQuote);

// // Event listener for the "Share Quote" button
// document.getElementById('share-quote').addEventListener('click', shareQuote);

// Initial display of a random quote
handleNewQuote();

// // Powered by Quotentia subtitle
// const poweredBySubtitle = document.createElement('p');
// poweredBySubtitle.textContent = 'Powered by Quotentia';
// document.getElementById('quote-card').appendChild(poweredBySubtitle);

function shareQuote() {
  const quoteText = document.getElementById('quote-text').textContent;
  const quoteAuthor = document.getElementById('quote-author').textContent;
  const poweredBySubtitle = 'Powered by Quotentia';
  
  // Create a container div for the quote elements
  const quoteContainer = document.createElement('div');
  quoteContainer.style.backgroundColor = getRandomColor(); // Get random background color
  quoteContainer.style.color = getMatchingColor(quoteContainer.style.backgroundColor); // Get matching font color
  quoteContainer.style.padding = '20px';
  quoteContainer.style.borderRadius = '10px';
  quoteContainer.style.fontFamily = 'Arial, sans-serif';
  quoteContainer.style.maxWidth = '400px';
  quoteContainer.style.margin = 'auto';
  quoteContainer.style.textAlign = 'center';

  // Create elements for quote text, author name, and powered by subtitle
  const quoteTextNode = document.createElement('p');
  quoteTextNode.textContent = quoteText;
  const authorNode = document.createElement('p');
  authorNode.textContent = quoteAuthor;
  const poweredByNode = document.createElement('p');
  poweredByNode.textContent = poweredBySubtitle;

  // Append elements to the quote container
  quoteContainer.appendChild(quoteTextNode);
  quoteContainer.appendChild(authorNode);
  quoteContainer.appendChild(poweredByNode);

  // Use html2canvas to convert the quote container to a PNG image
  document.body.appendChild(quoteContainer); // Append to body for rendering
  html2canvas(quoteContainer).then(canvas => {
      document.body.removeChild(quoteContainer); // Remove after rendering
      // Convert canvas to image data URL
      const imageData = canvas.toDataURL('image/png');

      // Create a temporary link element to download the image
      const downloadLink = document.createElement('a');
      downloadLink.href = imageData;
      downloadLink.download = 'quote.png';
      downloadLink.style.display = 'none';
      document.body.appendChild(downloadLink);
      
      // Trigger the click event on the anchor element to initiate download
      downloadLink.click();
      
      // Remove the anchor element from the DOM
      document.body.removeChild(downloadLink);
  });
}

// Function to generate a random background color
function getRandomColor() {
  let color = '';
  while (!color || color === '#ffffff') { // Ensure it's not white
      color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  return color;
}

// Function to get matching font color based on background color
function getMatchingColor(bgColor) {
  const rgb = hexToRgb(bgColor);
  const brightness = Math.round(((parseInt(rgb.r) * 299) +
      (parseInt(rgb.g) * 587) +
      (parseInt(rgb.b) * 114)) / 1000);
  return (brightness > 125) ? '#000000' : '#ffffff';
}

// Function to convert hex color to rgb format
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
}