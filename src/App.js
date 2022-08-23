import { useState } from "react";
import {dataContext, Form } from "./components/form";
import Table from "./components/table";

function App() {
  const [all,setAll] = useState({...localStorage})
  return (
    <dataContext.Provider value={{data:all,func:setAll}}>
        <Form/> 
        <Table/>
    </dataContext.Provider>
  );
}

export default App;
