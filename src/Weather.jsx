import Search from './Search.jsx';
import Info from './Info.jsx';
import Footer from './Footer.jsx'
import {useState} from 'react'
export default function Weather(){
    const [weatherinfo, setweatherinfo]=useState({});
    let updateinfo=(newinfo)=>{
setweatherinfo(newinfo);
    }
    return(
        <div style={{
            textAlign:"center"
        }}>
            <h2><u>Weather App by Kishore Bhukya</u></h2>
            <Search updateinfo={updateinfo}/>
            <Info info={weatherinfo}/>
            <Footer/>
        </div>
    )
}