import Private from "./Private";
import B from "./B";
import C from "./C";
import A from "./A";
import Navbar from "./Navbar";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Public from "./Public";
import Error404 from "./Error404";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route element={<Public />}>
            <Route path="login"element={<Login />} />
          </Route>


          <Route path="/*"element={<Error404 />} />
          
          {/* <Route path="/a/:name" element={<A />} /> */}

          <Route path=""element={<Private />}>
            <Route path="a" element={<A />} />
            <Route path="b" element={<B />} />
            <Route path="c" element={<C />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
