import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Footer from '../pages/Shared/Footer/Footer';
import Container from '../pages/Shared/Container/Container';

const Main = () => {
    return (
        <div>
            <Container>
                <NavBar />
                <Outlet />
                <Footer />
            </Container>
        </div>
    );
};

export default Main;