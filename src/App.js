
import './App.css';
import Header from './components/Header/Header';
// import bootstrap 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PlayerDetails from './components/PlayerDetails/PlayerDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <PlayerDetails></PlayerDetails>
    </div>
  );
}

export default App;
