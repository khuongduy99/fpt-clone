import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import HeaderLogin from "./components/HeaderLogin";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserContext, { UserProvider } from "./services/UserContext";
import Header from "./components/Header";
import ProductListPage from "./pages/ProductListPage";

function ProtectRouter() {
  const { isAuthenticated } = useContext(UserContext);
  console.log(isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

function RejectedRouter() {
  const { isAuthenticated } = useContext(UserContext);
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <ProductListPage />
        <Footer />
      </>
    ),
  },
  {
    path: "",
    element: <ProtectRouter />,
    children: [
      {
        path: "/profile",
        element: (
          <>
            <Header />
            <h1>Profile</h1>
            <Footer />
          </>
        ),
      },
    ],
  },
  {
    path: "",
    element: <RejectedRouter />,
    children: [
      {
        path: "/register",
        element: (
          <>
            <HeaderLogin />
            <RegisterPage />
            <Footer />
          </>
        ),
      },
      {
        path: "/login",
        element: (
          <>
            <HeaderLogin />
            <LoginPage />
            <Footer />
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
