import React from 'react'
import { ChevronRight } from 'lucide-react'
import logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className=" m-5">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 lg:px-0">
                <div className="inline-flex items-center">
                    <img src={logo} alt="logo" />
                    <span className="ml-4 text-lg font-bold text-blue-500">TravelEra</span>
                </div>
                <div className="hidden items-center md:inline-flex">
                    <span className="text-sm font-medium text-black">Ready to Get Started ?</span>
                    <button
                        type="button"
                        className="ml-2 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Get Started
                    </button>
                </div>
            </div>
            <hr className="my-8" />
            <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
                <div className="w-full px-4 md:w-1/2 lg:px-0">
                    <h1 className="max-w-sm text-3xl font-bold">Subscribe to our Newsletter</h1>
                    <form action="" className="mt-4 inline-flex w-full items-center md:w-3/4">
                        <input
                            className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="email"
                            placeholder="Email"
                        ></input>
                        <button
                            type="button"
                            className="ml-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </form>
                </div>
                <div className="w-1/2">
                    <div className="mb-8 lg:mb-0">
                        <p className="mb-6 text-lg font-semibold text-gray-700 ">Company</p>
                        <ul className="flex justify-between items-center font-medium text-gray-500">
                            <NavLink to="/"
                                className={({ isActive }) => `${isActive ? "text-blue-600" : "text-gray-700"} duration-300`}
                            >Home</NavLink>
                            <NavLink to="about"
                                className={({ isActive }) => `${isActive ? "text-blue-600" : "text-gray-700"} duration-300`}>About</NavLink>
                            <NavLink to="contact"
                                className={({ isActive }) => `${isActive ? "text-blue-600" : "text-gray-700"} duration-300`}>Contact Us</NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer
