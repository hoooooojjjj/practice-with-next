"use client";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
const RedButton = styled.button({
  backgroundColor: "red",
});

const BlueHeader = styled.h1({
  color: "blue",
});
function page() {
  return (
    <div>
      <BlueHeader>헤더</BlueHeader>
      <RedButton>버튼</RedButton>
    </div>
  );
}

export default page;
