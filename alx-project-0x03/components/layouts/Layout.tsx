import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import { LayoutProps } from '@/interface/index';

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}

export default Layout;