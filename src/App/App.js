import './App.css';
import Face from '../Face';
import workers from "../DummyData/workers"
import React, {useState} from "react"
import NavBar from '../NavBar';
import SideBar from '../SideBar'


function App() {

  return (
      <div className="MainContainer">
       <div id="navBar"><NavBar />
       </div>

        <main className="staff">
          {workers.map(person =>
          <Face src={person.src} name={person.name} id={person.id}/>
          )}
          </main>


          <div id="sidebar"> 
         <SideBar/>
              </div>
         </div>
  );
}

export default App;
