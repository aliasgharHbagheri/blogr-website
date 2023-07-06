import { useState } from "react";

const Header = () => {

    // Opening and closing the menu on mobile
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    // Drop down menu
    const [dropProducts, setDropProducts] = useState(false);
    const [dropCompany, setDropCompany] = useState(false);
    const [dropConnect, setDropConnect] = useState(false);

    return (
        <header className="relative w-full h-[80vh] bg-gradient-to-l from-primary-second to-primary-main mx-auto flex flex-col items-center justify-start overflow-hidden rounded-bl-[75px]">
            <div className="w-full h-full absolute z-10">
                <img src="../../public/images/bg-pattern-intro-desktop.svg"
                    className="object-cover w-full h-full translate-x-64" alt="bg-header" />
            </div>
            <div className="navbar-container w-10/12 py-7 z-20">

                {/* Menu mobile */}
                <nav className="flex md:hidden items-center justify-between">
                    <div className="flex items-center justify-center w-full z-30">
                        <div className="w-full flex items-center justify-between">
                            <a className="text-3xl text-red-50 font-bold">Blogr</a>

                            {menuIsOpen ? (
                                <span onClick={() => setMenuIsOpen(false)} className="cursor-pointer">
                                    <img src="../../public/images/icon-close.svg" className="w-full" />
                                </span>
                            ) : (
                                <span onClick={() => setMenuIsOpen(true)} className="cursor-pointer">
                                    <img src="../../public/images/icon-hamburger.svg" className="w-full" />
                                </span>
                            )}
                        </div>

                        {menuIsOpen && (
                            <div className="w-11/12 h-auto absolute bg-white top-20 rounded-lg z-50">
                                <div className="w-full h-3/5 z-30 ">
                                    <ul className="w-full flex flex-col items-center justify-center gap-10 py-8">
                                        <li className="w-full text-dark cursor-pointer px-3 flex flex-col items-center gap-3">
                                            <div className="flex items-center justify-center gap-3">
                                                <span onClick={() => setDropProducts(!dropProducts)}>Product</span>
                                                <span className={dropProducts ? "rotate-180" : ""}><img src="../../public/images/icon-arrow-dark.svg" /></span>
                                            </div>
                                            <div className={`${dropProducts ? "block w-11/12 rounded-lg bg-slate-100 top-8 p-4" : "hidden"}`}>
                                                <ul className="w-full flex flex-col text-dark items-center justify-center gap-6 text-sm">
                                                    <li><a href="#">Overview</a></li>
                                                    <li><a href="#">Pricing</a></li>
                                                    <li><a href="#">Marketplace</a></li>
                                                    <li><a href="#">Features</a></li>
                                                    <li><a href="#">Integrations</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="w-full text-dark cursor-pointer px-3 flex flex-col items-center gap-3">
                                            <div className="flex items-center justify-center gap-3">
                                                <span onClick={() => setDropCompany(!dropCompany)}>Company</span>
                                                <span className={dropCompany ? "rotate-180" : ""}><img src="../../public/images/icon-arrow-dark.svg" /></span>
                                            </div>
                                            <div className={`${dropCompany ? "block w-11/12 rounded-lg bg-slate-100 top-8 p-4" : "hidden"}`}>
                                                <ul className="w-full flex flex-col text-dark items-center justify-center gap-6 text-sm">
                                                    <li><a href="#">About</a></li>
                                                    <li><a href="#">Team</a></li>
                                                    <li><a href="#">Blog</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="w-full text-dark cursor-pointer px-3 flex flex-col items-center gap-3">
                                            <div className="flex items-center justify-center gap-3">
                                                <span onClick={() => setDropConnect(!dropConnect)}>Connect</span>
                                                <span className={dropConnect ? "rotate-180" : ""}><img src="../../public/images/icon-arrow-dark.svg" /></span>
                                            </div>
                                            <div className={`${dropConnect ? "block w-11/12 rounded-lg bg-slate-100 top-8 p-4" : "hidden"}`}>
                                                <ul className="w-full flex flex-col text-dark items-center justify-center gap-6 text-sm">
                                                    <li><a href="#">Contact</a></li>
                                                    <li><a href="#">Newsletter</a></li>
                                                    <li><a href="#">Linkedin</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full h-2/5 flex flex-col items-center justify-center border-t gap-5 py-3">
                                    <button className="px-5 py-2 rounded-2xl font-bold text-dark">Login</button>
                                    <button className="px-5 py-2 rounded-2xl text-white bg-primary-main font-semibold">Sign Up</button>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>

                {/* Menu desktop */}
                <nav className="hidden md:flex items-center justify-center">
                    <div className="flex items-center justify-start w-9/12">
                        <a className="text-3xl text-red-50 font-bold">Blogr</a>

                        <div className="ml-10 hidden md:flex">
                            <ul className="flex items-center justify-center gap-5">
                                <li className="text-light group relative cursor-pointer px-3 flex items-center gap-1">
                                    <span onClick={() => setDropProducts(!dropProducts)} className="relative">Product</span>

                                    <span className={dropProducts ? "rotate-180" : ""}><img src="../../public/images/icon-arrow-light.svg" /></span>
                                    <div className={`${dropProducts ? "block rounded-lg bg-slate-100 absolute top-8 p-4" : "hidden"}`}>
                                        <ul className="flex flex-col text-dark items-center justify-center gap-5 text-sm">
                                            <li><a href="#">Overview</a></li>
                                            <li><a href="#">Pricing</a></li>
                                            <li><a href="#">Marketplace</a></li>
                                            <li><a href="#">Features</a></li>
                                            <li><a href="#">Integrations</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="text-light group relative cursor-pointer px-3 flex items-center gap-1">
                                    <span onClick={() => setDropCompany(!dropCompany)} className="relative">Company</span>

                                    <span className={dropCompany ? "rotate-180" : ""}><img src="../../public/images/icon-arrow-light.svg" /></span>
                                    <div className={`${dropCompany ? "block rounded-lg bg-slate-100 absolute top-8 p-4" : "hidden"}`}>
                                        <ul className="flex flex-col text-dark items-center justify-center gap-5 text-sm">
                                            <li><a href="#">About</a></li>
                                            <li><a href="#">Team</a></li>
                                            <li><a href="#">Blog</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="text-light group relative cursor-pointer px-3 flex items-center gap-1">
                                    <span onClick={() => setDropConnect(!dropConnect)} className="relative">Connect</span>
                                    <span className={dropConnect ? "rotate-180" : ""}><img src="../../public/images/icon-arrow-light.svg" /></span>
                                    <div className={`${dropConnect ? "block rounded-lg bg-slate-100 absolute top-8 p-4" : "hidden"}`}>
                                        <ul className="flex flex-col text-dark items-center justify-center gap-5 text-sm">
                                            <li><a href="#">Contact</a></li>
                                            <li><a href="#">Newsletter</a></li>
                                            <li><a href="#">Linkedin</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="w-3/12 flex items-center justify-end">
                        <button className="px-5 py-2 rounded-2xl font-bold text-light">Login</button>
                        <button className="px-5 py-2 rounded-2xl bg-white text-primary-main font-semibold">Sign Up</button>
                    </div>
                </nav>
            </div>

            <div className="w-10/12 h-full z-10 flex flex-col items-center justify-center gap-5">
                <h1 className="text-light font-bold text-center text-2xl md:text-4xl">A modern publishing platform</h1>
                <p className="text-light tracking-[1px] text-sm text-center">Grow your audience and build your online brand</p>
                <div className="flex gap-5 mt-3">
                    <button className="px-3 py-2 rounded-2xl bg-white text-primary-second font-semibold">Start For Free</button>
                    <button className="px-3 py-2 rounded-2xl border border-light text-light font-semibold">Learn More</button>
                </div>
            </div>
        </header>
    )
}

export default Header