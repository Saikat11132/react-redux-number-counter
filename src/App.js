import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { incNumber } from "./actions";
import { decNumber } from "./actions";

function App() {
  const myState = useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="btn-group mt-4" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-secondary" onClick={()=>dispatch(incNumber(5))} >
          increase
        </button>

        <input name="quantity" type="text" class="quantity__input" value={myState} />

        <button type="button" className="btn btn-secondary" onClick={()=>dispatch(decNumber())} >
          decrease
        </button>
      </div>
    </div>
  );
}

export default App;
