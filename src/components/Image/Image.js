import React from "react";
import Search from "../Search/Search";
import "./Image.css";

const Image = () => {
  const [getImages, setGetImages] = React.useState([]);
  const [favouriteList, setFavouriteList] = React.useState([]);

  const searchImage = (text) => {
    const options = {
      headers: {
        Authorization:
          "R6Sr6j8ll6LwP7c7BEiO9jF9ZMOGJGLMZZ1o38PIURoivqvtwsXxzFhq",
      },
    };

    const finalUrl = `https://api.pexels.com/v1/search?query=${text}`;
    fetch(finalUrl, options)
      .then((data) => data.json())
      .then((dataParsed) => {
        console.log(dataParsed.photos);
        setGetImages(dataParsed.photos);
      });
  };

  const selectedImage = (img) => {
    setFavouriteList([...favouriteList, img]);
  };

  console.log(favouriteList);

  return (
    <div className="img">
      <Search searchImage={searchImage}></Search>

      <h3>Resultados de busqueda:</h3>
      <div className="img__container">
        {getImages.map((img) => (
          <img
            className="img__box"
            key={img.id}
            alt="busqueda"
            src={img.src.small}
            onClick={() => {
              selectedImage(img.src.small);
            }}
          ></img>
        ))}
      </div>

      <h3>Guardar en Favoritos</h3>
      <div className="img__container">
        {favouriteList.map((img) => (
          <img className="img__box" key={img.id} alt="busqueda" src={img}></img>
        ))}
      </div>
    </div>
  );
};

export default Image;
