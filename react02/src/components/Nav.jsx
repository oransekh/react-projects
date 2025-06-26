import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import Signup from "./Signup";
const Nav = () => {
  const manu = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className="absolute z-10 w-full">
      <nav className="justify-between flex items-center px-10">
        <a href="#">
          {" "}
          <img src={logo} alt="logo" width={80} height={29} />
        </a>

        <ul className="flex-1 flex justify-center items-center max-lg:hidden gap-16 ">
          {manu.map((item, index) => (
            <li key={index} className="inline-block mr-4">
              <a href={item.href} className="text-gray-700 hover:text-blue-500">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <Signup />

        <div className="hidden max-lg:block">
          <a href="">
            <img src={menu} alt="" width={30} height={30} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
