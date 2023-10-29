"use client"
import React, {useState, useEffect, useContext, createContext} from 'react'


export const UserContext = createContext()
export const UserGlobalState = () => useContext(UserContext)

const UserContextProvider = ({ children }) => {
  const [sessionUser, setSessionUser] = useState(null);
  


  return (
    <UserContext.Provider
      value={{ 
        sessionUser,
        setSessionUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider