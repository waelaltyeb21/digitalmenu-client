import { useNavigate } from "react-router";

const Button = ({ props, linkTo = "", text = "", btnStyle = ""}) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(linkTo, { replace: true })}
      //   to={linkTo}
      className={`block bg-indigo-500 text-slate-100 font-medium py-2 px-4 rounded-md capitalize ${btnStyle}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
