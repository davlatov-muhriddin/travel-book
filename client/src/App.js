import Navbar from "./components/Navbar";
import AddBook from "./pages/AddBook";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import UpdateBook from "./pages/UpdateBook";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <Routes>
              <Route path="/" exact element={<Main />} />
              <Route path="/add" element={<AddBook />} />
              <Route path="/update/:id" element={<UpdateBook />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
