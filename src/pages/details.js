import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Fina } from "./style";

// import comentarios from '../../components/Comments/index';
import Assistido from "../components/Buttonsign/assistido";

function Details() {
    const { id } = useParams();
    const [movies, setMovies] = useState({});

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/marycamila184/movies/movies/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
            });
    }, [id]);

    const handleAssistidoClick = (id) => {
        setMovies((prevState) => ({
            ...prevState,
            assistido: !prevState.assistido
        }));
    };

    return (

        <div>
            <Fina>
                <h1> Detalhes</h1>
            </Fina>
            <Container>
                <div className="movies">
                    <img src={movies.poster} alt={movies.titulo} />
                    <div className="details">
                        <h1>Título original: {movies.titulo}</h1>
                        <span> Ano: {movies.ano}</span>
                        <span> Nota: {movies.nota}</span>
                        <span> Direção: Jon Favreau  Roteiro   </span>
                        <span> Roteiro: Matt Holloway, Mark Fergus</span>
                        <Assistido
                            assistido={movies.assistido}
                            onClick={handleAssistidoClick}
                            id={movies.id}
                        />
                        <Link to="/">
                            <button variant="primary">Voltar</button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Details;