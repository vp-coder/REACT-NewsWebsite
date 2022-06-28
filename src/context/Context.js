//context creation
//provider
//consumer-th one who get data-since lengthy therefore removed and rather we use useContext Hook
//useConext api comes under context api
import React, { useContext,useReducer ,useEffect} from "react";
import reducer from "./Reducer";
const API="https://hn.algolia.com/api/v1/search?"; 

const initialState={
     isLoading:true,
    query:"CSS",
    nbPages:0,
    page:0,
    hits:[],

};	
const AppContext=React.createContext();

//to create providerfunction

const AppProvider=({children})=>{
   // const [state,dispatch]=useState(initialState);
    const [state,dispatch] =useReducer(reducer,initialState);

    const fetchApiData=async(url)=> {
        dispatch({type:"SET_LOADING"});
        try{
            const res=await fetch(url);
            const data =await res.json();
            console.log(data);
            // isLoading =false;
            //problem is that in react if we want to change the data then we have to use useState hook but we gonna use useReducer hook-advanced version ..then use context hook and context api
            
            dispatch({
                type:"GET_STORIES",
                payload:{
                hits:data.hits,
                nbPages:data.nbPages,
            },
        });
        }catch(error){
            console.log(error);
        }
    };
    // useEffect (()=>{
    //     fetchApiData(`${API}query=${state.query}&page=${state.page}`);

    // }
    // );
    //to remove the post
    const removePost=(post_ID)=>{
        dispatch({type:"REMOVE_POST",payload:post_ID});
    };
    //search
    const searchPost=(searchQuery)=>{
        dispatch({
            type:"SEARCH_QUERY",
            payload: searchQuery,
        });
    };
    //pagination
    const getNextPage=()=>{
        dispatch({
            type:"NEXT_PAGE",
        });
    };
    const getPrevPage=()=>{
        dispatch({
            type:"PREV_PAGE",
        });
    };
    //to call teh api function
    useEffect(()=>{
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
},[state.query,state.page]);

// it is a syntax to use all the state accessible in its child component
    return (<AppContext.Provider
         value={{...state,removePost,searchPost,getNextPage,getPrevPage}}>
            {children}
            </AppContext.Provider>
        );
};

//custom hook creation
const useGlobalContext=()=>{
    return useContext(AppContext);

};

export{AppContext , AppProvider,useGlobalContext };
