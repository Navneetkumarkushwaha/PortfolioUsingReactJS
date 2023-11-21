import React, { useState } from 'react'

const Header = () => {

    const [brandName, setbrandName] = useState("Navneet Kushwaha");
    const [MenuLinks, setMenuLinks] = useState(
        [
            {
                title: "Home",
                link: "/home",
                id: 1,
            },
            {
                title: "About",
                link: "/about",
                id: 2,
            },
            {
                title: "Skills",
                link: "/skills",
                id: 3,
            },
            {
                title: "Portfolio",
                link: "/portfolio",
                id: 4,
            },
            {
                title: "Contact",
                link: "/contact",
                id: 5
            }
        ]
    );

    const[actionButton, setActionButton] = useState({
        title:"Hire-Me",
        links:"/hire-me",
    });

    return (
        <>
            <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100">
                <div>
                    <h1 className="text-2xl font-bold"> {brandName}</h1>
                </div>
                <div className='flex space-x-6'>
                    {/*menu links */}
                    {
                        MenuLinks.map((link) => (
                            <a key={link.id} href={link.link} className='hover:text-orange-600'>{link.title}</a>
                        ))
                    }
                </div>
                <div>
                    <a href={actionButton.links} className='px-3 py-2 bg-orange-500 shadow rounded-full text-2'>{actionButton.title}</a>
                </div>
            </div>
        </>
    )
}

export default Header;