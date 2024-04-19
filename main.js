import { apiKey } from "./apiKey.js";
import { getData } from "./getData.js";

let url
const options = {
	method: 'GET',
	headers: {'X-Api-Key': apiKey},
	contentType: 'application/json'
};

function renderFc(result) {
	console.log(result);
	toggleHidden()
}

document.querySelector('.myBtn').addEventListener('click', () => {
	let content = document.querySelector('.myInput').value
	if (content == "") return
	url = 'https://api.api-ninjas.com/v1/recipe?query=' + content
	toggleHidden()
	getData(url, options, renderFc)
})

addEventListener('DOMContentLoaded', toggleHidden)

function toggleHidden() {
	if (document.querySelector('.myBtn').classList.contains('hidden')) {
		document.querySelector('.myBtn').classList.remove('hidden')
		document.querySelector('.loading').classList.add('hidden')
	} else {
		document.querySelector('.myBtn').classList.add('hidden')
		document.querySelector('.loading').classList.remove('hidden')
	}
}