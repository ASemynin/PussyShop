import Header from "./components/main/header";
import Pyssies from "./components/pyssies/pyssies";
import {Routes, Route} from "react-router-dom";
import SignUp from "./components/entraces/SignUp";
import SignIn from "./components/entraces/SignIn";

function App() {
  return (
    <div className="App">
        <Header/>
      <Routes>
          <Route path="/" element={<Pyssies/>}></Route>
          <Route path="signIn" element={<SignIn/>}></Route>
          <Route path="signUp" element={<SignUp/>}></Route>
      </Routes>
        
    </div>
  )
}

export default App;
