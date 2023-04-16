import { faBed, faCalendar, faCar, faMartiniGlass, faPerson, faPlane, faSpa } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'

const Header = ({type}) => {
  const [opendate, setOpendate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOption, setopenOption] = useState(false);
  const [option,setOption]=useState({
    adult:0,
    children:0,
    room:0
  })
  const handleOption=(name,operation)=>{
    setOption((previous)=>{
      return{
        ...previous,[name]:operation==="i"? option[name]+1:option[name]-1
      }
    })
  }
      return (
    <div className='header'>
        <div className="headercontainer">
      <div className='headerList'>
        <div className='headerListItem'>
        <FontAwesomeIcon icon={faPlane} flip  />
        <span>Tickets</span>
        </div>
        <div className='headerListItem'>
        <FontAwesomeIcon icon={faCar} flip />
        <span>Cars</span>
        </div>
        <div className='headerListItem'>
        <FontAwesomeIcon icon={faBed} flip />
        <span>Bedrooms</span>
        </div>
        <div className='headerListItem active'>
        <FontAwesomeIcon icon={faMartiniGlass} flip  />
        <span>Countries</span>
        </div>
        <div className='headerListItem'>
        <FontAwesomeIcon icon={faSpa} flip  />       
         <span>SPA</span>
        </div>
      </div>
      {type!=="list"&&<><h1 className="headertitle">Best Prices Best Offer</h1>
      <p className="headerdesc">
Get some benefits with your traveling. Gain 10% discount on each trip by signing up in Discoverytrip
      </p>
      <button className="headerBTN">Sign UP/Register</button>
      <div className="searchbar">
      <div className="divsearchbaritem">
        <FontAwesomeIcon icon={faBed} className='headericon' />
        <input type="text" className="searchtextinput" placeholder="where is your destination?" />     
        </div>
        <div className="divsearchbaritem">
        <FontAwesomeIcon icon={faCalendar} className='headericon'/>
        <span onClick={()=>setOpendate(!opendate)} className="headersearchtext">{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")} `}</span>
       {opendate && <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className="date"
/>}
        </div>
        <div className="divsearchbaritem">
        <FontAwesomeIcon icon={faPerson} className='headericon'/>
         <span onClick={()=>setopenOption(!openOption)} className="headersearchtext">{`${option.adult} adults . ${option.children} children . ${option.room} Room`}</span>
        { openOption&&<div className="option">
          <div className="optionItem">
            <span className="optionText">Adult</span>
            <div className="optioncounter">
            <button className="optionCounterBTN" disabled={option.adult<=1} onClick={()=>handleOption("adult","d")}>-</button>
            <span className="optioncounterNumber">{option.adult}</span>
            <button className="optionCounterBTN" onClick={()=>handleOption("adult","i")} >+</button>
            </div>
          </div>
          <div className="optionItem">
            <span className="optionText">Children</span>
            <div className="optioncounter">
            <button className="optionCounterBTN" disabled={option.children<=1} onClick={()=>handleOption("children","d")}>-</button>
            <span className="optioncounterNumber">{option.children}</span>
            <button className="optionCounterBTN" onClick={()=>handleOption("children","i")}>+</button>
            </div>
          </div>
          <div className="optionItem">
            <span className="optionText">Room</span>
            <div className="optioncounter">
            <button className="optionCounterBTN" disabled={option.room<=1} onClick={()=>handleOption("room","d")}>-</button>
            <span className="optioncounterNumber" >{option.room}</span>
            <button className="optionCounterBTN"onClick={()=>handleOption("room","i")}>+</button>
            </div>
          </div>
          </div>  }   
   </div>
   <div className="divsearchbaritem">
   <button className="headerBTN">Search</button>
   </div>
      </div></>}
      </div>
    </div>
  )
}

export default Header
