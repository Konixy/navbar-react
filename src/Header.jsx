import { Button } from "@material-tailwind/react";
import { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      nav: [
        { name: "Home", url: "/", link: true, current: document.location.pathname === "/" ? true : false },
        { name: "About", url: "/about", link: true, current: document.location.pathname === "/about" ? true : false },
        { name: "Services", url: "/services", link: true, current: document.location.pathname === "/services" ? true : false },
        { name: "Contact", url: "/contact", link: true, current: document.location.pathname === "/contact" ? true : false },
      ],
    };
  }
  linkClicked = (path) => {
    return () => {
      this.state.nav.forEach(e => {
        e.url === path ? e.current = true : e.current = false
      })
      return this.setState(this.state)
    };
  }
  
  openMenu = () => {
    let e = document.getElementById('navbar-sticky').style.display
    e === 'block' ? e = 'none' : e = 'block'
    document.getElementById('navbar-sticky').style.display = e
  }

  // const [openNav, setOpenNav] = useState(false);

  // useEffect(() => {
  //   window.addEventListener(
  //     "resize",
  //     () => window.innerWidth >= 960 && setOpenNav(false)
  //   );
  // }, [])
  render() {
    return (
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center ml-2" onClick={this.linkClicked('/')}>
            <span className="self-center text-xl font-semibold whitespace-nowrap text-black dark:text-white">
              {document.title}
            </span>
          </Link>
          <div className="flex md:order-2">
            <Button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </Button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={this.openMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {this.state.nav.map((e) => (
                <li key={e.name}>
                  <Link
                    to={e.url}
                    onClick={this.linkClicked(e.url)}
                    className={[
                      "block py-2 pr-4 pl-3 rounded",
                      e.current === true
                        ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                        : "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    ].join(" ")}
                  >
                    {e.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
