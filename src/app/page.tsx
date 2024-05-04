"use client";
import useStore from "./stores/exampleStore";

export default function Home() {
  const count = useStore().count;
  return (
    <div>
      <div>{count}</div>
      <button onClick={useStore().increaseCount}>+</button>
      <button onClick={useStore().decreaseCount}>-</button>
    </div>
  );
}
