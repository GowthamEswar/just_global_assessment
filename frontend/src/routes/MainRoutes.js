import { Route, Routes } from 'react-router-dom';
import MinimalLayout from '../layout/MinimalLayout';
import Login from '../components/Login';
import Home from '../components/Home';
import MianLayout from '../layout/MainLayout';


function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MinimalLayout />}>
                <Route index path="/login" element={<Login />} />
            </Route>

            <Route path="/" element={<MianLayout />}>
                <Route index path="/" element={<Home />} />
                {/* <Route path="/admin" element={<Admin />} /> */}
            </Route>

            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>

    );
}

export default MainRoutes;
