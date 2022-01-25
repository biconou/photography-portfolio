import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-playfair', ...additionalClass].join(' ')}>
        <Header />
        {children}
        <Footer />
    </main>
);

export default Layout;
