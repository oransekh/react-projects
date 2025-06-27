import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import TrackOrder from "./pages/TrackOrder";
import Myaccount from "./pages/MyAccount";
import Cart from "./pages/Cart";
import Buycard from "./components/Buycard";
import Navbar from "./components/Navbar";
import Navbottom from "./components/NavBottom";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import User from "./pages/User";
import Wishlist from "./pages/Wishlist";
import { WishlistProvider } from "./context/WishlistContexts"; // ✅ renamed

const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
    <Navbottom />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
      { path: "trackorder", element: <TrackOrder /> },
      { path: "myaccount", element: <Myaccount /> },
      { path: "contactus", element: <Contact /> },
      { path: "buycard/:id", element: <Buycard /> },
      { path: "user", element: <User /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
   <WishlistProvider>
      <RouterProvider router={router} />
    </WishlistProvider>
  );
}

export default App;
