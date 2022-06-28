import React from "react";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import Stories from "./components/Stories";
import "./App.css";


const App=()=>{
  // const data=useContext (AppContext) ;
  
  return (
  
    <>
    <h1>WELCOME TO NEWS WEBSITE </h1>
    <Search />
    <Pagination/>
    <Stories/>
    </>
  );

};

export default  App;
