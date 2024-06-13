import { Link } from "react-router-dom";
function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-slate-900 text-gray-400 py-4">
      <div className="grid grid-cols-2 text-sm md:grid-cols-4 gap-2 max-w-[90%] md:max-w-[70%] mx-auto  ">
        <div className="">
          <h1 className="text-xl font-semibold text-gray-300">Location</h1>
          <p className="max-w-xs">
            Expertly trained, battle-tested, elite software developers on demand
          </p>
          <div className="my-1">
            <div className="flex items-center gap-3 my-3">
              <i className="ri-map-pin-line text-xl text-primary"></i>

              <div>
                <p className="font-semibold">Location</p>
                <p>Addis Ababa </p>
              </div>
            </div>
            <div className="flex items-center gap-3 my-3">
              <i className="ri-phone-fill text-xl text-primary"></i>
              <div>
                <p className="font-semibold">Phone Number</p>
                <p>+251-917469849</p>
                <p>+251-910979060</p>
              </div>
            </div>
            <div className="flex items-center gap-3 my-3">
              <i className="ri-mail-line  text-xl text-primary"></i>

              <div>
                <p className=" font-semibold">Email</p>
                <p>support@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" leading-9">
          <h1 className="text-xl font-semibold text-gray-300">Company</h1>
          <ul>
            <li>
              <Link to="/" className="hover:text-primary hover:font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about_us"
                className="hover:text-primary hover:font-semibold"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/success_stories"
                className="hover:text-primary hover:font-semibold"
              >
                Success Stories
              </Link>
            </li>
            <li>
              <Link
                to="/privacy_policy"
                className="hover:text-primary hover:font-semibold"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms_conditions"
                className="hover:text-primary hover:font-semibold"
              >
                Terms and Condition
              </Link>
            </li>
          </ul>
        </div>
        <div className="  leading-9">
          <h1 className="text-xl font-semibold text-gray-300">Services</h1>
          <ul>
            <li>
              <Link
                to="/hire_staff"
                className="hover:text-primary hover:font-semibold"
              >
                Hire Permanent Staff
              </Link>
            </li>
            <li>
              <Link
                to="/staff_augmentation"
                className="hover:text-primary hover:font-semibold"
              >
                Staff Augmentation
              </Link>
            </li>
            <li>
              <Link
                to="/sw_outsourcing"
                className="hover:text-primary hover:font-semibold"
              >
                Software OutSourcing
              </Link>
            </li>
            <li>
              <Link
                to="/build_office"
                className="hover:text-primary hover:font-semibold"
              >
                Build Remote office
              </Link>
            </li>
          </ul>
        </div>
        <div className=" leading-9">
          <h1 className="text-xl font-semibold text-gray-300">How to start</h1>
          <ul>
            <li>
              <Link
                to="/you_asked"
                className="hover:text-primary hover:font-semibold"
              >
                You Asked
              </Link>
            </li>
            <li>
              <Link
                to="/we_proceed"
                className="hover:text-primary hover:font-semibold"
              >
                We proceed
              </Link>
            </li>
            <li>
              <Link
                to="/negotiate"
                className="hover:text-primary hover:font-semibold"
              >
                Negotiate
              </Link>
            </li>
            <li>
              <Link
                to="/you_get"
                className="hover:text-primary hover:font-semibold"
              >
                You get
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Link to="/">
          {" "}
          <i className="ri-facebook-circle-fill text-primary text-3xl hover:font-bold "></i>
        </Link>
        <Link to="/">
          <i className="ri-instagram-fill text-primary text-3xl hover:font-bold "></i>
        </Link>
        <Link to="/">
          <i className="ri-linkedin-box-fill text-primary text-3xl hover:font-bold  "></i>
        </Link>
        <Link to="/">
          <i className="ri-telegram-fill text-primary text-3xl hover:font-bold "></i>
        </Link>
      </div>
      <p className="text-center font-bold text-gray-200">
        <i className="ri-copyright-line"></i>Copyright CodeX Ethiopia {year}
      </p>
    </div>
  );
}

export default Footer;
