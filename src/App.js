import { useEffect, useState } from "react"
import "./App.css"
const App=()=>{
    let[i,setI]=useState(0)
    let a=["https://wallpapers.com/images/high/slideshow-background-7aqheaxgp2ekxiq7.webp",
      "https://wallpapers.com/images/high/slideshow-background-u6xzvkknupla78br.webp",
      "https://wallpapers.com/images/high/slideshow-background-i842olie1yooderr.webp",
      "https://wallpapers.com/images/high/slideshow-background-fvxr0g8urlpiduix.webp",
      "https://wallpapers.com/images/high/slideshow-background-9jabepfz84390ku2.webp"
    ]
    let h=["heading-1","heading-2","heading-3","heading-4","heading-5",]
    let inc=()=>{
      setI((i)=>(i+1)%a.length)
    }

    let dec=()=>{
      setI((i)=>{
        if(i==0){
          return a.length-1
        }
        else{
          return i-1
        }
      })
    }

   function upd(ind){
    setI(ind)
   }

    useEffect(()=>{
      let iid=setInterval(inc,13000)
      return ()=>{
        clearInterval(iid)
      }
    },[])
   return(<div className="con">
        <img src={a[i]} alt=""/>
        <div className="head">{h[i]}</div>

        <i className="fa-regular fa-circle-left lt" onClick={dec}></i>
        <i className="fa-regular fa-circle-right gt" onClick={inc}></i>

<div className="dots">
  {
    a.map((item,ind)=>{
      return (<i className={ind==i?"fa-solid fa-circle":"fa-regular fa-circle"} onClick={()=>upd(ind)}></i>)
    })
  }
</div>

   </div>)
   
}
export default App
