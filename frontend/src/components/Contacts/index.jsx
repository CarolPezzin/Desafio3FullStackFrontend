import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ContainerUl } from "./styles";

export const ContactsList = () => {
  const { user, RemoveContact } = useContext(AuthContext);
  
  return (
    <ContainerUl><h1>ola</h1>
      {user?.contacts?.map(({id, name, email, fone }) => {
        return (
          <li key={id}>
            <h4>{name}</h4>
            <div>
              <h5>{email}</h5>
              <h5>{fone}</h5>
              <button onClick={() => RemoveContact({id})}>
              </button>
            </div>
          </li>
        );
      })}
    </ContainerUl>
  );
};
