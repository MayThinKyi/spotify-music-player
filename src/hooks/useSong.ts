import { useContext } from "react";
import {  MusicContext } from "../contexts/MusicContextProvider";

const useSong=()=>{
    const context =useContext(MusicContext);
    if(!context) throw new Error('Please wrap Music Context provider!');
    return context;
 }

export default useSong;