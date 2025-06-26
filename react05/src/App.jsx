import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import TrackOrder from "./pages/TrackOrder";
import Myaccount from "./pages/MyAccount";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Navbottom from "./components/NavBottom";
import Footer from "./components/Footer";
import Buycard from "./components/Buycard";
import Products from "./components/Products";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
          <Navbottom />
          <Footer />
        </div>
      ),
    },
    {
      path: "/shop",
      element: (
        <div>
          <Navbar />
          <Shop />
          <Navbottom />
          <Footer />
        </div>
      ),
    },
    {
      path: "/cart",
      element: (
        <div>
          <Navbar />
          <Cart />
          <Navbottom />
          <Footer />
        </div>
      ),
    },
    {
      path: "/TrackOrder",
      element: (
        <div>
          <Navbar />
          <TrackOrder />
          <Navbottom />
          <Footer />
        </div>
      ),
    },
    {
      path: "/myaccount",
      element: (
        <div>
          <Navbar />
          <Myaccount />
          <Navbottom />
          <Footer />
        </div>
      ),
    },
    {
      path: "/ContactUs",
      element: (
        <div>
          <Navbar />
          <Contact />
          <Navbottom />
          <Footer />
        </div>
      ),
    },
     {
      path: "/buycard",
      element: (
        <div>
          <Navbar />
          <Buycard />
          <Products />
          <Navbottom />
          <Footer />
        </div>
      ),
    },
  ]);

  return (
    < >
      <RouterProvider router={router} />
    </>
  );
}

export default App;
