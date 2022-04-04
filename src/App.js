import "./styles/common.css";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";
import {MenuRoutes} from "./routes/MenuRoutes";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={1000} />
      <MenuRoutes />
    </div>
  );
}

export default App;
