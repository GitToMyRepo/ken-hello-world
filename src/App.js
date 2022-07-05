import logo from './logo.svg';
import './App.css';
import ExampleComponent,{AnotherComponent} from './components/ExampleComponent';
import Greeting from './components/Greeting';
import SongList from './components/SongList';

function App() {
  // this is an edit
  // another comment
  // third comment
  return (
    <div className="App">
      <ExampleComponent />
      <AnotherComponent />
      <Greeting name="Matt" age="23" />
      <Greeting name="Sally" age="43" />
      <p className="firstPara" >This is another paragraph</p>
      <SongList />
    </div>
  );
}

export default App;
