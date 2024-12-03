'use client'
import Pictures from "@/components/Pictures";
import { useEffect, useState } from "react";

export default function Home() {
  const [pictures,setPictures] = useState([]);
  const [fetchTrigger, setFetchTrigger] = useState(false);
  const getPicsum = async (url) =>{
    const response = await fetch(url);
    if(response.ok){
      const newImage = {id:crypto.randomUUID(),imageUrl: response.url}
      setPictures((prevPictures) => [...prevPictures, newImage]);
      setFetchTrigger(false);
    }
   
  }
  useEffect(()=>{
    if(fetchTrigger){
      const baseUrl = `https://picsum.photos/seed/${Math.floor(Math.random() * 100)}/200/300`
      getPicsum(baseUrl)
    }
  },[fetchTrigger])
  const handleClick = () =>{
    setFetchTrigger(true);
  }
  return (
    <>
      <div>
        <button onClick={handleClick}>Resim Ekle</button>
        <Pictures pictures = {pictures}/>
      </div>
    </>
  );
}
