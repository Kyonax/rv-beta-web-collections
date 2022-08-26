import React, { Suspense, lazy, useState, useEffect } from 'react'; import './Collections.css'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import MagicEdenLogo from '../../assets/icons/MagicEden'; import axios from 'axios';
import NoImage from '../../assets/No_Img.jpg'; import Modal from '../utils/Modal';
import ModalBusts from '../utils/ModalBusts'; import ModalHonorific from '../utils/ModalHonorific';

interface CollectionsProps {

}

const Collections: React.FC<CollectionsProps> = ({ }) => {
    let [_alphaMintedNFTs, _setAlphaMintedNFTs] = useState({
        data: {

            "HFoUEQq967Ei3v4wSp738WDFrrxiCjYpfGEEz4DmTvpG": {
                "mint_token": "HFoUEQq967Ei3v4wSp738WDFrrxiCjYpfGEEz4DmTvpG",
                "uri_url": "https://arweave.net/W3i8de0JFjCcU7K86Yt0mqgc8WIhOAqUPOPWi2l51dw",
                "explorer_url": "https://explorer.solana.com/address/HFoUEQq967Ei3v4wSp738WDFrrxiCjYpfGEEz4DmTvpG",
                "is_mutable": true,
                "amount_of_attributes": 6,
                "primary_sale_happened": true,
                "update_authority": "HnWH7yeo4A9miS9LtBNLPt8RjDhqM2CRiKujEqM5tCQ1",
                "metadata_account": "CkRb3i3Tbij4dpAvKkGwiAHkcwKYpDzQMaiKhu5pSLEz",
                "edition_nonce": 252,
                "token_standard": 0,
                "ranking_nft": 32,
                "data": {
                    "name": "Not Data Found",
                    "symbol": "AR",
                    "description": "333 PFP NFTs, designed with a very own style in high-quality 3D Graphics. We are rotten but still good guys!!!",
                    "seller_fee_basis_points": 800,
                    "image": "https://arweave.net/2OYghI_w_VvC0-TnuUwiijmacFjSHnxuYtjU9nD7mpc",
                    "external_url": "https://rottenville.io",
                    "edition": 0,
                    "collection": {
                        "name": "Alpha Collection",
                        "family": "Rotten Ville"
                    },
                    "attributes": [
                        {
                            "trait_type": "Background",
                            "value": "Alpha Zone Orange "
                        },
                        {
                            "trait_type": "Skin",
                            "value": "Pink Atomic Confused "
                        },
                        {
                            "trait_type": "Eyes",
                            "value": "Blue Light "
                        },
                        {
                            "trait_type": "Clothes",
                            "value": "White shirt "
                        },
                        {
                            "trait_type": "Glasses",
                            "value": "Movie "
                        },
                        {
                            "trait_type": "Phase",
                            "value": "Alpha Nuclear Radiation"
                        }
                    ],
                    "properties": {
                        "files": [
                            {
                                "uri": "https://arweave.net/2OYghI_w_VvC0-TnuUwiijmacFjSHnxuYtjU9nD7mpc",
                                "type": "image/png"
                            }
                        ],
                        "category": "image",
                        "creators": [
                            {
                                "address": "6zjwY1tbb3Lc2k6TcbAMWRHx6sQEVPt5Js7Aue6NkQH5",
                                "share": 40
                            },
                            {
                                "address": "D6HxbQa7juwKoMDTUHJtJWW6WLG9gzKfRA8iQmd2oZ1x",
                                "share": 60
                            }
                        ]
                    }
                },
                "creators": [
                    "AaDok1ZGwDTgAdeXZxuyprCdbRvAK1VzM2EvuBmTAw3E",
                    "6zjwY1tbb3Lc2k6TcbAMWRHx6sQEVPt5Js7Aue6NkQH5",
                    "D6HxbQa7juwKoMDTUHJtJWW6WLG9gzKfRA8iQmd2oZ1x"
                ]
            }

        }
    });

    let [_bustsEstructureCollection, _setBustsEstructureCollection] = useState({
        data: {
            "solana_brain": {
                "image": "https://arweave.net/DFG6hZ-kL8XS4FY3KAQ-4YmnlL8PLfLdgrQwVXbBySA?ext=gif",
                "supply": 50,
                "type_bust": "Not Data Found"
            }
        }
    });

    let [_honorificMintedNFTs, _setHonorificMintedNFTs] = useState({
        data: {
            "EE3N3Pd2oeDhcRPUknEden8x3rL5FbCy2iZr2PixEbu": {
                "mint_token": "EE3N3Pd2oeDhcRPUknEden8x3rL5FbCy2iZr2PixEbu",
                "verified_collection_address": "8mPsqKXbDiEuAaJsFqD1RAWrt1DtXkQYckKGa3fLkTGE",
                "uri_url": "https://arweave.net/wVBGYqDg8d7-QEa79kiENlvJWGB2tR8LzVCIyyp8-sU",
                "explorer_url": "https://explorer.solana.com/address/EE3N3Pd2oeDhcRPUknEden8x3rL5FbCy2iZr2PixEbu",
                "is_mutable": 1,
                "amount_of_attributes": 1,
                "primary_sale_happened": 1,
                "update_authority": "HnWH7yeo4A9miS9LtBNLPt8RjDhqM2CRiKujEqM5tCQ1",
                "edition_nonce": 253,
                "token_standard": 0,
                "data": {
                    "name": "Not Data Found",
                    "symbol": "HR",
                    "description": "RottenVille Honorific Collection, let's build the Rottenverse together - r u dead?",
                    "seller_fee_basis_points": 999,
                    "image": "https://arweave.net/q-F4HpFR38tgbH1Scw1FlQwK4PR4lUUTGCFW7R9xThs",
                    "external_url": "https://rottenville.io",
                    "edition": 0,
                    "collection": {
                        "name": "Honorific Collection",
                        "family": "Rotten Ville"
                    },
                    "attributes": [
                        {
                            "trait_type": "Honorific",
                            "value": "r u dead?"
                        }
                    ],
                    "properties": {
                        "files": [
                            {
                                "uri": "https://arweave.net/q-F4HpFR38tgbH1Scw1FlQwK4PR4lUUTGCFW7R9xThs",
                                "type": "image/png"
                            }
                        ],
                        "category": "image",
                        "creators": [
                            {
                                "address": "D6HxbQa7juwKoMDTUHJtJWW6WLG9gzKfRA8iQmd2oZ1x",
                                "share": 100
                            }
                        ]
                    }
                },
                "creators": [
                    "D6HxbQa7juwKoMDTUHJtJWW6WLG9gzKfRA8iQmd2oZ1x"
                ]
            }
        }
    });

    const alphaFunction = async () => {
        try {
            let data = await axios.get("https://ouous0ghgk.execute-api.us-east-1.amazonaws.com/collection/alpha/minted_nfts")
                .then(response => {
                    if (response.data.length === 0) {
                        response.data = {
                            data: {

                                "HFoUEQq967Ei3v4wSp738WDFrrxiCjYpfGEEz4DmTvpG": {
                                    "mint_token": "HFoUEQq967Ei3v4wSp738WDFrrxiCjYpfGEEz4DmTvpG",
                                    "uri_url": "https://arweave.net/W3i8de0JFjCcU7K86Yt0mqgc8WIhOAqUPOPWi2l51dw",
                                    "explorer_url": "https://explorer.solana.com/address/HFoUEQq967Ei3v4wSp738WDFrrxiCjYpfGEEz4DmTvpG",
                                    "is_mutable": true,
                                    "amount_of_attributes": 6,
                                    "primary_sale_happened": true,
                                    "update_authority": "HnWH7yeo4A9miS9LtBNLPt8RjDhqM2CRiKujEqM5tCQ1",
                                    "metadata_account": "CkRb3i3Tbij4dpAvKkGwiAHkcwKYpDzQMaiKhu5pSLEz",
                                    "edition_nonce": 252,
                                    "token_standard": 0,
                                    "ranking_nft": 32,
                                    "data": {
                                        "name": "Not Data Found",
                                        "symbol": "AR",
                                        "description": "333 PFP NFTs, designed with a very own style in high-quality 3D Graphics. We are rotten but still good guys!!!",
                                        "seller_fee_basis_points": 800,
                                        "image": "https://arweave.net/2OYghI_w_VvC0-TnuUwiijmacFjSHnxuYtjU9nD7mpc",
                                        "external_url": "https://rottenville.io",
                                        "edition": 0,
                                        "collection": {
                                            "name": "Alpha Collection",
                                            "family": "Rotten Ville"
                                        },
                                        "attributes": [
                                            {
                                                "trait_type": "Background",
                                                "value": "Alpha Zone Orange "
                                            },
                                            {
                                                "trait_type": "Skin",
                                                "value": "Pink Atomic Confused "
                                            },
                                            {
                                                "trait_type": "Eyes",
                                                "value": "Blue Light "
                                            },
                                            {
                                                "trait_type": "Clothes",
                                                "value": "White shirt "
                                            },
                                            {
                                                "trait_type": "Glasses",
                                                "value": "Movie "
                                            },
                                            {
                                                "trait_type": "Phase",
                                                "value": "Alpha Nuclear Radiation"
                                            }
                                        ],
                                        "properties": {
                                            "files": [
                                                {
                                                    "uri": "https://arweave.net/2OYghI_w_VvC0-TnuUwiijmacFjSHnxuYtjU9nD7mpc",
                                                    "type": "image/png"
                                                }
                                            ],
                                            "category": "image",
                                            "creators": [
                                                {
                                                    "address": "6zjwY1tbb3Lc2k6TcbAMWRHx6sQEVPt5Js7Aue6NkQH5",
                                                    "share": 40
                                                },
                                                {
                                                    "address": "D6HxbQa7juwKoMDTUHJtJWW6WLG9gzKfRA8iQmd2oZ1x",
                                                    "share": 60
                                                }
                                            ]
                                        }
                                    },
                                    "creators": [
                                        "AaDok1ZGwDTgAdeXZxuyprCdbRvAK1VzM2EvuBmTAw3E",
                                        "6zjwY1tbb3Lc2k6TcbAMWRHx6sQEVPt5Js7Aue6NkQH5",
                                        "D6HxbQa7juwKoMDTUHJtJWW6WLG9gzKfRA8iQmd2oZ1x"
                                    ]
                                }

                            }
                        }
                    }
                    _setAlphaMintedNFTs(response.data);
                })
        } catch (error) {
            console.log(error);
        }
    }

    const bustsFunction = async () => {
        try {
            let data = await axios.get("https://ouous0ghgk.execute-api.us-east-1.amazonaws.com/collection/busts/collection_structure")
                .then(response => {
                    if (response.data.length === 0) {
                        response.data = {
                            data: {

                                "solana_brain": {
                                    "image": "https://arweave.net/DFG6hZ-kL8XS4FY3KAQ-4YmnlL8PLfLdgrQwVXbBySA?ext=gif",
                                    "supply": 50,
                                    "type_bust": "Not Data Found"
                                }
                            }
                        }
                    }
                    _setBustsEstructureCollection(response.data);
                })
        } catch (error) {
            console.log(error);
        }
    }

    const honorificFunction = async () => {
        try {
            let data = await axios.get("https://ouous0ghgk.execute-api.us-east-1.amazonaws.com/collection/honorific/minted_nfts")
                .then(response => {
                    if (response.data.length === 0) {
                        response.data = {
                            data: {

                                "EE3N3Pd2oeDhcRPUknEden8x3rL5FbCy2iZr2PixEbu": {
                                    "mint_token": "EE3N3Pd2oeDhcRPUknEden8x3rL5FbCy2iZr2PixEbu",
                                    "verified_collection_address": "8mPsqKXbDiEuAaJsFqD1RAWrt1DtXkQYckKGa3fLkTGE",
                                    "uri_url": "https://arweave.net/wVBGYqDg8d7-QEa79kiENlvJWGB2tR8LzVCIyyp8-sU",
                                    "explorer_url": "https://explorer.solana.com/address/EE3N3Pd2oeDhcRPUknEden8x3rL5FbCy2iZr2PixEbu",
                                    "is_mutable": 1,
                                    "amount_of_attributes": 1,
                                    "primary_sale_happened": 1,
                                    "update_authority": "HnWH7yeo4A9miS9LtBNLPt8RjDhqM2CRiKujEqM5tCQ1",
                                    "edition_nonce": 253,
                                    "token_standard": 0,
                                    "data": {
                                        "name": "Not Data Found",
                                        "symbol": "HR",
                                        "description": "RottenVille Honorific Collection, let's build the Rottenverse together - r u dead?",
                                        "seller_fee_basis_points": 999,
                                        "image": "https://arweave.net/q-F4HpFR38tgbH1Scw1FlQwK4PR4lUUTGCFW7R9xThs",
                                        "external_url": "https://rottenville.io",
                                        "edition": 0,
                                        "collection": {
                                            "name": "Honorific Collection",
                                            "family": "Rotten Ville"
                                        },
                                        "attributes": [
                                            {
                                                "trait_type": "Honorific",
                                                "value": "r u dead?"
                                            }
                                        ],
                                        "properties": {
                                            "files": [
                                                {
                                                    "uri": "https://arweave.net/q-F4HpFR38tgbH1Scw1FlQwK4PR4lUUTGCFW7R9xThs",
                                                    "type": "image/png"
                                                }
                                            ],
                                            "category": "image",
                                            "creators": [
                                                {
                                                    "address": "D6HxbQa7juwKoMDTUHJtJWW6WLG9gzKfRA8iQmd2oZ1x",
                                                    "share": 100
                                                }
                                            ]
                                        }
                                    },
                                    "creators": [
                                        "D6HxbQa7juwKoMDTUHJtJWW6WLG9gzKfRA8iQmd2oZ1x"
                                    ]
                                }

                            }
                        }
                    }
                    _setHonorificMintedNFTs(response.data);
                })
        } catch (error) {
            console.log(error);
        }
    }

    let [_modal_active, _set_modal_active] = useState(false), [_modal_active_bust, _set_modal_active_bust] = useState(false), [_card_props, _set_card_props] = useState(_alphaMintedNFTs),
        [_modal_active_honorific, _set_modal_active_honorific] = useState(false),[_card_props_bust, _set_card_props_bust] = useState(_bustsEstructureCollection),
        [_card_props_honorific, _set_card_props_honorific] = useState(_honorificMintedNFTs);

    useEffect(() => {
        const interval = setInterval(() => {
            alphaFunction();
            bustsFunction();
            honorificFunction();
        }, 3000);

        return () => clearInterval(interval);
    }, [])

    const utilities = {
        "alpha": ["DAO", "Staking", "50% Royalties", "Whitelist Beta", "PFP", "Token", "Airdrop", "Transmutation"],
        "busts": ["Staking", "Token"],
        "honorific": ["Sneak Peeks","Lab Developments","Special Benefits","Exclusive NFTs"]
    }

    const modalDeploy = (_card_props_l: any) => {
        _set_modal_active(true);
        _set_card_props(_card_props_l);
    }

    const modalBustDeploy = (_card_props_2: any) => {
        _set_modal_active_bust(true);
        _set_card_props_bust(_card_props_2);
    }

    const modalHonorificDeploy = (_card_props_3: any) => {
        _set_modal_active_honorific(true);
        _set_card_props_honorific(_card_props_3);
    }

    const data = [
        {
            label: "Alpha Rottens",
            value: "alpha",
            desc: <div>
                {
                    (_alphaMintedNFTs.data["HFoUEQq967Ei3v4wSp738WDFrrxiCjYpfGEEz4DmTvpG"].data.name === "Not Data Found")
                        ? <div className='flex w-full place-content-center text-center'> <div className="mr-2 mt-[5.25px] w-3 h-3 border-b-2 border-gray-900 rounded-full animate-spin"></div> Loading, please wait...</div>
                        : <div className="mr-2 mt-7 ml-2 lg:mr-9 lg:ml-9 grid place-items-center text-body text-[#000000]">

                            {_modal_active === true ? <div className='z-30'><Modal toggleModal={_modal_active} setToggleModal={_set_modal_active} cardProps={_card_props} /></div> : <div></div>}

                            <div className="relative lg:max-w-[1080px] w-full grid lg:flex place-items-start pl-9 pr-9">
                                <div className="relative invisible hidden lg:block lg:visible w-full lg:w-3/12 mr-[3rem] mb-4">
                                    <Suspense fallback={<div className="w-[100%] h-[100%] bg-[#f4f5f6]"> </div>}>
                                        <LazyLoadImage className="lg:rounded-full lg:object-contain lg:h-auto object-cover h-[17rem] bg-black" loading="lazy" width="100%" height="100%" src={'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://dl.airtable.com/.attachmentThumbnails/e43f818db5155e40d2930159c2c6a991/8ce101e5'} alt={'Alpha Rotten #1'} />
                                    </Suspense>
                                </div>
                                <div className="relative w-full grid lg:w-8/12">
                                    <div>
                                        <span className="flex">
                                            <h2 className="text-titles text-4xl mr-3">Alpha rotten</h2>
                                            <h2 className="text-titles text-4xl text-[#F64653]">sold out</h2>
                                            <div className='ml-4 mt-0 mb-2 border border-[#F64653] rounded-xl p-2 pl-4 pr-4'><a target={'_blank'} href="https://magiceden.io/marketplace/rotten_ville"> <MagicEdenLogo /> </a></div>
                                        </span>
                                        <p className='text-[.8rem]'>Is a collection of 333 unique Rotten NFTs generated in high quality 3d. We are rotten but still good guys !!!</p>
                                    </div>
                                    <div>
                                        <p className="mt-6">
                                            <h1 className="font-bold mb-1">Utility</h1>
                                            <div className='flex flex-wrap'>{
                                                Object.keys(utilities.alpha).map(function (key: any) {
                                                    return <div className='mr-1 mb-1'>
                                                        <span className='border border-[#F64653] rounded-md p-1 text-[.7rem]'> {utilities.alpha[key]}</span>
                                                    </div>
                                                })
                                            }</div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:max-w-[1360px] mt-10 grid gap-2 lg:gap-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                                {
                                    Object.keys(_alphaMintedNFTs.data).map(function (key: any) {
                                        let data: { [index: string]: any } = _alphaMintedNFTs.data;
                                        data[key].data.name = data[key].data.name.replace('Alpha Rotten', '');
                                        return <div className="relative flex m-1">
                                            <span className="absolute p-5 pt-4 text-[.7rem] text-white">{data[key].data.name}</span>
                                            <span className="absolute right-0 p-5 pt-4 text-[.7rem] text-white">Rank #{data[key].ranking_nft}</span>
                                            <LazyLoadImage onClick={() => { modalDeploy(data[key]) }} className="rounded-xl hover:cursor-pointer transition-all ease-in-out delay-150" effect="opacity" loading="lazy" width="100%" height="100%" src={data[key].data.image} alt={`Alpha Rotten #${data[key].data.name}`} placeholderSrc={NoImage} />
                                        </div>
                                    })
                                }
                            </div>

                        </div>
                }
            </div>
        },
        {
            label: "Bust Sculptures",
            value: "busts",
            desc: <div>
                {
                    (_bustsEstructureCollection.data["solana_brain"].type_bust === "Not Data Found")
                        ? <div className='flex w-full place-content-center text-center'> <div className="mr-2 mt-[5.25px] w-3 h-3 border-b-2 border-gray-900 rounded-full animate-spin"></div> Loading, please wait...</div>
                        : <div className="mr-2 mt-7 ml-2 lg:mr-9 lg:ml-9 grid place-items-center text-body text-[#000000]">

                            {_modal_active_bust === true ? <div className='z-30'><ModalBusts toggleModal={_modal_active_bust} setToggleModal={_set_modal_active_bust} cardProps={_card_props_bust} /></div> : <div></div>}

                            <div className="relative lg:max-w-[1080px] w-full grid lg:flex place-items-start pl-9 pr-9">
                                <div className="relative invisible hidden lg:block lg:visible w-full lg:w-3/12 mr-[3rem] mb-4">
                                    <Suspense fallback={<div className="w-[100%] h-[100%] bg-[#f4f5f6]"> </div>}>
                                        <LazyLoadImage className="lg:rounded-full lg:object-contain lg:h-auto object-cover h-[17rem] bg-black" loading="lazy" width="100%" height="100%" src={'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/rottenvillebustsculpture_pfp_1651725911955.gif'} alt={'Bust Box'} />
                                    </Suspense>
                                </div>
                                <div className="relative w-full grid lg:w-8/12">
                                    <div>
                                        <span className="flex">
                                            <h2 className="text-titles text-3xl md:text-4xl mr-3">bust sculptures</h2>
                                            <h2 className="text-titles text-3xl md:text-4xl text-[#F64653]">sold out</h2>
                                            <div className='ml-4 mt-0 mb-2 border border-[#F64653] rounded-xl p-2 pl-4 pr-4'><a target={'_blank'} href="https://magiceden.io/marketplace/rotten_ville_sculptures"> <MagicEdenLogo /> </a></div>
                                        </span>
                                        <p className='text-[.8rem]'>Rotten Ville Bust Sculptures the 3D Object &amp; FREE MINT Collection with staking and token utility rewards.</p>
                                    </div>
                                    <div>
                                        <p className="mt-6">
                                            <h1 className="font-bold mb-1">Utility</h1>
                                            <div className='flex flex-wrap'>{
                                                Object.keys(utilities.busts).map(function (key: any) {
                                                    return <div className='mr-1 mb-1'>
                                                        <span className='border border-[#F64653] rounded-md p-1 text-[.7rem]'> {utilities.alpha[key]}</span>
                                                    </div>
                                                })
                                            }</div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:max-w-[1360px] mt-10 grid gap-2 lg:gap-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                                {
                                    Object.keys(_bustsEstructureCollection.data).map(function (key: any) {
                                        let data: { [index: string]: any } = _bustsEstructureCollection.data;
                                        return <div className="relative flex m-1">
                                            <span className="absolute bottom-0 p-5 pb-4 text-[.7rem] text-white">{data[key].type_bust}</span>
                                            <span className="absolute right-0 p-5 pt-4 text-[.7rem] text-white">Supply #{data[key].supply}</span>
                                            <LazyLoadImage onClick={() => { modalBustDeploy(data[key]) }} className="rounded-xl hover:cursor-pointer transition-all ease-in-out delay-150" effect="opacity" loading="lazy" width="100%" height="100%" src={data[key].image} alt={`Busts #${data.type_bust}`} placeholderSrc={NoImage} />
                                        </div>
                                    })
                                }
                            </div>

                        </div>
                }
            </div>
        },
        {
            label: "Honoraries",
            value: "honorary",
            desc: <div>
                {
                    (_honorificMintedNFTs.data["EE3N3Pd2oeDhcRPUknEden8x3rL5FbCy2iZr2PixEbu"].data.name === "Not Data Found")
                        ? <div className='flex w-full place-content-center text-center'> <div className="mr-2 mt-[5.25px] w-3 h-3 border-b-2 border-gray-900 rounded-full animate-spin"></div> Loading, please wait...</div>
                        : <div className="mr-2 mt-7 ml-2 lg:mr-9 lg:ml-9 grid place-items-center text-body text-[#000000]">

                            {_modal_active_honorific === true ? <div className='z-30'><ModalHonorific toggleModal={_modal_active_honorific} setToggleModal={_set_modal_active_honorific} cardProps={_card_props_honorific} /></div> : <div></div>}

                            <div className="relative lg:max-w-[1080px] w-full grid lg:flex place-items-start pl-9 pr-9">
                                <div className="relative invisible hidden lg:block lg:visible w-full lg:w-3/12 mr-[3rem] mb-4">
                                    <Suspense fallback={<div className="w-[100%] h-[100%] bg-[#f4f5f6]"> </div>}>
                                        <LazyLoadImage className="lg:rounded-full lg:object-contain lg:h-auto object-cover h-[17rem] bg-black" loading="lazy" width="100%" height="100%" src={'https://r5k4ufy2jxhpo73httbxefxokpcsas6yd4uuyhhzp3tgn5msywca.arweave.net/j1XKFxpNzvd_Z5zDchbuU8UgS9gfKUwc-X7mZvWSxYQ?ext=png'} alt={'Rotten Honorific'} />
                                    </Suspense>
                                </div>
                                <div className="relative w-full grid lg:w-8/12">
                                    <div>
                                        <span className="flex">
                                            <h2 className="text-titles text-3xl md:text-4xl mr-3">honorific</h2>
                                            <h2 className="text-titles text-3xl md:text-4xl text-[#F64653]">exclusive</h2>
                                            <div className='ml-4 mt-0 mb-2 border border-[#F64653] rounded-xl p-2 pl-4 pr-4'><a target={'_blank'} href="https://magiceden.io/creators/rotten_ville"> <MagicEdenLogo /> </a></div>
                                        </span>
                                        <p className='text-[.8rem]'>The Honorific Collection of the Rotten Ville project. Let's build the RottenVerse together!</p>
                                    </div>
                                    <div>
                                        <p className="mt-6">
                                            <h1 className="font-bold mb-1">Utility</h1>
                                            <div className='flex flex-wrap'>{
                                                Object.keys(utilities.honorific).map(function (key: any) {
                                                    return <div className='mr-1 mb-1'>
                                                        <span className='border border-[#F64653] rounded-md p-1 text-[.7rem]'> {utilities.honorific[key]}</span>
                                                    </div>
                                                })
                                            }</div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:max-w-[1360px] mt-10 grid gap-2 lg:gap-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                                {
                                    Object.keys(_honorificMintedNFTs.data).map(function (key: any) {
                                        let data: { [index: string]: any } = _honorificMintedNFTs.data;
                                        data[key].data.name = data[key].data.name.replace('RV:', '');
                                        return <div className="relative flex m-1">
                                            <span className="absolute bottom-0 p-5 pl-7 pb-6 text-[.7rem] text-white">{data[key].data.name}</span>                                            
                                            <LazyLoadImage onClick={() => { modalHonorificDeploy(data[key]) }} className="rounded-xl hover:cursor-pointer transition-all ease-in-out delay-150" effect="opacity" loading="lazy" width="100%" height="100%" src={data[key].data.image} alt={`Busts #${data[key].data.name}`} placeholderSrc={NoImage} />
                                        </div>
                                    })
                                }
                            </div>

                        </div>
                }
            </div>
        }
    ]
    return (
        <div className='relative'>
            <div className='lg:p-6'>
                <Tabs value="alpha">
                    <TabsHeader className='grid grid-flow-col-dense place-content-center h-[60px] hover:cursor-pointer'>
                        {data.map(({ label, value }) => (
                            <Tab className='style-li tab-text font-bold md:w-[125px] text-[12px] md:text-[12px] h-[40px] mr-4 rounded-md mt-[-4px] md:h-[35px] hover:bg-[#f4f5f6]' key={value} value={value}>
                                {label}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody className='rounded-xl'>
                        {data.map(({ value, desc }) => (
                            <TabPanel className='p-0 pt-5' key={value} value={value}>
                                {desc}
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>
        </div>
    )
}

export default Collections
