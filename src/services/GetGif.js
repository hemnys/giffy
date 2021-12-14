
import FetchData from "./FetchData.js";
export default function getGif({ id } = {}){
    const URL = `:BASE_URL/${id}?api_key=:API_KEY`;
    return FetchData({URL}).then(({data}) => {
      const { title, source, id, import_datetime } = data;
      const image = data.images.downsized_large.url;
      return { title, source, id, import_datetime, image };
    })
}

