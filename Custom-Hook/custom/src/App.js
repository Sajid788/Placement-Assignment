import logo from './logo.svg';
import './App.css';
import FetchApi from './components/useFatch';
import Search from './components/useDebounce';
import Storage from './components/useLocalStorage';
import SizeWindow from './components/useWindowSize';

function App() {
  return (
    <div className="App">
   <FetchApi/>
   <Search/>
   <Storage/>
   <SizeWindow/>
    </div>
  );
}

export default App;
