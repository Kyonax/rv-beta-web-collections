import React from 'react'; import './Body.css'
import Collections from '../Collections/Collections';

interface BodyProps {

}

const Body: React.FC<BodyProps> = ({}) => {
    return (
        <div>
            <div className="grid place-items-center">
                <div className="w-full md:w-1/4"></div>
                <div className="w-full md:w-2/4 grid place-items-center p-1">
                <h1 className="text-titles text-5xl">The rotten family</h1>
                <span className="flex text-center">We are keep building community &amp; economic systems around our art, meet our rotten an beautiful family.</span>
                </div>
                <div className="w-full md:w-1/4"></div>
            </div>
            <div className=""><Collections/></div>
        </div>
    )
}

export default Body
