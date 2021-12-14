import Gif from "./Gif";
import getGifs from "../services/getGifs";
import { useState, useEffect } from "react";

const ListOfGifs = ({ params }) => {
  const { keyword } = params;
  const [gifs, updateGifs] = useState([]);
  useEffect(() => {
    getGifs({ keyword }).then((data) => updateGifs(data));
  }, [keyword]);
  return (
    <>
      {gifs.map(({ id, url, title }) => (
          <Gif key={id} title={title} id={id} url={url} keyword={keyword} />
      ))}
    </>
  );
};

export default ListOfGifs;
