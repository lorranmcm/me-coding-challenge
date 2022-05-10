import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  let navigate = useNavigate();

  const formInitialValues = {
    email: "",
    oldPassword: "",
    newPassword: "",
    retypeNewPassword: "",
  };

  const formValidationSchema = Yup.object({
    email: Yup.string()
      .email("O email precisa ser válido")
      .required("Obrigatório"),
    oldPassword: Yup.string().required("Obrigatório"),
    newPassword: Yup.string()
      .required("Obrigatório")
      .matches(
        /^.*(?=.{3,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1}|((?=.*[A-Z]){1})).*$/,
        "A nova senha precisa conter uma letra, um número, um caractere especial, e ter entre 3 e 13 caracteres"
      ),
    retypeNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "A senha precisa ser igual")
      .required("Obrigatório"),
  });

  interface FormValid extends Yup.InferType<typeof formInitialValues> {}

  const formSubmit = (values: FormValid, { setSubmitting }: any) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
    console.log(values);
    navigate("home");
  };
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center bg-white w-1/3 py-8 px-6 shadow-md">
        <div className="flex flex-none items-center justify-center h-40 w-40 rounded-full bg-blue-200 mb-8">
          <span className="text-7xl text-white mb-2">JS</span>
        </div>
        <Formik
          initialValues={formInitialValues}
          validationSchema={formValidationSchema}
          onSubmit={formSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form className="w-full" onSubmit={handleSubmit}>
              <div className="relative z-0 mb-6 group">
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <span className="text-red-600 text-sm">
                  {errors.email && touched.email && errors.email}
                </span>
              </div>

              <div className="relative z-0 mb-6 group">
                <label
                  htmlFor="oldPassword"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Senha
                </label>
                <input
                  id="oldPassword"
                  type="password"
                  name="oldPassword"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.oldPassword}
                />
                <span className="text-red-600 text-sm">
                  {errors.oldPassword &&
                    touched.oldPassword &&
                    errors.oldPassword}
                </span>
              </div>
              <div className="relative z-0 mb-6 group">
                <label
                  htmlFor="newPassword"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nova Senha
                </label>
                <input
                  id="newPassword"
                  type="password"
                  name="newPassword"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newPassword}
                />
                <span className="text-red-600 text-sm">
                  {errors.newPassword &&
                    touched.newPassword &&
                    errors.newPassword}
                </span>
              </div>
              <div className="relative z-0 mb-6 group">
                <label
                  htmlFor="retypeNewPassword"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Confirme a nova senha
                </label>
                <input
                  id="retypeNewPassword"
                  type="password"
                  name="retypeNewPassword"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.retypeNewPassword}
                />
                <span className="text-red-600 text-sm">
                  {errors.retypeNewPassword &&
                    touched.retypeNewPassword &&
                    errors.retypeNewPassword}
                </span>
              </div>
              <button
                type="submit"
                className="w-full shadow-md rounded-sm flex flex-row items-center justify-center bg-blue-400 text-white h-12 font-semibold"
                disabled={isSubmitting}
              >
                SALVAR
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
