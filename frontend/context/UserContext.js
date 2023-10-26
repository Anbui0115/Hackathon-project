"use client"
import React, {useState, useEffect, useContext, createContext} from 'react'


export const UserContext = createContext()
export const UserGlobalState = () => useContext(UserContext)

const UserContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);


  return (
    <UserContext.Provider
      value={{ 
        isAuthenticated, 
        setIsAuthenticated,
        user,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider