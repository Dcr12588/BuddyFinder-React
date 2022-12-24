import { useCallback, useState, useEffect, createContext } from "react";

let logoutTimer

const AuthContext = createContext({
    token: '',
    login: () => {},
    logout: () => {},
    userId: null,
})

const calculateRemainingTime = (exp) => {
    const currentTime = new Date().getTime()
    const expTime = exp
    const remainingTime = expTime - currentTime
    return remainingTime
}

const getLocalData = () => {
    const storedToken = localStorage.getItem('token')
    const storedExp = localStorage.getItem('exp')
    const storedUserId = localStorage.getItem('userId')
    const storedUsername = localStorage.getItem('username')

    const remainingTime = calculateRemainingTime(storedExp)
    if(remainingTime <= 1000 * 60 * 30){
        console.log(remainingTime)
        localStorage.removeItem('token')
        localStorage.removeItem('expTime')
        localStorage.removeItem('userId')
        localStorage.removeItem('username')

        return null;
    }

    return {
        token: storedToken,
        duration: remainingTime,
        UserId: storedUserId,
        Username: storedUsername
    }

}

export const AuthContextProvider = (props) => {
    let localData = getLocalData()
    let initialToken
    let initialUserId
    let initialUsername

if(localData){
    initialToken = localData.token
    initialUserId = localData.UserId
    initialUsername = localData.Username
}

    const [userId, setUserId] = useState(initialUserId)
    const [token, steToken] = useState(initialToken)
    const [username, setUsername] = useState(initialUsername)

    const logout = useCallback(() => {
        console.log('hit useeffect')
        setUserId(null)
        setToken(null)
        setUsername(null)

        localStorage.removeItem('token')
        localStorage.removeItem('expTime')
        localStorage.removeItem('userId')
        localStorage.removeItem('username')
    })
}