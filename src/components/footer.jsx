const Footer = ()=>{
    return (<>
        <div className="py-5 border bg-gray-100 flex justify-between px-10">

            <div>
                <p>
                    @2023 Navneet Kumar Kushwaha | 
                    <span>
                        | All Rights Reserved 
                    </span>
                </p>
                
            </div>

            <div className="space-x-3">
                <a href="/about"  className="hover:underline">About</a>
                <a href="/about" className="hover:underline">Privacy Policy</a>
                <a href="/about" className="hover:underline">Licensing</a>
                <a href="/about" className="hover:underline">Contact</a>
            </div>

        </div>
    </>)
}

export default  Footer