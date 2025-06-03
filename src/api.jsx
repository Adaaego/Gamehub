import dayjs from 'dayjs';


const base_url = "https://api.rawg.io/api/";

//Day month and year
const currentDay = dayjs().format('DD'); 
const currentMonth = dayjs().format('MMMM');
const today = dayjs().format('YYYY-MM-DD');
const lastYear = dayjs().subtract(1, 'year').format('YYYY'); 
const nextYear = dayjs().add(1, 'year').format('YYYY');

//popular games 
const popular_games = `games? dates= ${lastYear},${today}&ordering=-rating&page_size=10`;

//popular games url
const popularGamesUrl = `${base_url}${popular_games}`
console.log(popularGamesUrl())
