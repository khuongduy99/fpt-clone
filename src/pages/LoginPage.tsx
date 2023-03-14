import axios from "axios";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import InputFormLogin from "../components/InputFormLogin";
import UserContext from "../services/UserContext";
import axiosHttp from "../utils/axiosHttp";

type Inputs = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const { isAuthenticated, setIsAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axiosHttp
      .post("/auth/login", {
        username: data.username,
        password: data.password,
      })
      .then((data) => {
        setIsAuthenticated(true);
        navigate("/");
      });
  };
  return (
    <>
      <div className="lg:px-[150px] sm:px-2 py-[75px] bg-red-100">
        <div className="bg-white lg:mx-[400px] sm:mx-[150px] p-10">
          <h1 className="text-2xl mb-6">Đăng nhập</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <InputFormLogin
              type={"text"}
              placeholder={"Tên đăng nhập"}
              errorMessage={errors.username?.message}
              register={register("username", {
                required: "Tên đăng nhập là bắt buộc",
                minLength: {
                  value: 5,
                  message: "Hãy nhập Tên đăng nhập từ 5 -> 100 ký tự",
                },
                maxLength: {
                  value: 100,
                  message: "Hãy nhập Tên đăng nhập từ 5 -> 100 ký tự",
                },
              })}
            />
            <InputFormLogin
              type={"password"}
              placeholder={"Mật khẩu"}
              errorMessage={errors.password?.message}
              register={register("password", {
                required: "Mật khẩu là bắt buộc",
                minLength: {
                  value: 6,
                  message: "Hãy nhập Mật khẩu từ 6 -> 100 ký tự",
                },
                maxLength: {
                  value: 100,
                  message: "Hãy nhập Mật khẩu từ 6 -> 100 ký tự",
                },
              })}
            />
            <div>
              <button className="w-full uppercase bg-red-400 text-white py-2 hover:bg-red-500">
                ĐĂNG NHẬP
              </button>
            </div>
            <div className="mt-5 text-center">
              <span className="text-gray-400">Bạn mới biết đến FPT? </span>
              <Link to={"/register"} className="text-red-600">
                Đăng ký
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
