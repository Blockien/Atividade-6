import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("https://picsum.photos/v2/list")
      .then(response => setImages(response.data))
      .catch(error => console.error("Erro ao buscar imagens", error));
  }, []);

  return (
    <div>
      <h1>Galeria de Fotos</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {images.map(image => (
          <Link key={image.id} to={`/image/${image.id}`}>
            <img src={image.download_url} alt={image.author} width={200} height={150} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default App;