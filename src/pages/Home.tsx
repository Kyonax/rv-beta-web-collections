import React, { ReactNode, useEffect, useMemo } from 'react';
import './Home.css'; import Body from '../components/Body/Body';
import Footer from '../components/Footer/Footer'

interface HomeProps {

}

const Home: React.FC<HomeProps> = ({}) => {
    return (
        <div className="grid place-items-center">
            <div className='h-[6rem]'></div>
            <div className="w-full"><Body/></div>
            <div className='w-full'><Footer/></div>
        </div>
    )
}

export default Home
