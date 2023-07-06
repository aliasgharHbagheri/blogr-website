
const Sections = () => {
    return (
        <main className="w-full py-20 flex flex-col items-center justify-start gap-20">
            {/* Section 1 */}
            <section className="w-full min-h-[70vh] h-auto flex flex-col items-center justify-center gap-5">
                <h2 className="text-2xl text-secondary font-bold text-center">Designed for the future</h2>
                <div className="w-full flex flex-col-reverse md:flex-row items-center justify-around gap-5 px-5 md:px-0">
                    <div className="w-full md:w-5/12 px-6 flex flex-col sm:flex-row md:flex-col text-center md:text-left sm:items-start md:items-start justify-center gap-8">
                        <div>
                            <h3 className="text-secondary font-semibold text-xl sm:text-left">Introducing an extensible editor</h3>
                            <p className="text-slate-700 text-sm mt-4 sm:text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat assumenda maiores optio consectetur dolorem ipsa, quae maxime non. Quia, tenetur perferendis saepe porro numquam ab aspernatur autem quisquam. Sint, nostrum?</p>
                        </div>
                        <div>
                            <h3 className="text-secondary font-semibold text-xl sm:text-left">Robust content management</h3>
                            <p className="text-slate-700 text-sm mt-4 sm:text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat assumenda maiores optio consectetur dolorem ipsa, quae maxime non. Quia, tenetur perferendis saepe porro numquam ab aspernatur autem quisquam. Sint, nostrum?</p>
                        </div>

                    </div>
                    <div className="w-full mt-5 sm:w-8/12 md:w-5/12 md:mt-0">
                        <img src="../../public/images/illustration-editor-mobile.svg" className="w-full h-full" alt="img-section-1" />
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section className="w-full min-h-[65vh] h-auto flex flex-col items-start md:items-center justify-center">
                <div className="w-full md:h-2/3 relative flex flex-col sm:flex-row items-center justify-start bg-secondary rounded-bl-[75px] rounded-tr-[75px]">
                    <div className="w-full md:h-full absolute z-0 overflow-hidden">
                        <img src="../../public/images/bg-pattern-circles.svg"
                            className="object-cover mx-auto sm:mx-0 sm:w-6/12 h-full -translate-y-14  md:-translate-x-18 md:-translate-y-10" alt="bg-header" />
                    </div>
                    <div className="w-full sm:w-6/12 md:h-full z-10 flex items-center justify-center">
                        <img src="../../public/images/illustration-phones.svg" className="object-cover -translate-y-14 w-8/12 " alt="img-section-1" />
                    </div>
                    <div className="w-full sm:w-6/12 p-6 my-14 md:px-6 flex flex-col text-center sm:text-left sm:items-start justify-center gap-4">
                        <h3 className="text-light font-semibold text-2xl">State of the Art Infrastructure</h3>
                        <p className="text-light sm:pr-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat assumenda maiores optio consectetur dolorem ipsa, quae maxime non. Quia, tenetur perferendis saepe porro numquam ab aspernatur autem quisquam. Sint, nostrum?</p>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            <section className="w-full min-h-[70vh] h-auto flex flex-col items-center justify-center">
                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-5">
                    <div className="w-full sm:w-8/12 md:w-5/12 md:-translate-x-28">
                        <img src="../../public/images/illustration-laptop-desktop.svg" className="w-full hidden md:block h-full" alt="img-section-1" />
                        <img src="../../public/images/illustration-laptop-mobile.svg" className="w-full block md:hidden h-full" alt="img-section-1" />
                    </div>
                    <div className="w-full md:w-5/12 px-6 flex flex-col sm:flex-row md:flex-col text-center md:text-left sm:items-start md:items-start justify-center gap-8">
                        <div>
                            <h3 className="text-secondary font-semibold text-xl sm:text-left">Introducing an extensible editor</h3>
                            <p className="text-slate-700 text-sm mt-4 sm:text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat assumenda maiores optio consectetur dolorem ipsa, quae maxime non. Quia, tenetur perferendis saepe porro numquam ab aspernatur autem quisquam. Sint, nostrum?</p>
                        </div>
                        <div>
                            <h3 className="text-secondary font-semibold text-xl sm:text-left">Robust content management</h3>
                            <p className="text-slate-700 text-sm mt-4 sm:text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat assumenda maiores optio consectetur dolorem ipsa, quae maxime non. Quia, tenetur perferendis saepe porro numquam ab aspernatur autem quisquam. Sint, nostrum?</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Sections;