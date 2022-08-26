import React from 'react'; import './Footer.css';
import Rotten from '../../assets/icons/RottenLogo';
import { FaTwitter, FaDiscord, FaInstagram } from 'react-icons/fa';

interface FooterProps {

}

const Footer: React.FC<FooterProps> = ({ }) => {
    return (
        <div className="grid place-items-center mt-60">
            <div className=''><Rotten w="180px" h="50px"/></div>
            <div className='grid place-content-center text-center'>
                <span className='font-bold text-[.7rem] md:text-[.8rem]'>follow us</span>
                <div className='text-[18px] md:text-[20px] mt-1 flex place-content-center gap-3'>
                    <FaTwitter />
                    <FaDiscord />
                    <FaInstagram />
                </div>
                <span className='text-[.65rem] md:text-[.75rem] mt-3 mb-6'>Copyright © 2022. Made with love  by <a href="https://twitter.com/rotten_ville" target={`_blank`} className='font-bold'>RottenVille Team</a></span>
            </div>
        </div>
    )
}

export default Footer
