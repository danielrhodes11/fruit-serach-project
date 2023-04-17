const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


// search loops through the fruit array and checks if each fruit name includes the user's input (case-insensitive) using filter().
// It pushes the matching fruits into a results array.
function search() {
	let results = [];
	let inputVal = input.value;
	let maxValue = 6;
	fruit.filter((val) => {
	  if (val.toLowerCase().includes(inputVal.toLowerCase())) {
		results.push(val);
	  }


	});
	return results.slice(0,maxValue)
  };


// searchHandler calls the search() function with the fruit array to get matching results based on the input value.
// It then calls the showSuggestions() function with the results and the input value.

function searchHandler(e) {
	const results = search(fruit);
	const inputVal = e.target.value;
	suggestions.innerHTML = ''
	showSuggestions(results, inputVal);
}

// showSuggestions loops through the results array and creates a new li element for each matching fruit name.
// It appends the li element to the ul element in the HTML with class .suggestions.
// If the inputVal is empty, it clears the HTML inside the .suggestions element.

function showSuggestions(results, inputVal) {
	for(let val of results){
		const li = document.createElement('li');
		li.textContent = val;
		suggestions.appendChild(li);
	}
	if (inputVal === ''){
		suggestions.innerHTML = '';
	}
}

// If the user clicks on a suggestion li element, it gets the text content of the clicked element and sets it as the input field's value.
// It then clears the HTML inside the .suggestions element.
function useSuggestion(e) {
	if(e.target.tagName === 'LI'){
		const suggestion = e.target.textContent;
		input.value = suggestion
		suggestions.innerHTML = '';
	}
}



input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
