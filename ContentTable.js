import React, { useEffect,useState } from "react";
import SearchIcon from '../Images/SearchIcon.svg';
import LeftArrow from  '../Images/LeftArrow.svg';
import RightArrow from '../Images/RightArrow.svg';

// const data1 = [
//   { SrNo,Project, ServerAddress, SSLExp,
//   Lastupdated, Resptime,Status,Details},
// ]

const data1 = [
  { SrNo: "1",Project:"Scrobits Dev", ServerAddress:"scrobitsDev.com", SSLExp:"in 2d",
  Lastupdated:"5 mins ago", Resptime:"500ms",Status:"Healthy",Details:"Link"},
]

 function serverStatus(){
    //  const [data1,setServer] = useState([]);
   
   const url="https://api-monitor.scrobits.com/api/v1/users/projects/8";
    fetch(url).then((response)=>{
      return response.json();
    }).then((data)=>{
      let serverData= data;
      console.log(serverData);
    })
}

export default function ContentTable() {

  return (
    <div className='ContentTable' onLoad={(serverStatus())}>
     <div className="Container">
     <img className='SearchIcon' src={SearchIcon}/>
        <input type="text" placeholder="Search project " className="Search"></input>
     </div>
        
      <table className='Table'>
        <thead>
        <tr>
          <th className='columnName'><center>Sr.No</center></th>
          <th className='columnName'><center>Project</center></th>
          <th className='columnName'><center>Server Address</center></th>
          <th className='columnName'><center>SSL Exp</center></th>
          <th className='columnName'><center>Last updated</center></th>
          <th className='columnName'><center>Resp time</center></th>
          <th className='columnName'><center>Status</center></th>
          <th className='columnName'><center>Details</center></th>
        </tr>
        </thead>
        {data1.map((val, key) => {
          return (
           <>
           <tbody>
           <tr key={key}>
           <td><center>1</center></td>
              <td><center>{val.Project}</center></td>
              <td><center>{val.ServerAddress}</center></td>
              <td><center>{val.SSLExp}</center></td>
              <td><center>{val.Lastupdated}</center></td>
              <td><center>{val.Resptime}</center></td>
              <td><center>{val.Status}</center></td>
              <td><center>{val.Details}</center></td>
            </tr>
            <tr className="EvenRow" key={key}>
            <td><center>2</center></td>
              <td><center>{val.Project}</center></td>
              <td><center>{val.ServerAddress}</center></td>
              <td><center>{val.SSLExp}</center></td>
              <td><center>{val.Lastupdated}</center></td>
              <td><center>{val.Resptime}</center></td>
              <td><center>{val.Status}</center></td>
              <td><center>{val.Details}</center></td>
            </tr>
            <tr key={key}>
            <td><center>3</center></td>
              <td><center>{val.Project}</center></td>
              <td><center>{val.ServerAddress}</center></td>
              <td><center>{val.SSLExp}</center></td>
              <td><center>{val.Lastupdated}</center></td>
              <td><center>{val.Resptime}</center></td>
              <td><center>{val.Status}</center></td>
              <td><center>{val.Details}</center></td>
            </tr>
            <tr className="EvenRow" key={key}>
            <td><center>4</center></td>
              <td><center>{val.Project}</center></td>
              <td><center>{val.ServerAddress}</center></td>
              <td><center>{val.SSLExp}</center></td>
              <td><center>{val.Lastupdated}</center></td>
              <td><center>{val.Resptime}</center></td>
              <td><center>{val.Status}</center></td>
              <td><center>{val.Details}</center></td>
            </tr>
            <tr key={key}>
            <td><center>5</center></td>
              <td><center>{val.Project}</center></td>
              <td><center>{val.ServerAddress}</center></td>
              <td><center>{val.SSLExp}</center></td>
              <td><center>{val.Lastupdated}</center></td>
              <td><center>{val.Resptime}</center></td>
              <td><center>{val.Status}</center></td>
              <td><center>{val.Details}</center></td>
            </tr>
            <tr className="EvenRow" key={key}>
            <td><center>6</center></td>
              <td><center>{val.Project}</center></td>
              <td><center>{val.ServerAddress}</center></td>
              <td><center>{val.SSLExp}</center></td>
              <td><center>{val.Lastupdated}</center></td>
              <td><center>{val.Resptime}</center></td>
              <td><center>{val.Status}</center></td>
              <td><center>{val.Details}</center></td>
            </tr>
            <tr key={key}>
            <td><center>7</center></td>
              <td><center>{val.Project}</center></td>
              <td><center>{val.ServerAddress}</center></td>
              <td><center>{val.SSLExp}</center></td>
              <td><center>{val.Lastupdated}</center></td>
              <td><center>{val.Resptime}</center></td>
              <td><center>{val.Status}</center></td>
              <td><center>{val.Details}</center></td>
            </tr>
            <tr className="EvenRow" key={key}>
            <td><center>8</center></td>
              <td><center>{val.Project}</center></td>
              <td><center>{val.ServerAddress}</center></td>
              <td><center>{val.SSLExp}</center></td>
              <td><center>{val.Lastupdated}</center></td>
              <td><center>{val.Resptime}</center></td>
              <td><center>{val.Status}</center></td>
              <td><center>{val.Details}</center></td>
            </tr>
            <tr>
            <td></td>
            <button type="button" id="LeftButton"> <img src={LeftArrow}></img></button>
              <center><div id='PageOutOf'> page out of </div></center> 
              <button type="button" id="RightButton"> <img src={RightArrow}></img></button>
            </tr>
            </tbody>
          </> 
          )
        })}
      </table>
     </div>
  )
}

