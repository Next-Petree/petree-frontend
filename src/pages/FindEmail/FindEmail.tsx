import React from "react";
import Header from "../../component/Header/Header";
import FindEmailOrPassWordContent from "../../component/FindEmailOrPassword/FindEmailOrPassword";

const FindEmail = () => {
  return (
    <>
      <Header />
      <FindEmailOrPassWordContent pageType="findemail" />
    </>
  );
};

export default FindEmail;
