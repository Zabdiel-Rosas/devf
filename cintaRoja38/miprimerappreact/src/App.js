import React , { useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Saludo from './Saludo';
import Despedida from './Despedida';
import Contador from './Contador';
import Multiplicador from './Multiplicador';
import Card from './Card';
import axios from 'axios';

function App() {
  // const Cards = [<Card tittle="Titulo 1"/>, <Card tittle="Titulo 2"/>, <Card tittle="Titulo 3"/>, <Card tittle="Titulo 4"/>];

  // const arrObjects = [
  //   {
  //     id: 1,
  //     tittle: "Harry Potter"
  //   },
  //   {
  //     id: 2,
  //     tittle: "Narnia"
  //   },
  //   {
  //     id: 3,
  //     tittle: "Percy Jackson"
  //   },
  //   {
  //     id: 4,
  //     tittle: "The Perks of Being Ernest"
  //   },
  //   {
  //     id: 5,
  //     tittle: "The Little Prince"
  //   }
  // ];

  const [isLoading, setIsLoading] = useState(true);
  const [authors, setAuthors] = useState([]);

   //useEffect se ejecuta automaticamente y despues del rendereo
  useEffect(() => {
    axios.get('https://goodreads-devf-aaron.herokuapp.com//api/v1/authors/')
      .then((result) => {
        setAuthors(result.data);
        setIsLoading(false);
      })
      .catch((err)=> {
        console.log(err);
      })
  }, []);

  // const arrCards = arrObjects.map((pelicula) => {
  //   return <Card tittle={pelicula.tittle}/>
  // });

  const validacion = () => {
    if(isLoading){
      return <h1>Cargando...</h1>
    }else {
      const listCardAuthor = authors.map((author)=> {
        return <Card tittle = {author.name}/> 
      });
      return listCardAuthor;
    }
  }

  return (
    <div className="App">
     {/* <h1>Hola desde el componente App</h1>
     <Saludo />
     <Despedida mensaje="sale chido bye"/>
     <Contador />
     <br/>
     <Multiplicador /> */}
    <div className="row">
      {validacion()}
    </div>
    </div>
  );
}

export default App;
