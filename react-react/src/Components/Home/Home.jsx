import axios from "axios";

import { useEffect, useState } from "react";
import styled from "styled-components";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import { DIV } from "../style";

export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8088/books").then((response) => {
      setData([...response.data]);
      console.log('response', response);

    });
  }, []);


  const Main = styled.div`
    /* Apply some responsive styling to children */
    h1{
      color:green;
    }
    
    
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <DIV className="mainContainer">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
            
        */}

        {data.map((el) => {
          return <BookCard key={el.id} id={el.id} title={el.title} price={el.price} imageUrl={el.imageUrl}/>
          // return (
          //   <div>
             
          //       <div>

          //         <img src={el.imageUrl} />
          //         <h1>{el.title}</h1>
          //         <h3>Price: {el.price}</h3>

            

          //     </div>
          //   </div>
          // )
        })
        }
      </DIV>
    </div>
  );
};  
