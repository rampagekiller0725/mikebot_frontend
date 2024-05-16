import React from 'react'

const MarketTab = ({user, setUser}) => {
    const data = [
        {
            key: "fan_tokens",
            title: "Fan tokens ",
            content: 'Profit per hours',
            perhourValue: "965",
            image: "/coinmarketcap.svg",
            lvl: "lvl ",
            image2: "/coin1.svg",
            value: "10K"
        },
        {
            key: "staking",
            title: "Staking ",
            content: 'Profit per hours',
            perhourValue: "600",
            image: "/coinmarketcap.svg",
            lvl: "lvl ",
            image2: "/coin1.svg",
            value: "10K"
        },
        {
            key: "btc_pairs",
            title: "BTC pairs",
            content: 'Profit per hours',
            perhourValue: "40",
            image: "/coinmarketcap.svg",
            lvl: "lvl ",
            image2: "/coin1.svg",
            value: "200"
        },
        {
            key: "eth_pairs",
            title: "ETH pairs ",
            content: 'Profit per hours',
            perhourValue: "40",
            image: "/coinmarketcap.svg",
            lvl: "lvl ",
            image2: "/coin1.svg",
            value: "300"
        },
        {
            key: "top_10_cmc_pairs",
            title: "Top 10 CMC Pairs ",
            content: 'Profit per hours',
            perhourValue: "80",
            image: "/coinmarketcap.svg",
            lvl: "lvl ",
            image2: "/coin1.svg",
            value: "1K"
        },
        {
            key: "gamefi_tokens",
            title: "GameFi tokens ",
            content: 'Profit per hours',
            perhourValue: "70",
            image: "/coinmarketcap.svg",
            lvl: "lvl ",
            image2: "/coin1.svg",
            value: "10K"
        }
    ]

    const clickCard = (d) => {
        if (user.coins >= d.value) {
            let updatedUser = {
                ...user,
                coins: user.coins - d.value,
                profit_perhour: parseInt(user.profit_perhour) + parseInt(d.perhourValue),
            };
            updatedUser[d.key+'_level'] ++;
            setUser(updatedUser);
        }
    }

    return (
        <div className='grid grid-cols-2 overflow-y-auto gap-2 w-full'>
            {
                data.map((d, i) => {
                    return (
                        <div key={i} onClick={() => clickCard(d)} className='bg-[#131414] z-[5000] relative rounded-[8px] flex flex-col bg-gradient-to-r from-[] to-[#00FC87] border-t-[1px] overflow-hidden '>
                            <div className='before:absolute before:inset-y-0 before:w-[0.8px] before:h-full before:content-[""] before:bg-gradient-to-b before:from-[#00FC87] before:to-transparent before:right-0'></div>
                            <div className='before:absolute before:inset-0 before:w-[0.5px] before:h-full before:content-[""] before:bg-gradient-to-b before:from-[#00FC87] before:to-transparent'></div>
                            <div className='flex px-[20px] items-start gap-1 py-4'>
                                <img width={40} height={40} src={d.image} alt='' />
                                <div className='flex flex-col gap-1'>
                                    <p className='text-[10px] font-bold'>{d.title}</p>
                                    <p className='text-[8px]'>{d.content}</p>
                                    <div className='flex items-center gap-2'>
                                        <img width={15} height={15} src={d.image2} alt='' />
                                        <p className='text-[8px]'>+{d.perhourValue}</p>
                                    </div>
                                </div>
                            </div>
                            <img className='w-full' width={40} height={3} src={"/Line 6.png"} alt='' />
                            <div className='px-[12px] flex gap-4 items-center'>
                                <p>{d.lvl + (user[d.key+'_level'] ? user[d.key+'_level'] : 0)}</p>
                                <img width={1} height={1} src={"/Line 7.png"} alt='' />
                                <div className='flex items-center gap-2'>
                                    <img width={20} height={20} src={d.image2} alt='' />
                                    <p>{d.value}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MarketTab