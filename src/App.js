import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './les pages/Main/Main';
import List from './les pages/list/List';
import Hotel from './les pages/hotels/Hotel';
import ListPass from './les pages/list/ListPass';

function App() {
   const Countries=[
    {
        id:Math.random(),
        name: "Australia",
        imageURL:'https://www.planetware.com/photos-large/AUS/australia-beautiful-places-sydney-harbour.jpg',
        Ticketprice: 250,

    },
    {
        id:Math.random(),
        name: "Singapore",
        imageURL:'https://thumbs.dreamstime.com/b/horizon-de-singapour-%C3%A0-un-cr%C3%A9puscule-37706671.jpg',
        Ticketprice: 300,

    },
    {
        id:Math.random(),
        name: "Italy",
        imageURL:'https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs=',
        Ticketprice: 400,

    },
    {
        id:Math.random(),
        name: "Morroco",
        imageURL:'https://deih43ym53wif.cloudfront.net/chefchaouen-morocco-shutterstock_1090471322_999d0f94d4.jpeg',
        Ticketprice: 500,

    },
    {
        id:Math.random(),
        name: "Hawai",
        imageURL:'https://media.gettyimages.com/id/1038532990/fr/photo/antenne-de-diamond-head-state-park.jpg?s=612x612&w=gi&k=20&c=nIgaDogpm8RRnfIYRKtcCIrmSyXLMhV4XrtmB9f1QMY=',
        Ticketprice: 500,

    }


]
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/hotels" element={<div><List /><><ListPass List={Countries}/></></div>}/>
        
        <Route path="/hotel/:id" element={<Hotel List={Countries}/>}/>
      </Routes>
      

      </BrowserRouter>
    </div>
  );
}

export default App;
