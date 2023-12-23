import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import AppCard from '../../../components/appcard/AppCard';
import css from "./css.module.css"
register();
const PopularApps = () => {
    const arr = [...new Array(12).keys()]
    const part1 = arr.slice(0, 6);
    const part2 = arr.slice(6, 12)
    const trendingRef = useRef(null);

    useEffect(() => {
        const swiperEl = trendingRef.current;
        // swiper parameters
        const swiperParams = {
          navigation:true,
            slidesPerView: 1,
            pagination: {
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: true,

            injectStyles: [
                `     
              .swiper-button-next,
              .swiper-button-prev {
                opacity:0;
                background-position: center;
                background-size: 0;
                background-repeat: no-repeat;
                padding: 0;
                border-radius: 0px;
                background-color:gray;
                display:none;
              }
    
              .swiper-button-prev {
                background-image: url("/");
              }
    
              .swiper-button-next {
                background-image: url("/");
              }
              
              .swiper-button-next::after,
              .swiper-button-prev::after {
                content: "";
              }
    
              .swiper-pagination-bullet{
                width: 20px;
                height: 8px;
                background-color: black;
                border-radius:5px;
                transition:.5s;
              }
              .swiper-pagination-bullet-active{
                width: 30px;
                height: 10px;
              }
              .swiper-button-next > *{
                display:none;
              }
              .swiper-button-prev > *{
                display:none;
              }
          `,
            ],
            on: {
                init() {

                },
            },
        };
        // now we need to assign all parameters to Swiper element
        Object.assign(swiperEl, swiperParams);
        // and now initialize it
        swiperEl.initialize();
    }, []);
    return (

        <>
            <h2 className='text-xl font-semibold px-3 mt-5'>Popular Apps</h2>
            <swiper-container
                init="false" ref={trendingRef}
            >
                <swiper-slide>
                    <div className={css.grid}>
                        {
                            part1.map(ele => <AppCard key={ele}></AppCard>)
                        }
                    </div>

                </swiper-slide>
                <swiper-slide>
                    <div className={css.grid}>
                        {
                            part2.map(ele => <AppCard key={ele}></AppCard>)
                        }
                    </div>

                </swiper-slide>



            </swiper-container>

        </>
    );
};

export default PopularApps;