import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Create from "./components/Create/Create";
import Detail from "./components/Detail/Detail";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/create" exact element={<Create />} />
        <Route path="/blogs/:id" exact element={<Detail />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
