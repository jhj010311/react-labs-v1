import { useEffect } from "react";

export default function MountLog() {
    useEffect(() => {
        console.log("Mount!!");
    }, []);

    return <div>Mount Log</div>;
}
