import './App.css';
import Face from '../Face';
import workers from "../DummyData/workers"
import React, {useState} from "react"
import NavBar from '../NavBar';
import SideBar from '../SideBar'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import StaffListPage from '../StaffListPage';
import AdminPage from '../AdminPage';



function App() {

  return (
    <Router>
      <Switch>
      <Route path="/StaffList">
            <StaffListPage />
          </Route>

          <Route path="/AdminPage">
            <AdminPage />
          </Route>
          
      <Route path="/">

      <div className="MainContainer">
       <div id="navBar"><NavBar />
       </div>

        <main className="staff">
          {workers.map(person =>
          <Face key={person.id} src={person.src} name={person.name} id={person.id}/>
          )}
          </main>


          <div id="sidebar"> 
         <SideBar/>
              </div>
         </div>
         </Route>

         </Switch>
         </Router>
  );
}

export default App;
