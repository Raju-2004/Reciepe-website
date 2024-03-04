import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Button from "./Button"
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="text-white pt-20 bg_gradient ">
            <div className="container mx-auto px-20 lg:px-20 py-10 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
                <div className="flex">
                    <p className="font-bold text-center">
                        Flavor<span className="text-orange-700 text-xl">Verse</span>
                    </p>
                </div>

                <div className="">
                    <p>QUICK LINKS</p>

                    <div className="flex flex-col text-start mb-2 md:mb-0">
                        <Link
                            href='/'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Home
                        </Link>
                        <Link
                            href='/'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            About
                        </Link>
                        <Link
                            href='/'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Services
                        </Link>
                        <Link
                            href='/'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Contact
                        </Link>
                        <Link
                            href='/'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Chiefs
                        </Link>
                    </div>
                </div>

                <div>
                    <p>LEGAL</p>
                    <div className='flex flex-col text-start mb-2 md:mb-0 text-[14px]'>
                        <Link
                            href='/'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Terms and Conditions
                        </Link>
                        <Link
                            href='/'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            License Agreement
                        </Link>
                        <Link
                            href='/'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href='/'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Copyright Information
                        </Link>
                        <Link
                            href='/'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Cookies Policy
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col">
                    <p>SOCIAL MEDIA</p>
                    <div className="flex mt-4 gap-3">
                        <Link
                            href='/'
                            className='bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaFacebook size={18} />
                        </Link>

                        <Link
                            href='/'
                            className='bg-pink-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaInstagram size={18} />
                        </Link>
                        <Link
                            href='/'
                            className='bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaTwitter size={18} />
                        </Link>
                        <Link
                            href='/'
                            className='bg-red-600 p-1.5 rounded-sm text-white hover:scale-110'
                        >
                            <FaYoutube size={18} />
                        </Link>
                    </div>

                    <Button
                        title='Sign up'
                        btnType='button'
                        conteinerStyle='mt-10 md:block bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-md min-w-[130px]'
                    />
                </div>
            </div>

            <div className="flex items-center justify-center pb-5">
                <span className="text-gray-400 leading-10">CodeWave &copy; 2023</span>
            </div>
        </footer>
    )
}

export default Footer