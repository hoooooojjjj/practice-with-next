"use client";
import { ChooseButton, BtnWrap } from "./styled";
function page() {
  return (
    <div>
      <BtnWrap>
        <ChooseButton color="red"> 버튼 </ChooseButton>
        <ChooseButton color="blue"> 버튼 </ChooseButton>
        <ChooseButton color="green"> 버튼 </ChooseButton>
        <ChooseButton color="pink"> 버튼 </ChooseButton>
      </BtnWrap>
    </div>
  );
}

export default page;
