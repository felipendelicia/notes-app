import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Start from "./pages/Start";
import { IUser } from "./types";

function App() {

  const [user, setUser] = useState<IUser | undefined>(undefined)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/notes" element={<Start />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
