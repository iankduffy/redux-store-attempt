import React, { useEffect, useState } from "react";

// export interface ConditionallyRenderProps {
//     client?: boolean;
//     server?: boolean;
// }

const ConditionallyRender = (props) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => setIsMounted(true), []);

    if(!isMounted && props.client) {
        return null;
    }

    if(isMounted && props.server) {
        return null;
    }

    return props.children;
};

export default ConditionallyRender;