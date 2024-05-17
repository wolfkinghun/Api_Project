const data = JSON.parse(localStorage.getItem('data').replaceAll("\`", "\""));;

document.querySelector('h2').textContent = data.title
document.querySelector('p').innerHTML = `Ingredients: ${data.ingredients}<br>
Servings: ${data.servings}<br>
Instructions: ${data.instructions}`