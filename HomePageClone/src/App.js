import React, {useState,useEffect}from 'react';
import './App.css';
import List from './page/List';

// Component
import Header from './components/Header'
import Main from './components/Main';

function App() {
  const [data,setData] =useState([])
  const API_URL = 'https://api.themoviedb.org/3/';
  const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
  const API_KEY = 'd1c8634fd74758ba1cc16edbc793201f'

  useEffect(()=>{
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;
    fetch(endpoint)
    .then((response) => response.json())  
    .then((response)=>{

      setData([...response.results])
    })
  },[])
  console.log(data)


  return (
    <div className="App">
      <Header/>
      <Main/>

      <List data={data}/>
    </div>
  );
}

export default App;
