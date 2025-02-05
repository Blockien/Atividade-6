import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ImageDetails = () => {
  const { id } = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    axios.get(`https://picsum.photos/id/${id}/info`)
      .then(response => setImage(response.data))
      .catch(error => console.error("Erro ao buscar detalhes da imagem", error));
  }, [id]);

  if (!image) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Detalhes da Imagem</h1>
      <img src={image.download_url} alt={image.author} width={400} />
      <p>Autor: {image.author}</p>
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default ImageDetails;
