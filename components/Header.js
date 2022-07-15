import React from 'react'
import { Menu } from 'semantic-ui-react';
import Link from 'next/link';

function Header() {
    return (
        <div>
            <Menu style={{ marginTop: '10px' }}>
                <Link href={"/"}>
                    <a className='item'>CrowdCoin</a>
                </Link>
                <Menu.Menu position='right'>
                    <Link href={"/"}>
                        <a className='item'>Campaigns</a>
                    </Link>
                    <Link href={"/campaign/new"}>
                        <a className='item'>+</a>
                    </Link>
                </Menu.Menu>
            </Menu>
        </div>
    )
}

export default Header;