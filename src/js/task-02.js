const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientListRef = document.querySelector('ul#ingredients');
console.log('🚀 ~ file: task-02.js:11 ~ ingredientListRef:', ingredientListRef);

const createIngredientList = (ingredients) => {
  return ingredients.map((ingredient) => {
    const ingredientItemRef = document.createElement('li');
    ingredientItemRef.className = 'item';
    ingredientItemRef.textContent = ingredient;
    return ingredientItemRef;
  });
};
ingredientListRef.append(...createIngredientList(ingredients));
console.log(createIngredientList(ingredients));
