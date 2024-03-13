import { Outlet } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";

const App = () => {  

  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default App;