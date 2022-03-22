import { Link, Navigate } from "react-router-dom";
import { Text } from "../style";
export const Navbar = () => {
  return (
    <>
      <Text className="navbar">
        <button onClick={() =>{
           Navigate("/");
         }}>Home</button>
         <button onClick={() =>{
          Navigate ("/section/Mystery");
         }}>Mystery</button>
         <button onClick={() =>{
           Navigate("/section/Technology");
         }}>Technology</button>
         <button onClick={() =>{
           Navigate("/section/Mythology");
         }}>Mythology</button>
         <button onClick={() =>{
           Navigate("/section/history");
         }}>Histroy</button>
         
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </Text>
    </>
  );
};
