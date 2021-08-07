const Button = (props) => {
  return (
    <button
      onClick={props.onClick ? props.onClick : null}
      className={
        "w-full  mx-2 bg-red-600 cursor-pointer p-2 rounded text-white hover:scale-110 transform transition-transform" +
        props.className
      }
    >
      {props.text ? props.text : props.children}
    </button>
  );
};

export default Button;
