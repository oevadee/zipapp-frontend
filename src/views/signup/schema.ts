import * as yup from "yup";

export const signupSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  confirmPassword: yup.string().min(8).max(32).required(),
});
