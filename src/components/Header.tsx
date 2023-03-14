import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../services/UserContext";
import { clearAccessTokenToLocalStorage } from "../utils/auth";
export default function Header() {
  const { isAuthenticated, setIsAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAccessTokenToLocalStorage();
    setIsAuthenticated(false);
    navigate("/");
  };
  return (
    <>
      <header className=" lg:px-[150px] sm:px-2 bg-red-600 flex">
        <div className="grid lg:grid-cols-12 lg:gap-4 sm:grid-cols-5 w-full">
          <div className="lg:col-span-2 sm:col-span-1">
            <Link to={"/"} className="outline-none">
              <i className="inline-block bg-ficon bg-repeat w-[160px] h-[48px]"></i>
            </Link>
          </div>
          <div className="lg:col-span-5 sm:col-span-2">
            <form action="">
              <div className="flex my-2 mx-1">
                <input
                  type="text"
                  className="p-2 outline-none w-full"
                  placeholder="Nhập tên điện thoại cần tìm"
                />
                <button
                  type="submit"
                  className="bg-gray-700 text-white py-1 px-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div className="lg:col-span-5 sm:col-span-2 flex justify-end">
            {!isAuthenticated && (
              <>
                <Link to="/register" className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mx-auto mt-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                    />
                  </svg>
                  Đăng ký
                </Link>
                <span className=" text-white px-2"></span>

                <Link to="/login" className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mx-auto mt-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  Đăng nhập
                </Link>
              </>
            )}
            {isAuthenticated && (
              <>
                <Link to="/login" className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mx-auto mt-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  Tài khoản của tôi
                </Link>
                <span className=" text-white px-2"></span>
                <button className="text-white" onClick={handleLogout}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mx-auto mt-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>
                  Đăng xuất
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
