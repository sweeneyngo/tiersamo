import firebase from "../Firebase/FirebaseInit";

export const Auth = {
  signup: (
    email,
    password,
    handleSetErrors,
    handleSetProfile,
    handleSetToken
  ) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        const token = await Object.entries(res.user)[5][1].b;
        await localStorage.setItem("token", token);
        handleSetProfile({ email: email, password: password });
        handleSetToken(window.localStorage.token);
        // console.log(res);
      })
      .catch((err) => {
        console.error(err);
        handleSetErrors(err);
      });
  },
  signin: (
    email,
    password,
    handleSetErrors,
    handleSetProfile,
    handleSetToken
  ) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (res) => {
        const token = await Object.entries(res.user)[5][1].b;
        await localStorage.setItem("token", token);
        handleSetProfile({ email: email, password: password });
        handleSetToken(window.localStorage.token);
        // console.log(res);
      })
      .catch((err) => {
        console.error(err);
        handleSetErrors(err);
      });
  },
  signout: (handleSetErrors, handleSetProfile, handleSetToken) => {
    firebase
      .auth()
      .signOut()
      .then(async (res) => {
        await localStorage.removeItem("token");
        handleSetProfile({});
        handleSetToken(null);
        // console.log(res);
      })
      .catch((err) => {
        console.error(err);
        handleSetErrors(err);
        localStorage.removeItem("token");
        handleSetProfile({});
        handleSetToken(null);
      });
  },
};
// const signin = (email, password) => {};
// const signout = (email, password) => {};
