import {useEffect} from "react";
import axios from "axios";
function App() {
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/quiz");
      console.log(response);
    })();
  }, []);
  return (
    <div className="App">
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
