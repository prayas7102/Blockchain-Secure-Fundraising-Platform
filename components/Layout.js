import React from 'react';
import Header from './Header';
import { Container } from 'semantic-ui-react';

function Layout() {
    return (
        <Container>
            <Header />
            {Layout.children}
        </Container>
    )
}

export default Layout;