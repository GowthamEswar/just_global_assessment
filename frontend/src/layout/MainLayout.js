import { useEffect } from "react";
import { useNavigate, useOutlet } from "react-router-dom";



function MianLayout() {
    const outlet = useOutlet();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(!token) navigate('/login');
    }, [])

    return (
        <div className="minimal_right_container">{outlet}</div>
    );
}

export default MianLayout;
