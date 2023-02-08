import { useForm } from "react-hook-form";
import { ContainerForm } from "./style";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";


const ModalContacts = ({ modal, setModal }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { AddContacts } = useContext(AuthContext);

  return (
    <ContainerForm>
      {modal && (
        <form onSubmit={handleSubmit(AddContacts)}>
          <div>
            <h5>Add Contatos</h5>
            <button onClick={() => setModal(false)}>X</button>
          </div>
          <label>
            Nome
            <input
              id="name"
              placeholder="Digite o nome do seu contato"
              {...register("name", { required: true })}
            />
            {errors.title?.type === "required" && <p>Preencha o campo</p>}
          </label>
          <label>
            Email
            <input
              id="email"
              placeholder="Digite o email do seu contato"
              {...register("email", { required: true })}
            />
            {errors.title?.type === "required" && <p>Preencha o campo</p>}
          </label>
          <label>
            Telefone
            <input
              id="fone"
              placeholder="Digite o fone do seu contato"
              {...register("fone", { required: true })}
            />
            {errors.title?.type === "required" && <p>Preencha o campo</p>}
          </label>
          <button type="submit">Cadastrar Novo Contato</button>
        </form>
      )}
    </ContainerForm>
  );
};
export default ModalContacts;