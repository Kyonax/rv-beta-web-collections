import React from 'react'; import './Body.css'
import Collections from '../Collections/Collections';

interface BodyProps {

}

const Body: React.FC<BodyProps> = ({}) => {
    return (
        <div className="grid place-items-center">
            <div className="grid place-items-center max-w-[1060px] pr-6 pl-6 lg:pr-1 lg:pl-1 lg:pr-1 lg:pl-1">
                <div className="w-full md:w-1/5"></div>
                <div className="w-full md:w-3/4 grid place-items-center p-1">
                <h1 className="text-titles text-5xl">The rotten family</h1>
                <span className="flex text-center text-[.8rem] md:text-[.9rem] lg:text-[1rem]">We are keep building community &amp; economic systems around our art, meet our Rotten and beautiful family.</span>
                </div>
                <div className="w-full md:w-1/5"></div>
            </div>
            <div className="w-full bg-white"><Collections/></div>
        </div>
    )
}

export default Body
