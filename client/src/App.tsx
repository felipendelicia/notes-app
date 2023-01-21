import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import UserView from "./pages/UserView";
import { IUser } from "./types";

function Root() {

  const [user, setUser] = useState<IUser | undefined>(undefined)
  let navigate = useNavigate()

  useEffect(() => {
    if (user !== undefined) navigate('/notes');
  }, [user, navigate])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login setUser={user => setUser(user)} />} />
        <Route path="/notes" element={<UserView user={user} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Root />
    </Router>
  )
}

export default App;
