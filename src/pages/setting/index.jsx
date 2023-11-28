import { useDispatch } from "react-redux";
import SettingForm from "../../component/setting/settingForm";
import SettingForm2 from "../../component/setting/settingForm2";
import Wallet from "../../component/setting/wallet";
import React from "react";

function index() {

  return (
    <>
      <Wallet />
      <SettingForm />
      <SettingForm2 />
    </>
  );
}

export default index;
