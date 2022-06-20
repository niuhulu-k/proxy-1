import logo from './logo.svg';
import './App.css';
import {throttle,test} from './proxy/index'


function App() {
  test()
  return (
    <div className="App">
     <div className="test" onClick={throttle(()=>{console.log('33333')},1000)}>测试proxy</div>
    </div>
  );
}

export default App;
