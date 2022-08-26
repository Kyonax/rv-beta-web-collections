import React, { useState, useEffect } from 'react'; import './Modal.css'
import { FaTimes } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface ModalProps {
    toggleModal: any,
    setToggleModal: any,
    cardProps: any
}

const Modal: React.FC<ModalProps> = ({ toggleModal, setToggleModal, cardProps }) => {
    const [colorModal, setColorModal] = useState("#D9D3BD"),
        [visible, setVisible] = useState("opacity-0"), [modalVisible, setModalVisible] = useState("opacity-0 invisible"),
        [contentModalVisible, setContentModalVisible] = useState("opacity-0 invisible"),
        [title, setTitle] = useState("None"), [subTitle, setSubTitle] = useState("None"),
        [description, setDescription] = useState(<span>none</span>);


    const hidde = () => {
        setTimeout(() => { setContentModalVisible("opacity-0") }, 100);
        setTimeout(() => { setModalVisible("opacity-0") }, 500);
        setTimeout(() => { setVisible("opacity-100") }, 700);

        setTimeout(() => {
            setModalVisible("opacity-0 invisible");
            setContentModalVisible("opacity-0 invisible");
        }, 800)

        setTimeout(() => { setToggleModal(false) }, 850);
    }



    useEffect(() => {

        if (toggleModal === true) {
            setTimeout(() => { setVisible("opacity-0") }, 100);
            setTimeout(() => { setModalVisible("opacity-100 visible") }, 500);
            setTimeout(() => { setContentModalVisible("opacity-100 visible") }, 700);
        }

    }, [toggleModal])

    return (<div>
        <div className={`${modalVisible} modal transition-[opacity] ease-in-out duration-700 `}>

            <div className={` bg-black z-30 opacity-50 w-full h-full `}></div>


            <div className='overflow-auto h-full w-full z-30 place-content-center fixed top-[0px] bottom-0 left-0 right-0 flex flex-wrap'>

                <div className='relative h-full w-full pr-4 grid place-content-center lg:max-w-[1097px]'>
                    <div className='w-full absolute sm:relative lg:top-[1%] lg:max-w-[1097px] sm:top-[16%] md:top-[10%] md:max-w-[647px] m-0 sm:m-2 flex flex-col'>
                        <div className={`z-30 mt-3 mb-3 lg:mt-auto lg:mb-auto w-full text-white sm:rounded-2xl lg:rounded-3xl lg:max-w-[1097px] ` + (title === "DAO ACTIVITIES" ? "bg-[#DED100]" : "bg-[#242424]")}>
                            <div className={`${contentModalVisible} relative transition-[opacity] ease-in-out duration-700 w-full`}>

                                <div className='relative lg:max-w-[1097px] grid place-content-center sm:pl-2 sm:pr-2 lg:flex lg:flex-wrap lg:pl-2 lg:pr-4 '>
                                    <div className='grid place-content-center mb-[-3.5rem] md:mb-[-.6rem] pl-6 pr-6 pt-6 w-full lg:w-2/5 lg:pt-10 lg:pb-10 lg:pl-5 lg:pr-5'>
                                        <LazyLoadImage className="lg:object-contain object-cover" loading="lazy" width="100%" height="100%" src={cardProps.data.image} alt={`Alpha Rotten ${cardProps.data.name}`} />
                                    </div>
                                    <div className='grid grid-rows-6 gap-0 lg:w-3/5 pt-10 lg:pr-8 pb-10'>
                                        <div className='mt-[-1.3rem] mb-[-2.5rem] md:mb-auto flex flex-wrap place-content-center lg:place-content-start row-span-1'>
                                            <h1 className='text-titles text-[2.9rem] text-[#F64653] ml-3 mr-8'>Alpha Rotten</h1>
                                            <div className='pt-4 grid'>
                                                <span className='font-bold text-[1.3rem] mt-[-.2rem]'>{cardProps.data.name}</span>
                                                <span className='text-[.8rem] mt-[-1.4rem]'>Ranking #{cardProps.ranking_nft}</span>
                                            </div>
                                        </div>
                                        <div className='md:min-w-[551px] pr-8 pl-8 md:pr-2 md:pl-2 row-span-5 grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-4 gap-2 p-2 w-full'>
                                            {
                                                Object.keys(cardProps.data.attributes).map(function (key: any) {
                                                    return (<div className='h-[4rem] md:h-auto rounded-2xl border border-[#363636] grid grid-cols-6'>
                                                        <div className='relative col-span-3 grid items-start place-content-center text-[.7rem]'>
                                                            <div className='grid absolute left-0 h-full content-center'>
                                                                <span className='ml-3 text-[.7rem] font-bold'>{cardProps.data.attributes[key].trait_type}</span>
                                                                <span className='ml-3 text-[.62rem]'>{cardProps.data.attributes[key].value}</span>
                                                            </div>
                                                        </div>
                                                        <div className='col-span-1'></div>
                                                        <div className='relative col-span-2 grid items-end place-content-center text-[.7rem]'>
                                                            <div className='grid absolute right-0 h-full content-center text-[#080015] font-bold'>
                                                                <div className={`${cardProps.data.attributes[key].rarity === "Common" ? "bg-[#D8E8E7]" :
                                                                    cardProps.data.attributes[key].rarity === "Uncommon" ? "bg-[#E8EC5A]" :
                                                                        cardProps.data.attributes[key].rarity === "Rare" ? "bg-[#01EB7D]" :
                                                                            cardProps.data.attributes[key].rarity === "Very Rare" ? "bg-[#D500FE]" :
                                                                                cardProps.data.attributes[key].rarity === "Legendary" ? "bg-[#803EFF]" : "bg-black"} w-[6rem] text-center rounded-xl p-2 pr-3 pl-3 mr-3`}>{cardProps.data.attributes[key].rarity}</div>
                                                            </div>
                                                        </div>
                                                    </div>)
                                                })
                                            }

                                        </div>
                                        <div className='p-3'>
                                            <div className='flex place-items-center'>
                                                <span className='font-bold text-[.7rem] sm:text-[.8rem] mr-2 ml-2 sm:ml-4'>Radiation: </span>
                                                <div className='flex border border-[#444444] pr-2 pl-2 h-3 gap-[.2rem] place-items-center rounded-lg mr-2'>
                                                    <div className={`h-1 rounded-l-lg w-5 sm:w-7 ${cardProps.radiation_nft >= 0.5 ? 'bg-[#FDF504]' : 'bg-[#0f0f0f]'}`}></div>
                                                    <div className={`h-1 w-5 sm:w-7 ${cardProps.radiation_nft >= 1.0 ? 'bg-[#F6C717]' : 'bg-[#0f0f0f]'}`}></div>
                                                    <div className={`h-1 w-5 sm:w-7 ${cardProps.radiation_nft >= 1.5 ? 'bg-[#F0A126]' : 'bg-[#0f0f0f]'}`}></div>
                                                    <div className={`h-1 w-5 sm:w-7 ${cardProps.radiation_nft >= 2.0 ? 'bg-[#EB8133]' : 'bg-[#0f0f0f]'}`}></div>
                                                    <div className={`h-1 w-5 sm:w-7 ${cardProps.radiation_nft >= 2.5 ? 'bg-[#E66240]' : 'bg-[#0f0f0f]'}`}></div>
                                                    <div className={`h-1 w-5 sm:w-7 ${cardProps.radiation_nft >= 3.0 ? 'bg-[#E1424D]' : 'bg-[#0f0f0f]'}`}></div>
                                                    <div className={`h-1 w-5 sm:w-7 ${cardProps.radiation_nft >= 3.5 ? 'bg-[#DC235A]' : 'bg-[#0f0f0f]'}`}></div>
                                                    <div className={`h-1 rounded-r-lg w-5 sm:w-7 ${cardProps.radiation_nft >= 4.0 ? 'bg-[#D70366]' : 'bg-[#0f0f0f]'}`}></div>
                                                </div>
                                                <span className='font-bold text-[.6rem] sm:text-[.7rem]'>{parseFloat(cardProps.radiation_nft).toFixed(1)}</span>


                                            </div>
                                        </div>
                                        <div className='h-full grid place-content-center mt-2'>
                                            <div onClick={() => hidde()} className='text-white grid place-content-center w-[10rem] bg-[#f54856] rounded-lg p-2 hover:cursor-pointer'><FaTimes /></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>);
}

export default Modal