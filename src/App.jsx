import { useEffect, useState } from "react";
import "./App.scss";
import LoginForm from "./components/LoginForm/LoginForm";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import axios from "axios";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const attemptlogin = async() => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/status`);
        if(response.status === 200) setLoggedIn(true);
      } catch(error) {  
        
      }
    }
    attemptlogin();
  }, [])

  let MainContent = <LoginForm setLoggedIn={setLoggedIn} />;

  if(loggedIn) MainContent = <AdminDashboard />

  return (
    <div className="App">
      <header className="App-header">
        <h1>Admin Dashboard</h1>
      </header>
      <main>
        {MainContent}
      </main>
    </div>
  );
}

export default App;
