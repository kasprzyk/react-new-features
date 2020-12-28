import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

// const App = (props) => {
//   // const [count, setCount] = useState(props.count);
//   // const [text, setText] = useState('');
//   const [state, setState] = useState({
//     count: props.count,
//     text: '',
//   });

//   return (
//     <div>
//       <p>
//         Current count is {state.text || 'count'} is {state.count}
//       </p>
//       <button onClick={() => setState({ ...state, count: state.count + 1 })}>
//         +1
//       </button>
//       <button onClick={() => setState({ ...state, count: state.count - 1 })}>
//         -1
//       </button>
//       <button onClick={() => setState({ ...state, count: state.count })}>
//         Reset
//       </button>
//       <input
//         value={state.text}
//         onChange={(e) => setState({ text: e.target.value })}
//       />
//     </div>
//   );
// };

const App = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState('');

  return (
    <div>
      <p>
        Current count is {text || 'count'} is {count}
      </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(props.count)}>Reset</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

App.defaultProps = {
  count: 0,
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
