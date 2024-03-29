import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
const Sidebar = ({username}) => {
    return (
        <div className="min-h-screen flex flex-row">
            <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
                <div className="flex items-center justify-center h-20 my-10 shadow-md">
                    <h1 className="text-3xl uppercase text-indigo-500">
                        <img src={logo} alt='logo_image' />
                    </h1>
                </div>
                <div className="flex items-center">
                    <div className="flex-shrink-0 ms-5">
                        <img className="h-16 w-16 rounded-full" src="https://demo.themesberg.com/windster/images/users/neil-sims.png" alt="" />
                    </div>
                    <div className="flex-shrink-0 ms-5">
                        <p className="text-sm font-medium text-gray-900 truncate">
                            {username}
                        </p>
                    </div>
                </div>
                <ul className="flex flex-col py-4">
                    <li>
                        <Link to="/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                            <span className="text-sm font-medium">Ana Sayfa</span>
                        </Link>
                        <Link to="/cart" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                            <span className="text-sm font-medium">Cart</span>
                        </Link>
                        <a href="#/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                            <span className="text-sm font-medium">Users</span>
                        </a>
                    </li>
                    <li>
                        <a href="#/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
                            <span className="text-sm font-medium">Music</span>
                        </a>
                    </li>
                    <li>
                        <a href="#/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink"></i></span>
                            <span className="text-sm font-medium">Drink</span>
                        </a>
                    </li>
                    <li>
                        <a href="#/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
                            <span className="text-sm font-medium">Shopping</span>
                        </a>
                    </li>
                    <li>
                        <a href="#/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-chat"></i></span>
                            <span className="text-sm font-medium">Chat</span>
                        </a>
                    </li>
                    <li>
                        <a href="#/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
                            <span className="text-sm font-medium">Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="#/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-bell"></i></span>
                            <span className="text-sm font-medium">Notifications</span>
                            <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                        </a>
                    </li>
                    <li>
                        <a href="#/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
                            <span className="text-sm font-medium">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;