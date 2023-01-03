import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="inner-App">
        <Nav />
        <Main />
      </div>
    </div>
  );
}

export default App;
