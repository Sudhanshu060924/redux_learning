import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

const App = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.value);

  return (
    <div className="text-center mt-[20%]">
      <h1 className="text-6xl">{count}</h1>

      <button
        onClick={() => {
          dispatch(increment());
        }}
        className=" mr-15 border-2 border-amber-200 p-2"
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
        className=" border-4 border-amber-200 p-2"
      >
        Decerement
      </button>
    </div>
  );
};

export default App;
