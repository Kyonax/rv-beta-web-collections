import React, { Suspense, lazy, useState, useEffect } from 'react'; import './Collections.css'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import MagicEdenLogo from '../../assets/icons/MagicEden'; import axios from 'axios';
import NoImage from '../../assets/No_Img.jpg'

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

    const alphaFunction = async () => {
        try {
            let data =  await axios.get("https://ouous0ghgk.execute-api.us-east-1.amazonaws.com/collection/alpha/minted_nfts")
            .then(response => {
                if (response.data.length === 0){
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

    useEffect(() => {
        const interval = setInterval(() => {
            alphaFunction();
        }, 3000);

        return () => clearInterval(interval);
    }, [])

    const utilities = {
        "alpha": ["DAO", "Staking", "50% Royalties", "Whitelist Beta", "PFP", "Token", "Airdrop", "Transmutation"]
    }
    const data = [
        {
            label: "Alpha Rottens",
            value: "alpha",
            desc: <div className="p-10 mr-9 ml-9 grid place-items-center text-body text-[#000000]">
                <div className="relative w-full flex place-items-start pl-9 pr-9">
                    <div className="relative w-3/12 mr-[3rem]">
                        <Suspense fallback={<div className="w-[100%] h-[100%] bg-[#f4f5f6]"> </div>}>
                            <LazyLoadImage className="rounded-full" loading="lazy" width="100%" height="100%" src={'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://dl.airtable.com/.attachmentThumbnails/e43f818db5155e40d2930159c2c6a991/8ce101e5'} alt={'Alpha Rotten #1'} />
                        </Suspense>
                    </div>
                    <div className="relative w-8/12">
                        <span className="flex">
                            <h2 className="text-titles text-4xl mr-3">Alpha rotten</h2>
                            <h2 className="text-titles text-4xl text-[#F64653]">sold out</h2>
                            <div className='ml-4 mt-0 mb-2 border border-[#F64653] rounded-xl p-2 pl-4 pr-4'><a target={'_blank'} href="https://magiceden.io/marketplace/rotten_ville"> <MagicEdenLogo /> </a></div>
                        </span>
                        <p>Is a collection of 333 unique Rotten NFTs generated in high quality 3d. We are rotten but still good guys !!!</p>
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
                <div className="w-full mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                        {
                            Object.keys(_alphaMintedNFTs.data).map(function (key: any) {
                                let data: {[index: string]: any} = _alphaMintedNFTs.data;
                                data[key].data.name = data[key].data.name.replace('Alpha Rotten', '');
                                return <div className="relative flex m-1">
                                    <span className="absolute p-4 pt-3 text-[.7rem] text-white">{data[key].data.name}</span>
                                    <span className="absolute right-0 p-4 pt-3 text-[.7rem] text-white">Rank #{data[key].ranking_nft}</span>
                                    <LazyLoadImage className="rounded-xl hover:cursor-pointer transition-all ease-in-out delay-150" effect="opacity" loading="lazy" width="100%" height="100%" src={data[key].data.image} alt={'Alpha Rotten #1'} placeholderSrc={NoImage}/>
                                </div>
                            })
                        }
                </div>
            </div>
        },
        {
            label: "Bust Sculptures",
            value: "busts",
            desc: <div className="">Busts Sculptures</div>
        },
        {
            label: "Honoraries",
            value: "honorary",
            desc: <div className="">Honorary Collection</div>
        },
        {
            label: "Beta Rottens",
            value: "beta",
            desc: <div className="">Beta</div>
        }
    ]
    return (
        <div className='relative'>
            <div className='md:p-6'>
                <Tabs value="alpha">
                    <TabsHeader className='grid grid-flow-col-dense  place-content-center h-[60px] hover:cursor-pointer'>
                        {data.map(({ label, value }) => (
                            <Tab className='style-li tab-text font-bold md:w-[125px] text-[12px] md:text-[12px] h-[40px] mr-4 rounded-md mt-[-4px] md:h-[35px]  hover:bg-[#f4f5f6]' key={value} value={value}>
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
