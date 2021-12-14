import "../Gif.css";
import { Link } from "wouter";

const Gif = ({ id, url, title,keyword }) => {
  return (
    <>
      <Link to={`/gif/${keyword}/description/${id}`}>
        <h4>{title}</h4>
        <img src={url} key={id} alt={title} />
      </Link>
    </>
  );
};

export default Gif;
