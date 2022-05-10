import { useField } from "formik";
export const Input = ({ props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div className={props.wrapperClassName}>
      <label className={props.labelClassName} htmlFor={props.id || props.name}>
        {props.label || props.placeholder}
      </label>
      <input className={props.inputClassName} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={props.errorClassName}>{meta.error}</div>
      ) : null}
    </div>
  );
};

{
  /* <Input
  id="email"
  type="email"
  name="email"
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.oldPassword}
  placeholder="Email"
  wrapperClassName
  labelClassName
  inputClassName
  errorClassName
/> */
}
