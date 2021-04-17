import logo from './logo.png';
import './App.css';
import Face from './Face';
import workers from "./workers"


function App() {

  

  return (
      <div className="container">
        <nav>
            <img src={logo} alt="logo"/> 
            <button id="visitorsBut">Visitors</button>
            <button id="usersBut">Users</button>
            <h2>CheckIt!</h2>
      </nav>
        <main className="faces">
          {workers.map(person =>
          <Face src={person.src} name={person.name} id={person.id}/>
          )}
          </main>
            <div id="sidebar">SIDEBAR will go here</div>
         </div>
  );
}

export default App;
