import GetGif from "../services/GetGif";
import { useState, useEffect } from "react";
const GifDescription = ({ params }) => {
  const { id } = params;
 const [gif, updateGif] = useState({});
 useEffect(() => {
   GetGif({ id }).then((data) => updateGif(data));
   
 }, [id]);
  const { title, source, import_datetime,image } = gif;

  return (
    <>
      <div>
        <h1>{title}</h1>
        <h2>
          <span>Source:</span>
          <a href={source}>{source}</a>
        </h2>
        <img src={image} alt={title} />
        <time>{ import_datetime}</time>
      </div>
    </>
  );
  //return
};

export default GifDescription;
