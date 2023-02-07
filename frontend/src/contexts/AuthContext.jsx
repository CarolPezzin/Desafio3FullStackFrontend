import { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { createContext} from "react";
import api from '../services/api';

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    const [result, setResult] = useState({})
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    // const navigate = useNavigate();
  
    useEffect(() => {
      async function loadUser() {
        const token = localStorage.getItem("@context-demo:token");
  
        if (token) {
          try {
            api.defaults.headers.common.authorization = `Bearer ${token}`;
            //.common. eh para passar autorização para todos os metodos
            const { data } = await api.get("/users");
  
            setUser(data);
          } catch (error) {
            console.log(error);
          }
        }
        setLoading(false);
      }
      loadUser();
    }, []);
  
    const SignIn = async (LoginData) => {
        console.log(LoginData)
      const response = await api.post("/users", LoginData);
  
      const { user: userResponse, token } = response.data;
  
      api.defaults.headers.common.authorization = `Bearer ${token}`;
  
      setUser(userResponse);
  
      localStorage.setItem("@context-demo:token", token);
  
    //   navigate("/", { replace: true });
    };
    

    const SubmitApi = async (data) => {
        console.log(data)
        const response = await api.post("/users", data);
        const result = response.data  
           
        setResult(result)
        
    }

    return (
    <AuthContext.Provider value={{result, SubmitApi, SignIn}}>
        {children}
    </AuthContext.Provider>)
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext);