import logo from './logo.svg';
import './App.css';
import {Pelicula} from './Pelicula';
import {Paginacion} from './Paginacion';
import PeliculasJson from './Peliculas.json';
import {PageWrapper} from './PageWrapper';
import {useState, useEffect} from 'react';

function App() {
  // TRAIGO PELICULAS DE UN ARCHIVO JSON CON ARRAY
  
  const [paginaActual, setPaginaActual] = useState(1);
  const totalPorPag = 3;
  let peliculas = PeliculasJson;

  const buscarPeliculas = () => {
    let url="https://lucasmoy.dev/data/react/peliculas.json";

    fetch(url, {
      "method": 'GET',
      "headers": {
        "Accept": 'aplication/json',
        "Content-Type": 'aplication/json',
      }
    })
  }


  const getTotalPag = () => {
    let cantidadTotalDePeliculas = PeliculasJson.length;
    return Math.ceil(cantidadTotalDePeliculas / totalPorPag);
  }
  
  
    
  const cargarPeliculas = () => {
    peliculas = peliculas.slice(
      (paginaActual - 1) * totalPorPag,
      paginaActual * totalPorPag
      );
  }

  cargarPeliculas();

  return (
    <div>
     <PageWrapper>
       {/* SE CREA UN MAP DE PELICULAS PARA SIMPLIFICAR CODIGO */}

       {peliculas.map (peliculas => { 
        return <Pelicula img={peliculas.img} titulo={peliculas.titulo} calificacion={peliculas.calificacion} director={peliculas.director} actores={peliculas.actores} duracion={peliculas.duracion} fecha={peliculas.fecha}>
        {peliculas.descripcion}
        </Pelicula>
        }
        )}


        <Paginacion pagina={paginaActual} total={getTotalPag()} onChange={(pagina) => {
          setPaginaActual(pagina)
        }} />
      
        {/* PRIMERA ETAPA MODULAR PELICULAS */}
        {/* <Pelicula img="images/uploads/mv2.jpg" titulo="into the wild (2014)" calificacion="7.8" director="Anthony Russo, Joe Russo" actores="Samuel L. Jackson.,Chris Evans,Scarlett Johansson" duracion="2h 21mins" fecha="1 May 2015">
        As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat...
        </Pelicula>

        <Pelicula img="images/uploads/mv3.jpg" titulo="blade runner (2015)" calificacion="7.3" director="Peyton Reed" actores="Paul Rudd,Michael Douglas" duracion="2h 21mins" fecha="1 May 2015">
        Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help...
        </Pelicula>

        <Pelicula img="images/uploads/mv4.jpg" titulo="Mulholland pride (2013)" calificacion="7.2" director="Shane Black" actores="Robert Downey Jr.,Guy Pearce,Don Cheadle" duracion="2h 21mins" fecha="1 May 2015">
        When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.
        </Pelicula>

        <Pelicula img="images/uploads/mv5.jpg" titulo="skyfall: evil of boss (2013)" calificacion="7.0" director="Alan Taylor" actores="Chris Hemsworth,Natalie Portman,Tom Hiddleston" duracion="2h 21mins" fecha="1 May 2015">
        When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.
        </Pelicula> */}
 


     </PageWrapper>
    </div>
  );
}

export default App;
