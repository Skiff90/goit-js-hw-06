const categoriesItemRef = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesItemRef.length}`);

categoriesItemRef.forEach((element) => {
  const elementTextRef = document.querySelector('h2');
  console.log(`Category:${elementTextRef.textContent}`);

  const numberOfElementsRef = document.querySelectorAll('ul');
  console.log(`Elements: ${numberOfElementsRef.length}`);
});

//task 1 allready done
