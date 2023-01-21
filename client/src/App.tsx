import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import UserView from "./pages/UserView";
import { IUser } from "./types";

function App() {

  const [user, setUser] = useState<IUser | undefined>(undefined)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/notes" element={<UserView user={user} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
