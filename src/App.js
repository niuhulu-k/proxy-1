import logo from './logo.svg';
import './App.css';
import {throttle} from './proxy/proxy-1'


function App() {

  return (
    <div className="App">
     <div className="test" onClick={throttle(()=>{console.log('33333')},1000)}>测试proxy</div>
    </div>
  );
}

export default App;
