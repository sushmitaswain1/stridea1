import React, {useState, useEffect, lazy, Suspense} from 'react';
//import Imagecard from './Components/Imagecard';
import "./Components/Styles.css";
const Imagecard = lazy(() => import("./Components/Imagecard") );



function App() {
  const[results, setResults] = useState([]);
  useEffect(() => {
    loadData();
  }, []);
  
  const loadData = async () => {
  const response = await fetch('https://retoolapi.dev/9Q1LJb/data');
  const data = await response.json();
  setResults(data);
  console.log(data);
  
};
  
  return (
    <Suspense fallback={<div>Loading...!</div>}>


      <div class="card-list">
    
         <Imagecard results = {results}/>
      </div>
    </Suspense>
    
  );
}

export default App;
