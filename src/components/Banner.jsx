import bannerImg from '../assets/PicBack.png';
import bannerBackground from '../assets/banner_wallpaper.svg'

const Banner = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bannerBackground})`,
                backgroundSize: "cover",
            }}
            className="main-container flex items-center">
            <div className='w-full flex justify-center'>
                {/*text*/}
                <div className=' ms-10 text-white'>
                    <h3 className='mt-3 text-2xl font semibold'>Hi , I am</h3>
                    <h1 className='mt-3 text-4xl font-bold'>Navneet Kushwaha</h1>
                    <h2 className='mt-3 text-2xl'>I am Frontend Developer & Backend Developer</h2>
                    
                    <br></br>
                    <div className='icons-container space-x-5'>
                        <a className='' href="https://www.linkedin.com/in/navneet-kushwaha-2b59191b5/" target="_blank">
                            <i class="fa-brands text-4xl text-blue-500 fa-linkedin"></i>
                        </a>
                        <a className='' href="https://leetcode.com/COEIT_1903480130037/" target="_blank">
                            <i class="fa-solid text-4xl text-black-500 fa-code"></i>
                        </a>
                        <a className='' href="https://www.hackerrank.com/profile/IT_1903480130037" target="_blank">
                            <i class="fa-brands text-4xl text-blue-600 fa-hackerrank"></i>
                        </a>
                        <a className='' href="https://github.com/Navneetkumarkushwaha" target="_blank">
                            <i class="fa-brands text-4xl text-black fa-github"></i>
                        </a>

                    </div>
                    <br></br>
                    <a href="/contact" className='text-1xl px-3 py-2 bg-orange-500 rounded-s-full'>Contact Me</a>
                </div>
            </div>
            <div className='w-full flex justify-center'>
                {/*Image*/}
                <div className=''>
                    <img className='rounded-full shadow' src={bannerImg}
                    style={{ height: '400px', width: '400px' }}
                    ></img>
                </div>
            </div>
        </div>
    )
}

export default Banner