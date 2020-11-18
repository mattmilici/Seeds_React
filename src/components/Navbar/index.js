import React from "react";
import seedsLogo from "../../assets/images/seedsLogo.png"

function Navbar() {

    return (
    
        <div class="bg-green1">
        <nav class="green1">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex">
                        <div class="-ml-2 mr-2 flex items-center md:hidden">

                            <button
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out mobileNavButton"
                                aria-label="Main menu" aria-expanded="false" data-toggle="hide">

                                <svg class="block h-6 w-6 mobileNavIconClosed" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                                <svg class="hidden h-6 w-6 mobileNavIconOpen" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex-shrink-0 flex items-center">
                            <img className="block lg:hidden h-8 w-auto" src={ seedsLogo } />
                            <img className="hidden lg:block h-8 w-auto" src={ seedsLogo } />
                        </div>
                        <div class="hidden md:ml-6 md:flex md:items-center">
                            <a href="/"
                                class="homeButton px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Home Page</a>
                            <a href="about"
                                class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">About</a>
                            <a href="login"
                                class="logButton ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Login</a>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div id="newPostButton" class="hidden flex-shrink-0">
                            <span class="rounded-md shadow-sm">
                                <button id="newpost" type="button"
                                    class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-lime1 hover:bg-indigo-400 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-600 active:bg-indigo-600 transition duration-150 ease-in-out">

                                    <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                            clip-rule="evenodd" />
                                    </svg>

                                    <a href="posts">New Post</a>
                                </button>
                            </span>
                        </div>
                        <div class="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                            <button
                                class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-300 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out"
                                aria-label="Notifications">

                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </button>


                            <div class="ml-3 relative">
                                <div>
                                    <button
                                        class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                                        id="user-menu" aria-label="User menu" aria-haspopup="true">
                                        <div class="h-8 w-8 rounded-full"><i class="fas fa-user-circle"></i></div>

                                        <img class="h-8 w-8 rounded-full" src="../../public/assets/images/userlogo.png" alt=""></img>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div class="hidden md:hidden mobileNavMenu">
                <div class="px-2 pt-2 pb-3 sm:px-3">
                    <a href="/"
                        class="homeButton block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Home
        Page</a>
                    <a href="about"
                        class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">About</a>
                    <a href="login"
                        class="logButton mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Login</a>
                </div>
                <div class="pt-4 pb-3 border-t border-gray-700">
                    <div class="flex items-center px-5 sm:px-6">
                        <div class="flex-shrink-0">
                            <img class="h-10 w-10 rounded-full" src="../../public/assets/images/userlogo.png" alt=""></img>
                        </div>
                        <div class="ml-3">
                            <div class="text-base font-medium leading-6 text-white mobileNavName"></div>
                            <div class="text-sm font-medium leading-5 text-gray-400 mobileNavEmail"></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>

    );
}

export default Navbar;