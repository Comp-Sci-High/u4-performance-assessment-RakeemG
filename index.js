const express = require('express');
const path = require('path');
const app = express();

const recipes = [
  {
    title: "Classic Spaghetti Carbonara",
    description: "A traditional Italian pasta dish with eggs, cheese, pancetta, and pepper.",
    ingredients: ["200g spaghetti", "100g pancetta", "2 large eggs", "50g Pecorino Romano cheese", "50g Parmesan cheese", "Black pepper", "Salt"],
    instructions: [
      "Cook spaghetti in salted boiling water until al dente.",
      "Fry pancetta until crispy in a pan.",
      "Whisk eggs with grated cheeses and black pepper.",
      "Drain pasta and mix with pancetta.",
      "Remove from heat and stir in egg mixture until creamy.",
      "Serve with extra cheese and pepper."
    ],
    imageUrl: "https://www.kyleecooks.com/wp-content/uploads/2020/04/Spaghetti-Carbonara-20.jpg"
  },
  {
    title: "Homemade Margherita Pizza",
    description: "A simple yet delicious pizza with fresh tomatoes, mozzarella, and basil.",
    ingredients: ["1 pizza dough", "150g mozzarella cheese", "200g canned tomatoes", "Fresh basil leaves", "1 tbsp olive oil", "Salt", "Black pepper"],
    instructions: [
      "Preheat oven to 475°F (245°C).",
      "Roll out pizza dough on a floured surface.",
      "Spread tomatoes evenly on the dough.",
      "Add slices of mozzarella and drizzle with olive oil.",
      "Bake for 10-12 minutes until golden and bubbly.",
      "Garnish with fresh basil and serve."
    ],
    imageUrl: "https://th.bing.com/th/id/OIP.A_7IadfotxHc56iM-XuY5AHaJd?rs=1&pid=ImgDetMain"
  },
  {
    title: "Grilled Lemon Herb Chicken",
    description: "Juicy grilled chicken marinated with lemon, garlic, and herbs.",
    ingredients: ["2 chicken breasts", "2 tbsp olive oil", "Juice of 1 lemon", "2 garlic cloves, minced", "1 tsp dried oregano", "1 tsp dried thyme", "Salt and pepper to taste"],
    instructions: [
      "Mix olive oil, lemon juice, garlic, oregano, thyme, salt, and pepper.",
      "Marinate chicken in the mixture for at least 30 minutes.",
      "Preheat grill and cook chicken for 6-7 minutes per side.",
      "Let rest before slicing and serving."
    ],
    imageUrl: "https://bing.com/th?id=OSK.fc4f9c0c46724ba2b309857853a48a7d"
  },
  {
    title: "Classic Pancakes",
    description: "Fluffy pancakes perfect for breakfast, served with syrup or fruit.",
    ingredients: ["1 cup all-purpose flour", "1 tbsp sugar", "1 tsp baking powder", "1/2 tsp baking soda", "1 cup milk", "1 egg", "2 tbsp melted butter", "1/2 tsp vanilla extract"],
    instructions: [
      "Whisk together flour, sugar, baking powder, and baking soda.",
      "In another bowl, whisk milk, egg, butter, and vanilla.",
      "Combine wet and dry ingredients, stirring until just mixed.",
      "Heat a pan and pour in batter, cooking until bubbles form.",
      "Flip and cook for another minute until golden brown.",
      "Serve with syrup or fresh fruit."
    ],
    imageUrl: "https://bing.com/th?id=OSK.e44375668c64057a6c2f2abeeedeb3ac"
  },
  {
    title: "Avocado Toast with Poached Egg",
    description: "A healthy and delicious toast topped with creamy avocado and a soft poached egg.",
    ingredients: ["1 slice of whole-grain bread", "1/2 ripe avocado", "1 egg", "1 tsp lemon juice", "Salt and pepper", "Chili flakes (optional)"],
    instructions: [
      "Toast the bread until golden brown.",
      "Mash avocado with lemon juice, salt, and pepper.",
      "Poach the egg in simmering water for 3-4 minutes.",
      "Spread avocado on toast and top with the poached egg.",
      "Sprinkle with chili flakes if desired."
    ],
    imageUrl: "https://bing.com/th?id=OSK.515d42eea7857a57bdc4f670f2a917e2"
  }
];

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/recipes', (req, res) => {
    res.render('recipe', { recipes });
});

app.get('/recipes/:id', (req, res) => {
    const recipe = recipes[req.params.id - 1];
    if (recipe) {
        res.render('recipeinfo', { recipe });
    } else {
        res.status(404).render('404');
    }
});

app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
