import useStore from './store';
import Test from './Test'
import './App.css';

function App() {
  const {count,increaseCount,decreaseCount,isDark} = useStore()
console.log(isDark)
  return (
    <div className="App">
      <p>구독자 {count}명</p>
      <button onClick={()=>increaseCount()}>증가</button>
      <button onClick={()=>decreaseCount()}>감소</button>
      <Test/>
    </div>
  );
}

export default App;
