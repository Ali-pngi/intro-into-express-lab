const express = require('express')

const app = express ()

// 1. Be Polite, Greet the User
// Task: Create a route that responds to URLs like /greetings/<username-parameter>.

// Examples: Matches routes like /greetings/Christy or /greetings/Mathilda.

// Response: Include the username from the URL in the response, such as “Hello there, Christy!” or “What a delight it is to see you once more, Mathilda.”

app.get("/greetings/:name", (req, res) => {
   return res.send(`Hello ${req.params.name}, how are you?`)
    
});





// 2. Rolling the Dice
// Task: Set up a route to handle URLs following the pattern /roll/<number-parameter>.

// Examples: Matches routes like /roll/6 or /roll/20.

// Validation: If the parameter is not a number, respond with “You must specify a number.” For instance, /roll/potato should trigger this response.

// Functionality: If a valid number is provided, respond with a random whole number between 0 and the given number. For example, a request to /roll/16 might respond with “You rolled a 14.”


app.get('/roll/:number', (req, res) => {
    const number = req.params.number;
    const parsedNumber = parseInt (number, 10);

    if (isNaN(parsedNumber)) {
        res.send('You must declare a number.')
    } else {
        const randomNumber = Math.floor(Math.random() * (parsedNumber + 1));
        res.send(`You rolled ${randomNumber}`);
    }
});







// 3. I Want THAT One!
// Task: Create a route for URLs like /collectibles/<index-parameter>.

// Examples: Matches routes such as /collectibles/2 or /collectibles/0.

// Data Array:

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  app.get('/collectibles/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);

    if (index >= 0 && index < collectibles.length) {
        const collectible = collectibles[index];
        res.send(`You like the ${collectible.name}? ${collectible.price} and it's yours!`);
    } else {
        res.send('This out is out of stock. Have a look for something else?');
    }
  });




  
  // Validation: If the index does not correspond to an item in the array, respond with “This item is not yet in stock. Check back soon!”
  
  // Response: Should describe the item at the given index, like “So, you want the shiny ball? For 5.95, it can be yours!” Include both the name and price properties.
 
  app.get('/shoes', (req, res) => {
    const minPrice = parseFloat(req.query['min-price']);
    const maxPrice = parseFloat(req.query['max-price']);
    const type = req.query.type;

    let filteredShoes = shoes.filter(shoe => {
        return (isNaN(minPrice) || shoe.price >= minPrice) &&
               (isNaN(maxPrice) || shoe.price <= maxPrice) &&
               (!type || shoe.type === type);
    });
     res.send(`Name: ${shoe.name}, Price: ${shoe.price}, Type: ${shoe.type}`);
  });
    

  
  
  app.listen(3000, () => {
    
  })