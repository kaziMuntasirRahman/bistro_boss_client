import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-10">
      <img src="/assets/404.gif" className="mx-auto" />
      <Link to='/' className="btn btn-wide btn-accent">Home</Link>
    </div>
  );
};

export default ErrorPage;