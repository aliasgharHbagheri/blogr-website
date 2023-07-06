
const Footer = () => {
    return (
        <footer className="w-full bg-dark px-8 py-12 rounded-tr-[75px] flex flex-col sm:flex-row items-center sm:items-start justify-center sm:mt-8 sm:gap-5">
            <div className="w-full md:w-3/12 text-center">
                <a className="text-3xl text-red-50 font-bold">Blogr</a>
            </div>
            <div className="w-full md:w-3/12 text-center mt-8 sm:mt-0">
                <h3 className="text-red-50 font-bold">Product</h3>
                <ul className="flex flex-col items-center justify-center mt-5 gap-3 text-sm text-slate-400">
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Marketplace</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Integrations</a></li>
                </ul>
            </div>
            <div className="w-full md:w-3/12 text-center mt-8 sm:mt-0">
                <h3 className="text-red-50 font-bold">Company</h3>
                <ul className="flex flex-col items-center justify-center mt-5 gap-3 text-sm text-slate-400">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </div>
            <div className="w-full md:w-3/12 text-center mt-8 sm:mt-0">
                <h3 className="text-red-50 font-bold">Connect</h3>
                <ul className="flex flex-col items-center justify-center mt-5 gap-3 text-sm text-slate-400">
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Newsletter</a></li>
                    <li><a href="#">Linkedin</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer