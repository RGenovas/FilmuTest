import { useEffect, useRef, useState } from 'react'
import './App.css'

const url = 'https://api.themoviedb.org/3/movie/12?api_key=53c258bb52d305146e19a71e58aa2cc5' //finding Nemo dest raktas

const url1 = 'https://api.themoviedb.org/3/movie/12?api_key=74b171114f20be6de586c0540d599f2a' // finding nemo mano raktas

const url3 = 'https://api.themoviedb.org/3/movie/550?api_key=74b171114f20be6de586c0540d599f2a' // gautas is ju pvz


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGIxNzExMTRmMjBiZTZkZTU4NmMwNTQwZDU5OWYyYSIsIm5iZiI6MTcyMTIwODA0MS42NzMyMzIsInN1YiI6IjY2OTc4YzJjMzU1OTk3ZGUxMThlNGFjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IYOqBC_ZD3IHc9IqqpDTcaIBTE_N8P2SlZr1ptU6vdQ'
  }
};
const url2 = ('https://api.themoviedb.org/3/search/movie?query=The%20Burning', options)//Token bandymams

const url5 = 'https://api.themoviedb.org/3/search/movie?query=The%20Burning?api_key=74b171114f20be6de586c0540d599f2a'//neveikianti paieska su mano



// const searchHandler = (event) => {
//   event.preventDefault()

//   let searchVal = searchRef.current.value
//   fetch(`https://api.themoviedb.org/3/search/movie?query=${searchVal}`, options)
//   .then(response => response.json())
//   .then(response => console.log(response.results))
//   // .then(response => setItems(items,response.results))
//   .catch(err => console.error(err));

  
// }

const urlTopRated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=74b171114f20be6de586c0540d599f2a' //top rated filmai su mano raktu suveikia




// fetch('https://api.themoviedb.org/3/search/movie?query=The%20Burning', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


function App() {

const [topRated, setTopRated] = useState([])

const testar = [
  {title:'The testening'},
  {title:'The testening2'},
  {title:'Return of the living test'}

]


// top traukimas
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(urlTopRated)
      result.json().then(json => {
        setTopRated([...topRated,json.results])
        console.log( 'neapdorotas',json)
        console.log('pridejus results ir indeksa',json.results[0]) //pvz Shawnshank isvedimas
        
      })
    }
    fetchData()
    
    }, [])
    console.log('topas',topRated)
    console.log('Siaip sau bandymas', topRated)

// const [items, setItems] = useState([])
// const searchRef = useRef()











  return (
    <> 



    {/* <h2>TEST</h2>
    <div className='paslaugu-wrapper'>
       <form onSubmit={searchHandler}>
      <h4>Filmo paieška</h4>
      <input ref={searchRef} id='search' type="text" />
      <button type='submit'>Ieskoti</button>
      </form> 
    
    </div> */}
    <div>
      <h2>Kazkoks isvedimas</h2>
    
    <div>
      {/* <p>{getTopRated()}</p> */}
     
      <div>
        {topRated.length >0 &&
     
      <div>
      {
        topRated.map((movie,index) => {
          return (
          <div key={index}>{movie.title}</div>
        )
        })
      }
      </div>
        }
      </div>
    </div>

   
    </div>
        
    </>
  )
}

export default App
