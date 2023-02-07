import { ContainerForm } from "./styles.module";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from 'react'
import { AuthContext } from "../../contexts/AuthContext";

const FormLogin = () => {
  const { SignIn } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    email: yup.string().email().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <ContainerForm onSubmit={handleSubmit(SignIn)}>
      <h2>Agenda</h2>
      <input id="email" type="text" {...register("email")} placeholder="Digite seu email"/>
      {errors.email?.message}
      <input id="password" type="text" {...register("password")} placeholder="Digite seu password"/>
      {errors.password?.message}
      <button type="onClick" >Login</button>
    </ContainerForm>
  );
};

export default FormLogin;