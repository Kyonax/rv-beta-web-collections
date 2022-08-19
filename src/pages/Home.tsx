import React, { ReactNode, useEffect, useMemo } from 'react';
import './Home.css'; import Body from '../components/Body/Body';

interface HomeProps {

}

const Home: React.FC<HomeProps> = ({}) => {
    return (
        <div className="grid place-items-center">
            <div className='h-[6rem]'></div>
            <div className="max-w-[1060px]"><Body/></div>
        </div>
    )
}

export default Home
