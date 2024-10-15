import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect, useState } from "react";
import authService, { AuthService } from "./appwrite/auth";
import { login, logout } from "./features/authSlice";
import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
import Container from "./components/container/Container";
import LogoutBtn from "./components/header/LogoutBtn";

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .isLogin()
      .then((data) => {
        if (data) {
          dispatch(login(data));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Header />
          {/* <Footer /> */}
        </>
      ) : (
        <h1>No Loading</h1>
      )}
      <Container />
      <LogoutBtn />
    </>
  );
}

export default App;
