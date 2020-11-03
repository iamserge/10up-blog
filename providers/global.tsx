import React, { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
import { TOKEN_COOKIE, USER_COOKIE } from '../utils/constants';
import { getAllPages } from '../api/pages';
import { login, validateToken } from '../api/user';
export const defaultContext = { 
    pages: [],
    loginUser: login,
    loggedIn: false,
    loginError: "",
    userName:"",
    logOut: () => {}
}
const GlobalContext = React.createContext(defaultContext);

const GlobalProvider = ({ children }) => {
    const cookies = new Cookies();
    const [ pages, setPages ] = useState([]);
    const [ userName, setUserName ] = useState(cookies.get(USER_COOKIE));
    const [ loggedIn, setLoggedin ] = useState(false);
    const [ loginError, setLoginError ] = useState("");
   

    useEffect(() => {
        getPages();
        const token = cookies.get(TOKEN_COOKIE);
        if (token) {
            validateUserToken(token)
        }
    }, []);
    async function validateUserToken(token) {
        const response = await validateToken(token);
        if (response.error) {
            logOut();
        } else {
            setLoggedin(true);
        }
    }
    async function loginUser(userData) {
        const response = await login(userData);
        if (response.error) {
            setLoginError(response.error);
            setLoggedin(false)
        } else {
            setLoggedin(true);
            setUserName(userData.username);
            cookies.set(TOKEN_COOKIE, response.token);
            cookies.set(USER_COOKIE, userData.username);
        }
    }

    async function getPages() {
        const pages = await getAllPages();
        setPages(pages)
    }

    async function logOut() {
        setLoggedin(false);
        setUserName("");
        cookies.remove(TOKEN_COOKIE);
        cookies.remove(USER_COOKIE);
    }




    const context = {
        pages,
        loggedIn,
        loginError,
        loginUser,
        userName,
        logOut
    };
 
    return (
        <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
    );
};

const useGlobal = () => React.useContext(GlobalContext);

export { GlobalProvider, useGlobal, GlobalContext };
