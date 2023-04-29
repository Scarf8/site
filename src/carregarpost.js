import React, { useState, useEffect } from 'react';
import Card from './components/Card';

function Carregarpost() {
  const [movies, setMovies] = useState([]);
  // const [searchMovies, setSearchMovies] = useState([]);
  // const [text,setText] = useState("");
  // const [select, setSelect] =useState("titulo");

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error));
  }, []);


// function Buscar() {
//   const nome = [];
//   console.log(text)
//   if(text == ""){
//     setSearchMovies(movies);
//   }
//   else {
//     movies.forEach(movie =>{if (movie.titulo.includes(text)){
//       nome.add(movie)
//     }})
//     setSearchMovies(nome)
//   }
//   console.log(searchMovies)
// }

// function Ordenar(tipo) {
//   const qualquer = "";
//   if(tipo != "titulo") {
//     movies.sort(function(x, y){
//       if (x.ano < y.ano) return -1;
//       if (x.ano > y.ano) return 1;
//       return 0; 
//     })
//     console.log(movies)
//   }
// }


  return (
    // <>
    // <div>
    //       <label for="exampleInputEmail1">Barra de pesquisa</label>
    //       <input onChange={(e) => setText(e.value)} onKeyDown={()=>Buscar()} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    //       <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    //     </div>

    //     <div>
    //       <h1>
    //           v
    //       </h1>
    //       <div>
    //         <button onClick={()=>Ordenar("titulo")}>Título</button>
    //         <button onClick={()=>Ordenar("ano")}>Ano</button>
    //         <button onClick={()=>Ordenar("nota")}>Nota</button>
    //       </div>
    //     </div>
        

    <div className="card-container">
      <Card movies={movies}/>
    </div>
    // </>
  );
}

export default Carregarpost;