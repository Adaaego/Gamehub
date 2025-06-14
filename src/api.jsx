import dayjs from 'dayjs';

const API_KEY = import.meta.env.VITE_GAME_API;
const base_url = "https://api.rawg.io/api/";

//Day month and year
const currentDay = dayjs().format('DD'); 
const currentMonth = dayjs().format('MMMM');
const today = dayjs().format('YYYY-MM-DD');
const lastYear = dayjs().subtract(1, 'year').format('YYYY'); 
const nextYear = dayjs().add(1, 'year').format('YYYY');

//query string for games 
const popular_games = `games?key=${API_KEY}&dates=${lastYear},${today}&ordering=-rating&page_size=20`;
const upcoming_games = `games?key=${API_KEY}&dates=${today},${nextYear}&ordering=-added&page_size=20`;
const new_games =`games?key=${API_KEY}&dates=${lastYear},${today}&ordering=-released&page_size=20`;

//full url
export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${new_games}`;

//query string for game details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=${API_KEY}`;

//game screenshots
export const gameScreenshotURL = (game_id) =>
    `${base_url}games/${game_id}/screenshots?key=${API_KEY}`;

