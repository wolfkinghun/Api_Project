import { apiKey } from "./apiKey.js";
import { getData } from "./getData.js";

let url
const options = {
	method: 'GET',
	headers: {'X-Api-Key': apiKey},
	contentType: 'application/json'
};


let totalPages 
let totalItems
const itemPerPage = 3
let page = 1
let data
let images = []
checkContent()
checkButtonContent()

function renderFc(result) {
	console.log(result);
	data = result
	for (let i = 0; i < result.length; i++) {
		images.push(`https://source.unsplash.com/random/368×207/?food&randomNumber=${Math.floor(Math.random() * 100) + 1}`)
	}
	totalItems = data.length
	totalPages = Math.ceil(totalItems / itemPerPage)
	renderPage()
	renderPageButtons()
	document.querySelector('.pages').children[0].style.color = '#48CAE4'
	toggleHidden()
}

function renderPage() {
	document.querySelector('.articles').innerHTML = ""
	for (let pageData = (page - 1) * itemPerPage; pageData < (page) * itemPerPage; pageData++) {
		if (data.length == pageData) break
		document.querySelector('.articles').innerHTML +=`<article>
														<div class="article-wrapper flex-wrap justify-center items-center">
														<figure class="mt-1">
															<img class="m-auto" src="${images[pageData]}" alt="" />
														</figure>
														<div class="article-body">
															<h2>${data[pageData].title}</h2>
															
															<a href="" class="read-more" onclick="redirect(event, ${data[pageData]})">
															Read more <span class="sr-only">about this</span>
															<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
																<path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
															</svg>
															</a>
														</div>
														</div>
													</article>`
	}
	checkContent()
}

function renderPageButtons() {
	document.querySelector('.pages').innerHTML = ""
	for (let i = 1; i <= totalPages; i++) {
		let button = document.createElement('button')
		button.textContent = i
		button.addEventListener('click', handlePage)
		document.querySelector('.pages').appendChild(button)
	}
	checkButtonContent()
}

function handlePage(event) {
	page = +event.target.textContent
	for (let element of document.querySelector('.pages').children) {
		if (page == element.textContent) element.style.color = '#48CAE4'
		else element.style.color = 'black'
	}
	renderPage()
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

function checkButtonContent() {
	let pages = document.querySelector('.pages')
	if (pages.childElementCount == 0) pages.style.backgroundColor = 'rgb(76 29 149)'
	else pages.style.backgroundColor = '#fff'	
}

function checkContent() {
	let content = document.getElementById('content')
	if (document.querySelector('.articles').childElementCount == 0) content.style.backgroundColor = 'rgb(76 29 149)'
	else content.style.backgroundColor = '#fff'
}

function redirect(array) {
	localStorage.setItem('data', JSON.stringify(array))
	window.location.href = 'secondary.html'
  }