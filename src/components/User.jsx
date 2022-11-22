import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { signInWithGoogle, signOutUser, auth } from "./Firebase/signIn";
import UserContext from "../UserContext";
import { useContext } from "react";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  top: 30px;
  right: 45%;
  background: teal;
  cursor: pointer;
  border: none;
  padding: 10px;
  color: white;
  border-radius: 10px;
  font-size: 1rem;
  text-transform: capitalize;
`;
const User = () => {
  const { user, loginUser, logoutUser } = useContext(UserContext);
  console.log(user);
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        loginUser();
      } else {
        logoutUser();
      }
    });
  });

  return (
    <div>
      {user ? (
        <div>
          <Button onClick={signOutUser}>sign out</Button>
        </div>
      ) : (
        <div>
          <Button onClick={signInWithGoogle}>Sign in with google </Button>
        </div>
      )}
    </div>
  );
};

export default User;
