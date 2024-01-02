import React, { useEffect } from 'react';

const toTop = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])
};

export default toTop;