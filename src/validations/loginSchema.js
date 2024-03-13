import { object, string, ref } from "yup";

export const loginSchema = object().shape({
  email: string().required("El email es requerido").email("No es un email valido"),
  password: string()
    .required("La contraseña es requerida")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});
