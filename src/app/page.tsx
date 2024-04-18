"use client";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  return (
    <div>
      <form action="/username" method="post">
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
      </form>
    </div>
  );
}
