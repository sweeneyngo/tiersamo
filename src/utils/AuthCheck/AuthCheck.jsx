import React, { useEffect, useContext } from "react";
import History from "../History/History";
import GlobalContext from "../../context/GlobalContext/GlobalContext";
import * as ACTIONS from "../../store/actions/actions/actions";

const AuthCheck = () => {
  const context = useContext(GlobalContext);

  useEffect(() => {
    if (context.authObj.isAuthenticated()) {
      context.handleUserLogin();
      context.handleUserAddProfile(context.authObj.userProfile);
      History.replace("/");
    } else {
      context.handleUserLogout();
      context.handleUserRemoveProfile();
      History.replace("/");
    }
  });

  return <div></div>; // loading screen
};

export default AuthCheck;
