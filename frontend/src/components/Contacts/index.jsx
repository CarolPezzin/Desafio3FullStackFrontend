import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ContainerUl } from "./styles";

export const ContactsList = () => {
  const { userContact, RemoveContact } = useContext(AuthContext);

  return (
    <ContainerUl>
      {userContact?.map(({id, name, email, fone }) => {
        return (
          <li key={id}>
            <h4>{name}</h4>
            <nav>
              <h5>{email}</h5>
              <h5>{fone}</h5>
              <button onClick={() => RemoveContact({id})}>
              </button>
            </nav>
          </li>
        );
      })}
    </ContainerUl>
  );
};
