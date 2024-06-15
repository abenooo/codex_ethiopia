import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-5">
      <p className="text-6xl font-extrabold text-primary">404</p>
      <p className="font-bold text-primary">Oops! Page not found</p>
      <p className="max-w-sm text-center font-medium">
        The page you are looking for might have been removed or temporarily
        unavailable.
      </p>
      <Link className="px-4 py-2 bg-primary text-white rounded-md" to="/">
        Back to Home Page
      </Link>
    </div>
  );
}

export default NotFound;
