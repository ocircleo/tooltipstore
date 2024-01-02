import React, { useEffect } from 'react';

const useTitle = (title) => {

    useEffect(() => {
        document.title = "Tool | " + title;
    }, [title])
};

export default useTitle;