// eslint-disable-next-line react/prop-types
const CustomButton = ({ children, style, ...atributes }) => {
  return (
    <button className={style} {...atributes}>
      {children}
    </button>
  );
};

export default CustomButton;
