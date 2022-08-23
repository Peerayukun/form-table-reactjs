import { useState } from "react";
import {dataContext, Form } from "./components/form";
import LocalConnection from "./components/localConnect";
import Table from "./components/table";

function App() {
  const [all,setAll] = useState({...localStorage})
  return (
    <dataContext.Provider value={{data:all,func:setAll}}>
        <Form/> 
        <LocalConnection/>
        <Table/>
    </dataContext.Provider>
  );
}

export default App;
