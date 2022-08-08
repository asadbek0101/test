import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results";
import Tests from "./pages/Tests/Tests";
import UserPage from "./pages/UserPage/UserPage";
import Login from "./pages/Login";
import Articels from "./pages/Articels/Articels";
import Necessary from "./pages/Necessary/Necessary";
import Test from "./pages/Tests/Test";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user-page" element={<UserPage />}>
          <Route path="/user-page/home" element={<Home />} />
          <Route path="/user-page/result" element={<Results />} />
          <Route path="/user-page/tests" element={<Tests />} />
          <Route path="/user-page/articel" element={<Articels />} />
          <Route path="/user-page/necessary" element={<Necessary />} />
          <Route path="/user-page/test/:id" element={<Test />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
