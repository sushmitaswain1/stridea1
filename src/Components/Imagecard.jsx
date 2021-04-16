import React from 'react';


import "./Styles.css";
import "./Card-styles.css";



 
const Imagecard = ({results}) => {
    const filteredImages = results.map((el) => {
       return (
          
           <div class="card-container">
              <img alt = {1} src = {`https://avatars.dicebear.com/api/human/${el.Name}.svg`} />
           </div>

            
          
       );

 });
    return <div>{filteredImages}</div>;

    

}

export default Imagecard;


