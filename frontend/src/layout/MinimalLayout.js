import { useOutlet } from "react-router-dom";



function MinimalLayout() {
    const outlet = useOutlet();

    return (
        <div className="minimal_right_container">{outlet}</div>
    );
}

export default MinimalLayout;
