import {useGlobalContext}from "../context/Context";
import React from "react";

const Stories=()=>{
    const {hits,isLoading,removePost}=useGlobalContext();
    //api call using async
    
    if(isLoading){
        return (
            <>
            <h1>Loading...</h1>
            </>
        );

    }
    return (
        <>
        <div className="stories-div">
            {hits.map((curPost)=>{
                const { title,author,objectID,url,num_comments}=curPost;
                return(
                    <div className="card"key={objectID}>
                        <h2>{title}</h2>
                        <p>
                            By<span>{author}</span>|<span>{num_comments}</span>
                            comments
                        </p>
                        <div className="card-button">
                            <a href={url} target= "_blank" rel="noreferrer">Read More</a>
                            <button href="#" onClick={()=>removePost(objectID)}>Remove </button> 
                               
                        </div>
                    </div>
                );
            })}
            </div>
        </>
    );
    
  
};

export default  Stories;
