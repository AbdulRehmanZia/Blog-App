import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect, useState } from "react";
import authService, { AuthService } from "./appwrite/auth";
import { login, logout } from "./features/authSlice";

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
      {loading ? <div>Loading</div>: <h1>No Loading</h1>}
    </>
  );
}

export default App;
