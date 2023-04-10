import axios from "axios"


const options = {
  method: 'GET',
  url: 'https://online-movie-database.p.rapidapi.com/title/get-videos',
  params: {tconst: 'tt0944947', limit: '25', region: 'US'},
  headers: {
    'X-RapidAPI-Key': 'dadf28600bmshcc048cb21ffe72cp1a57d9jsn8c87e0ddae98',
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


export default options

