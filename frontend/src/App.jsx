import { createContext, useContext, useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import CreateProduct from "./components/CreateProduct";
import axios from "axios";
import "./App.css";
import NotFound from "./components/NotFound";
export const AuthContext = createContext();
function App() {
  const [data, setData] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [role, setRole] = useState(null);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();
  console.log("rolllleeeeeeeeeeeeeeeeeeeee", role);

  const fetch = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:3000/products");

      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getCurrentUser = async () => {
    const res = await axios.get("http://127.0.0.1:3000/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUserId(res.data.id);
    setRole(res.data.role);
  };

  useEffect(() => {
    fetch();
    getCurrentUser();
  }, [token]);

  const HandleLogin = async (creds) => {
    try {
      let res = await axios.post("http://127.0.0.1:3000/login", creds);

      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const HandleSignUp = async (creds) => {
    try {
      await axios.post("http://127.0.0.1:3000/signup", creds);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    setRole(null);
  };

  return (
    <AuthContext.Provider value={token}>
      <div className="app-main-container">
        <nav className="app-nav-bar">
          <ul className="app-nav-list">
            <li className="app-nav-item">
              <Link to="/" className="app-nav-link">
                Home
              </Link>
            </li>
            {role && (
              <Link to="/create/prod" className="app-nav-link">
                Create A product
              </Link>
            )}
            {!role && (
              <li className="app-nav-item">
                <Link to="/login" className="app-nav-link">
                  Login
                </Link>
              </li>
            )}
            {role && (
              <li className="app-nav-item">
                <button onClick={handleLogout} className="app-nav-button">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
        <main className="app-main-content">
          <Routes>
            {role && (
              <Route
                path="/create/prod"
                element={
                  <CreateProduct
                    userId={userId}
                    navigate={navigate}
                    fetch={fetch}
                  />
                }
              />
            )}
            <Route
              path="/"
              element={<HomePage data={data} role={role} fetch={fetch} />}
            />
            <Route
              path="/login"
              element={
                <LoginPage
                  HandleLogin={HandleLogin}
                  HandleSignUp={HandleSignUp}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
