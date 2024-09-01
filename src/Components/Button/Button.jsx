import { useNavigate } from "react-router";

const Button = ({ props, linkTo = "", text = "", btnStyle = "", children }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(linkTo)}
      className={`flex justify-center items-center bg-indigo-500 text-slate-100 font-medium py-2 px-4 rounded-md capitalize ${btnStyle}`}
      {...props}
    >
      <span>{text}</span>
      {children != undefined ? <span className="px-1">{children}</span> : null}
    </button>
  );
};

export default Button;
