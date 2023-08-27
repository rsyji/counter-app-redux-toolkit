import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "./redux/slices/counterSlice";

export default function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.counter.value);
  return (
    <>
      <div className="App">
        <h1>{data}</h1>
        <button onClick={() => dispatch(addItem())}>INCREMENT</button>
        <button onClick={() => dispatch(removeItem())}>DECREMENT</button>
      </div>
    </>
  );
}
