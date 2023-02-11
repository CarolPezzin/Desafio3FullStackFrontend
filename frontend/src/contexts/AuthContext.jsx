import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createContext} from "react";
import api from '../services/api';

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    const [result, setResult] = useState({})
    const [user, setUser] = useState({});
    const [userContact, setUserContact] = useState([])
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
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
            console.error(error);
          }
        }
        setLoading(false);
      }
      loadUser();
    }, [userContact]);
    
    const SubmitApi = async (data) => {
        
        const response = await api.post("/users", data);
        const result = response.data  
           
        setResult(result)
        navigate("/login", { replace: true })
    };

    const SignIn = async (LoginData) => {
      
      const response = await api.post("/login", LoginData);
      
      const { user: userResponse, token } = response.data;
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      
      setUser(userResponse);
  
      localStorage.setItem("@context-demo:token", token);
  
      navigate("/dashboard", { replace: true });
    };
    
    const AddContacts = async (contactsData) => {
      
      const token = localStorage.getItem("@context-demo:token");
      api.defaults.headers.post.authorization = `Bearer ${token}`;

      const response = await api
        
        .post("/users/contacts", contactsData)
        .then((response) => {
          const { data } = response;
          const newContactsList = [...(userContact), data];
          setUserContact({ ...userContact, newContactsList });
        })
        .catch((error) => console.log(error.data.message));
    };
    const RemoveContact = async (id) => {
      const token = localStorage.getItem("@context-demo:token");
      api.defaults.headers.delete.authorization = `Bearer ${token}`;
      const response = await api
        .delete(`/users/contacts/${id}`)
        .then((response) => setUserContact(userContact))
        .catch((err) => console.log(err));
    };

    return (
    <AuthContext.Provider value={{user, result, userContact, SubmitApi, SignIn, AddContacts, RemoveContact}}>
        {children}
    </AuthContext.Provider>)
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext);