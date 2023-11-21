
const Service = () => {
    return (
        <>
            <div className="main-container py-14 ">
                <h1 className="text-3xl font-bold text-center underline"> My Services</h1>

                <div className="services-container flex py-5 space-x-3">
                    
                    <div className=" hover:bg-gray-200 cursor-pointer  service1 space-y-4 shadow-lg rounded-xl bg-slate-100 py-1">
                        <i class="text-3xl fa-brands fa-aws"></i>
                        <h1 className="font-semibold">Web Development</h1>
                        <p>
                            <p>AngularJS(Frontend) | ReactJS(Frontend) | NodeJS(Backend)  | ExpressJS(Backend) </p>
                        </p>
                        <button className="px-3 py-2 bg-orange-500 rounded-full text-1xl">
                            Check
                        </button>
                    </div>
                    
                    <div className="hover:bg-gray-200 cursor-pointer service1 space-y-4 shadow-lg rounded-xl bg-slate-100 py-1">
                        <i class="text-3xl fa-solid fa-mobile"></i>
                        <h1 className="font-semibold">Machine Learning</h1>
                        <p>
                            <p>Heart Disease Pridiction using Machine learning Algo| House Price pridiction</p>
                        </p>
                        <button className="px-3 py-2 bg-orange-500 rounded-full text-1xl ">
                            Check
                        </button>
                    </div>
                    
                    <div className="hover:bg-gray-200 cursor-pointer service1 space-y-4 shadow-lg rounded-xl bg-slate-100 py-1">
                        <i class="text-3xl fa-solid fa-server"></i>
                        <h1 className="font-semibold">Backend Development</h1>
                        <p>
                            <p>Spring Boot | ExpressJS | MySQL(Database) | MongoDB(Database)</p>
                        </p>
                        <button className="px-3 py-2 bg-orange-500 rounded-full text-1xl">
                            Check
                        </button>
                    </div>

                </div>

            </div>
        </>);
}

export default Service