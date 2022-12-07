import './App.css';
import Friend from "./Friend";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Friend name="Bobby"/>
      <Friend name="Amanda" />
      <Friend name="Rob"/>
      <Friend name="Mandy"/>
      </header>
    </div>
  );
}

export default App;
