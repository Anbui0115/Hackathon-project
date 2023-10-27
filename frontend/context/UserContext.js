"use client"
import React, {useState, useEffect, useContext, createContext} from 'react'


export const UserContext = createContext()
export const UserGlobalState = () => useContext(UserContext)

const UserContextProvider = ({ children }) => {
  const [session, setSession] = useState(false);
  const [sessionUser, setSessionUser] = useState(null);

  // useEffect(() => {
  //   function getCookie(name) {
  //     const value = "; " + document.cookie;
  //     const parts = value.split("; " + name + "=");
  //     if (parts.length === 2) return parts.pop().split(";").shift();
  //   }

  //   const isLoggedIn = getCookie("isLoggedIn");
  //   if (isLoggedIn === "true") {
  //     setSession(true);
  //   }
  // }, []);


  return (
    <UserContext.Provider
      value={{ 
        session, 
        setSession,
        sessionUser,
        setSessionUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider