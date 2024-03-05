import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { AuthContext } from "./components/Contexts/AuthContext";
import { useState } from "react";

const App = () => {  
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {/* <Navbar /> */}
      <Outlet />
      {/* <Footer /> */}
    </AuthContext.Provider>
  );
};

export default App;