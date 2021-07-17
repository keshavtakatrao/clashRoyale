import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  let[cardData,setCardData] = useState({});
  let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImM2MzVkNTc0LTQ2ZGItNGZkNy04NzUwLTEyNWM3MjNiNzYwMSIsImlhdCI6MTYyNjQ5OTUyOCwic3ViIjoiZGV2ZWxvcGVyL2UzMTIzZmQ5LTE2M2MtMjQzNy0wZmI3LWU2MzdmMjE0MzU1MCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMDMuMTk5LjE3NS4xMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.UGvV2Ochkg0s8TxFwG1NVo_Zm4HkgcfWxMoyl0YMEpyJq7uIu70vGsdOAhE8pgk6L3afv_1_Nx9pVGVOhcT0XA"
  useEffect(async ()=>{
    await axios.get('https://api.clashroyale.com/v1/cards',{
      headers:{
        'Authorization' : `Bearer ${token}`,
      }
    })
    .then((response)=>{
      console.log(response.data);
    })
  },[])
  return (
    <>
    
    </>
  );
}

export default App;
