const API_KEY = process.env.REACT_APP_API_KEY;

const BASE_URL = `https://api.giphy.com/v1/gifs`;

const setURL = (URL) =>
  URL.replace(":BASE_URL", BASE_URL).replace(":API_KEY", API_KEY);

const getData = ({ URL }) => fetch(setURL(URL)).then((res) => res.json());

export default getData;
