import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-5">
      <p className="text-6xl font-bold text-primary">404</p>
      <p className="font-semibold">UH You're lost</p>
      <p className="max-w-sm text-center">
        The page you are looking for doesn't exist how you got here is
        mystery.But you can click the button below to go back to the homepage
      </p>
      <Link className="px-4 py-2 bg-primary text-white rounded-md" to="/">
        Home
      </Link>
    </div>
  );
}

export default NotFound;
