import FetchData from "./FetchData.js";
export default function getGifs({keyword = 'morty'} = {}){
    const URL = `:BASE_URL/search?api_key=:API_KEY&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
    return FetchData({URL}).then(({data}) => {
      const gifs = data.map( gif => {
      const { id, title } = gif;
      const url = gif.images.downsized_medium.url;
      return { id, url, title };
      })
      return gifs;
    })
}