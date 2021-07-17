import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './card';
import { data } from './data';
import Navbar from './navbar';

function App() {
    var axios = require('axios')
    let [cardData, setCardData] = useState(data);
    let [search, setSearch] = useState('');
    useEffect(async () => {

        var config = {
            method: 'get',
            url: 'https://api.clashroyale.com/v1/cards',
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImM2MzVkNTc0LTQ2ZGItNGZkNy04NzUwLTEyNWM3MjNiNzYwMSIsImlhdCI6MTYyNjQ5OTUyOCwic3ViIjoiZGV2ZWxvcGVyL2UzMTIzZmQ5LTE2M2MtMjQzNy0wZmI3LWU2MzdmMjE0MzU1MCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMDMuMTk5LjE3NS4xMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.UGvV2Ochkg0s8TxFwG1NVo_Zm4HkgcfWxMoyl0YMEpyJq7uIu70vGsdOAhE8pgk6L3afv_1_Nx9pVGVOhcT0XA',
                'Access-Control-Allow-Origin': '*'
            }
        };

        await axios(config)
            .then(function (response) {
                setCardData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const handleChange = e => {
        setSearch(e.target.value);
    };

    let filtereData = cardData.items.filter(info => {
        return (
            info.name.toLowerCase().includes(search.toLowerCase()) || info.maxLevel.toString().toLowerCase().includes(search.toLowerCase())
        )

    }

    );

    return (
        <>
            <Navbar></Navbar>
            <div className="container" style={{ marginTop: "150px" }}>
                <div className='row col-12'>
                    <input type="text" class="form-control" placeholder="Search Card by name or max level" onChange={handleChange} />
                </div>
                <div className="row">
                    {filtereData.length==0 ? <center><h1 style={{textAlign:"center"}}>No Cards Found</h1></center>
                        : null
                    }
                    {filtereData.map((info) => {
                        return (
                            <Card className="col-12 col-md-4 " data={info}></Card>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default App;
