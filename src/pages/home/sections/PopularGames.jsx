import { useEffect, useState } from 'react';
import AppCardSmall from '../../../components/appcard/AppCardSmall';
const PopularGames = () => {
    const arr = [...new Array(18).keys()]
    let scrollingDiv;

    let isMouseDown = false;
    let startX;
    let transformed = 0;
    let width;
    const checkPostion = () => {
        let scrollWidth = scrollingDiv.scrollWidth - scrollingDiv.clientWidth;
        let noMoreOnRight = (scrollingDiv.scrollLeft - scrollWidth) < 100 && (scrollingDiv.scrollLeft - scrollWidth) > 0;
        document.getElementById("leftGames").style.display = (scrollingDiv.scrollLeft == 0 ? "none" : "block");
        document.getElementById("rightGames").style.display = (noMoreOnRight ? "none" : "block");
    }
    const mouseDown = (e) => {
        scrollingDiv.style.scrollBehavior = "auto";
        isMouseDown = true;
        startX = e.pageX || e.touches[0].pageX;
        transformed = scrollingDiv.scrollLeft;
        width = scrollingDiv.clientWidth;
    };
    const mouseUp = (e) => {
        isMouseDown = false;
        transformed = scrollingDiv.scrollLeft;
    };

    const mouseMove = (e) => {
        if (!isMouseDown) return;
        // e.preventDefault();
        const pointerDiff = startX - (e.pageX || e.touches[0].pageX);
        scrollingDiv.scrollLeft = transformed + pointerDiff;
        checkPostion();
    };

    const mouseLeave = () => {
        isMouseDown = false;
    };
    const scrollLeft = () => {
        scrollingDiv.style.scrollBehavior = "smooth";
        scrollingDiv.scrollLeft = scrollingDiv.scrollLeft - scrollingDiv.clientWidth;
        checkPostion()
    }
    const scrollRight = () => {
        scrollingDiv.style.scrollBehavior = "smooth";
        scrollingDiv.scrollLeft = scrollingDiv.scrollLeft + scrollingDiv.clientWidth;
        checkPostion();
    }
    useEffect(() => {
        scrollingDiv = document.getElementById("scrollingDivGame")
    }, [])
    return (
        <div className='relative z-10 mt-10'>
            <h2 className='text-xl font-semibold px-3'>Popular Games</h2>
            <div className='relative flex items-center'>
                <i id='leftGames' onClick={scrollLeft} className='absolute left-0 bg-gray-200 px-3 hidden pt-1 pb-2 text-3xl font-extrabold rounded text-center cursor-pointer select-none'>←</i>
                <div className='grid  focus:cursor-grab select-none gap-2 overflow-scroll cursor-pointer' id='scrollingDivGame' style={{ gridAutoFlow: "column" }} onTouchStart={e => mouseDown(e)} onMouseDown={e => mouseDown(e)} onTouchMove={e => mouseMove(e)} onMouseMove={e => mouseMove(e)} onMouseUp={e => mouseUp(e)} onTouchEnd={e => mouseUp(e)} onMouseLeave={mouseLeave} >
                    {
                        arr.map(ele => <AppCardSmall key={ele}></AppCardSmall>)
                    }

                </div>
                <i id='rightGames' onClick={scrollRight} className='absolute right-0 bg-gray-200 px-3 pt-1 pb-2 text-3xl font-extrabold rounded text-center cursor-pointer select-none'>→</i>
            </div>



        </div >
    );
};

export default PopularGames;