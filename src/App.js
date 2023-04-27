import logo from './logo.svg';
import './App.css';
import Navigation from './navigation';
import Box from './bootstrap';
import ToDo from './ToDo';
// import Counter from './useState';
import Addingarray from './Hooks/Addingarray';
import DeletingArray from './Hooks/DeletingArray';
import Second from './props/second';
import Third from './props/third';
import Counter from './Hooks/counter';
import Increment from './Hooks/Increment';

 

function App() {
  return (
    <div>
    {/* <Second/>
    <Third/> */}
      <Counter></Counter>
      {/* <Increment></Increment> */}
    </div>
  );
}

export default App;
