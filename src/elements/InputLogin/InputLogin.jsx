const InputLogin = ({
  type,
  className,
  placeholder,
  id,
  name,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
export default InputLogin;
