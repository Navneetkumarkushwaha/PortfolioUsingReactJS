import { useState } from 'react'
import img from '../assets/PicBack.png'

const About = () => {


    const [about, setabout] = useState({
        title:"Java Developer & Frontend Developer",
        desc1:" Core Java  Advance Java · Spring Boot · Model-View-Controller (MVC) · JUnit · Back-End Web Development · Jakarta Persistence · Web Technologies  MySQL · MongoDB · RESTful WebServices · Data Structures · SQL",
        desc2:"AngularJS · ReactJS · NodeJS · ExpressJS"
    });
    
    return (
        <>
            <div className="main-container bg-gray-200 py-16">
                <h1 className="text-center pb-16 text-2xl underline font-bold" >About</h1>

                <div className="flex">
                    {/*image container*/}
                    <div className='w-full flex justify-center'>
                        <img src={img} alt="" 
                         style={{ height: '300px', width: '300px' }}
                        ></img>
                    </div>

                    {/* text container*/}
                    <div className='w-full'>
                        <div className='space-y-5'>
                            <h1 className='text-3xl font-semibold'>{about.title}</h1>
                            <p>{about.desc1}</p>
                            <p>{about.desc2}</p>
                            <button className='bg-orange-500 px-3 py-2 text-1xl rounded-full shadow'>read more..</button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
export default About