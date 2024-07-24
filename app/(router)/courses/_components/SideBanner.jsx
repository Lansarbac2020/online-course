"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function SideBanner() {
    const [sideBanners, setSideBannerList] = useState();

    useEffect(() => {
        getSideBanners();
    }, []);

    const getSideBanners = () => {
        GlobalApi.getSideBanner().then(resp => {
          setSideBannerList(resp.sideBanners);
        })
    }

    return (
        <div className='bg-[#11001f]'>
            {sideBanners && sideBanners.length > 0 ? (
                sideBanners.map((item, index) => (
                    <div key={index}>
                        <Image src={item.banner.url} alt='banner' width={500} height={300} 
                        onClick={()=>window.open(item?.url)}
                        className='rounded-lg cursor-pointer'/>
                    </div>
                ))
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default SideBanner;
