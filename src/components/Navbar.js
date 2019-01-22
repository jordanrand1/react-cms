import React, { useState } from 'react';
import { Input, Menu, Checkbox } from 'semantic-ui-react'

function Navbar() {
    let [edit, setEdit] = useState(false);
    let [activeItem, setActiveItem] = useState('Home');

    function handleItemClick(name) {
        setActiveItem(name)
    }

    function editView() {
        return (
            <>
                <Menu secondary>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={() => handleItemClick('home')} />
                    <Menu.Item
                    name='messages'
                    active={activeItem === 'messages'}
                    onClick={() => handleItemClick('messages')}
                    />
                    <Menu.Item
                    name='friends'
                    active={activeItem === 'friends'}
                    onClick={() => handleItemClick('friends')}
                    />
                    <Menu.Menu position='right'>
                    <Menu.Item>
                        <Checkbox toggle label="Edit" defaultChecked={edit} onClick={() => setEdit(!edit)}></Checkbox>
                    </Menu.Item>
                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={() => handleItemClick('logout')}
                    />
                    </Menu.Menu>
                </Menu>
            </>
        )
    }

    function normalView() {
        return (
            <>
                <Menu secondary>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={() => handleItemClick('home')} />
                    <Menu.Item
                    name='messages'
                    active={activeItem === 'messages'}
                    onClick={() => handleItemClick('messages')}
                    />
                    <Menu.Item
                    name='friends'
                    active={activeItem === 'friends'}
                    onClick={() => handleItemClick('friends')}
                    />
                    <Menu.Menu position='right'>
                    <Menu.Item>
                        <Checkbox toggle label="Edit" defaultChecked={edit} onClick={() => setEdit(!edit)}></Checkbox>
                    </Menu.Item>
                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={() => handleItemClick('logout')}
                    />
                    </Menu.Menu>
                </Menu>
            </>
        )
    }

    return (
        <>
            {edit ? editView() : normalView()}
        </>
    )
}

export default Navbar;