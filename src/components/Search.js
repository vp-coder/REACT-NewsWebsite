import React from "react";
import {useGlobalContext} from "../context/Context";
const Search=()=>{
  const{query,searchPost}=useGlobalContext();
  return (
    <>
    <h2>NEWS WEBSITE</h2>
    <form onSubmit={(e)=>e.preventDefault()}>
      <div>
        <input
        type="text"
        placeholder="search here"
        value={query}
        onChange={(e)=>searchPost(e.target.value)}
        />
      </div>
    </form>
    </>

  );
    
};

export default  Search;
