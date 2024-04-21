"use client";
import React, { useEffect, useState } from "react";

function page() {
  async function logJSONData(formdata) {
    // 사용자 이름을 담은 JSON 객체 생성

    // fetch를 사용하여 서버에 POST 요청 보내기
    fetch("/username", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((response) => response.json())
      .then((data) => {
        // 서버로부터 받은 응답을 처리하여 렌더링하기
        console.log("서버로부터 받은 응답:", data);
        // 이 부분에서 받은 데이터를 활용하여 원하는 렌더링을 수행할 수 있습니다.
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    logJSONData();
  }, []);
  return <div></div>;
}

export default page;
