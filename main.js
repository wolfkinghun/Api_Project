
const url = 'https://formula-18.p.rapidapi.com/teamStanding?year=2020';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c1cc0767bdmshc67075a7bf0a8a9p1a0352jsn0b6042af5071',
		'X-RapidAPI-Host': 'formula-18.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}