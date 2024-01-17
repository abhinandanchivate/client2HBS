import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [navbarTemplate, setNavbarTemplate] = useState("");
  useEffect(() => {
    api
      .get("/users/navbar")
      .then((response) => {
        setNavbarTemplate(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: navbarTemplate }}></div>;
}

export default App;
