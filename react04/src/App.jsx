import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/Nav.jsx"
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Nav />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Nav />
        <About />
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
