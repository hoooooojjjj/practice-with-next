"use client";
import React, { useEffect, useState } from "react";

function page() {
  const [data, setData] = useState("");
  async function logJSONData() {
    const response = await fetch("http://localhost:3000/username", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: "username" }),
    });
    const jsonData = await response.json(); // JSON 형식의 데이터를 파싱하여 변수에 저장
    console.log(jsonData);
    setData(jsonData); // 받아온 JSON 데이터를 상태에 저장
  }

  useEffect(() => {
    logJSONData();
  }, [data]);
  return <div>{data}</div>;
}

export default page;
