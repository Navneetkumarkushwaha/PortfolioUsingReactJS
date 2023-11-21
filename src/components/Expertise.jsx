
import bannerBackground from '../assets/banner_wallpaper.svg'

const Expertise = () => {
    return (
        <>
            <div className="my-10 border bg-slate-100">

                <h1 className="text-3xl font-bold underline text-center"> My Expertise </h1>
                {/*Box section*/}

                <div
                    style={{
                        backgroundImage: `url(${bannerBackground})`,
                        backgroundSize: "cover",
                        height: "300px",
                        width: "100%",
                        
                    }}
                    className="box-container flex my-16 py-20 ">
                    <div className="">
                        <h1 className="text-2xl font-bold ">I love these technologies</h1>

                        <p className="my-2 text-left px-1 text-black">

Java:

Core Java
Advanced Java
Spring Boot
Model-View-Controller (MVC)
JUnit
Back-End Web Development
Jakarta Persistence
Web Technologies
Databases:

MySQL
MongoDB
Web Services:

RESTful Web Services
Programming:

Data Structures
SQL
JavaScript:

AngularJS
ReactJS
Node.js:

NodeJS
ExpressJS




                        </p>

                        <button className="text-1xl px-4 py-2 bg-orange-500 rounded-full text-1xl">
                            Hire Me
                        </button>

                    </div>

                    {/*Skills contianer */}
                    <div className="flex space-x-3 flex-wrap space-y-3 ">
                        <p className="bg-gray-300 w-fit px-3 rounded-full hover:bg-gray-400 cursor-pointer">Core Java</p>
                        <p className="bg-gray-300 w-fit px-3 rounded-full hover:bg-gray-400 cursor-pointer">Hibernate(ORM Tool)</p>
                        <p className="bg-gray-300 w-fit px-3 rounded-full hover:bg-gray-400 cursor-pointer">Spring Framework</p>
                        <p className="bg-gray-300 w-fit px-3 rounded-full hover:bg-gray-400 cursor-pointer">Spring Boot Framework</p>
                        <p className="bg-gray-300 w-fit px-3 rounded-full hover:bg-gray-400 cursor-pointer">Spring Security</p>
                        <p className="bg-gray-300 w-fit px-3 rounded-full hover:bg-gray-400 cursor-pointer">ReactJS</p>
                        <p className="bg-gray-300 w-fit px-3 rounded-full hover:bg-gray-400 cursor-pointer">Angular</p>
                        <p className="bg-gray-300 w-fit px-3 rounded-full hover:bg-gray-400 cursor-pointer">JavaScript</p>
                        <p className="bg-gray-300 w-fit px-3 rounded-full hover:bg-gray-400 cursor-pointer">Python</p>
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default Expertise