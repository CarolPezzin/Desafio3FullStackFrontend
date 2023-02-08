/* eslint-disable react-hooks/rules-of-hooks */
import { Containerdash } from "./style.module";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { ContactsList } from "../../components/Contacts/index";
import ModalContacts from "../../components/FormContatos/index";
import { useState } from "react";
       
export const Dashboard = () => {
  const { user, loading } = useAuth();
  const [modal, setModal] = useState(false);
 
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("@context-demo:token");
    navigate("/");
  }

  if (loading) {
    return <div>Carregando...</div>;
  }
  return user ? (
    <Containerdash>
      <header>
        <h3>Olá, {user.name}</h3>
        <button type="button" onClick={logout}>
          Sair
        </button>
      </header>
      <section>
        <h2>Contatos</h2>
        <button onClick={() => setModal(true)}>Add</button>
      </section>

      <ModalContacts modal={modal} setModal={setModal} />
      <ContactsList />
    </Containerdash>
  ) : (
    <Navigate to="/" replace />
  );
};