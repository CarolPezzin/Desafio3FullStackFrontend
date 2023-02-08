import { ContainerForm } from "./styles.module";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from 'react'
import { AuthContext } from "../../contexts/AuthContext";

const Form = () => {
  const { SubmitApi } = useContext(AuthContext);
  

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    fone: yup.string().required("Campo obrigatório"),
    isAdm: yup.boolean().required("Campo obrigatório")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <ContainerForm onSubmit={handleSubmit(SubmitApi)}>
      <h2>Agenda</h2>
      
      <input id="name" type="text" {...register("name")} placeholder="Digite seu nome" />
      {errors.name?.message}
      <input id="email" type="text" {...register("email")} placeholder="Digite seu email"/>
      {errors.email?.message}
      <input id="password" type="text" {...register("password")} placeholder="Digite seu password"/>
      {errors.password?.message}
      <input id="fone" type="text" {...register("fone")} placeholder="Digite seu fone"/>
      {errors.fone?.message}
      <div>
      <label>Adm ?
      <select id="isAdm" type="choice" {...register("isAdm")}>
        <option value="false">Não</option>
        <option value="true">Sim</option>
      </select>
      </label>
      {errors.isAdm?.message}
      <button type="onClick" >Cadastrar</button>
      
      </div>
    </ContainerForm>
    
  );
};

export default Form;