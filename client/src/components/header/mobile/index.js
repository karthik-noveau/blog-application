import { Menu, Collapse } from 'antd';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

import Logo from '../images/Logo.png'

import './style.css';
import { Link, useNavigate } from 'react-router-dom';

const { Panel } = Collapse;

export const SUIMobileNavbar = ({ className }) => {

    const [open, setOpen] = useState(false);
    const toggleCollapse = () => {
        setOpen(!open);
    };
    const navigate = useNavigate();

    return (
        <div className={className}>
            <div className='SUIMobileNavbar'>
                <div className='SUIMobileNavbarContainer'>
                    <div className='SUIMobileNavbarContainerBox'>
                        <div className='SUIMobileNavbarLogo'>
                        <img src={Logo} alt={Logo} onClick={()=>{navigate("/")}} />
                        </div>
                        <div className='SUIMobileNavbarHamburgerButton'>
                            <AiOutlineMenu onClick={toggleCollapse} className='HamburgerIcon' />
                        </div>
                    </div>
                </div>

                <Collapse
                    bordered={false}
                    activeKey={open ? '1' : ''}
                    onChange={toggleCollapse}
                    expandIcon={() => null} // Removes the expand/collapse arrow icon
                >
                    <Panel key="1" >
                        <div className='SUIMobileNavbarDrawer'>
                            <div className='SUIMobileNavbarDrawerContainer'>
                                <Menu
                                    style={{ width: 256 }}
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    mode="inline"
                                    className='SUIMobileNavbarDrawerContainerBox'
                                >
                                    <Menu.Item key="Home" className="custom-item" onClick={() => { setOpen(!open) }}>
                                        <Link to="home">Home</Link>
                                    </Menu.Item>
                                    <Menu.Item key="About" className="custom-item" onClick={() => { setOpen(!open) }}>
                                        <Link to="about"> About</Link>
                                    </Menu.Item>
                                    <Menu.SubMenu key="Advantage" title="Advantage" className="custom-submenu">
                                        <Menu.Item key="Option1" className="custom-item" onClick={() => { setOpen(!open) }}> <Link to="option1">Option1</Link></Menu.Item>
                                        <Menu.Item key="Option2" className="custom-item" onClick={() => { setOpen(!open) }}> <Link to="option2">Option2</Link></Menu.Item>
                                    </Menu.SubMenu>
                                    <Menu.SubMenu key="Features" title="Features" className="custom-submenu">
                                        <Menu.Item key="Option3" className="custom-item" onClick={() => { setOpen(!open) }}> <Link to="option3">Option3</Link></Menu.Item>
                                        <Menu.Item key="Option4" className="custom-item" onClick={() => { setOpen(!open) }}> <Link to="option4">Option4</Link></Menu.Item>
                                    </Menu.SubMenu>
                                    <Menu.Item key="Service" className="custom-item" onClick={() => { setOpen(!open) }}>
                                        <Link to="service"> Service</Link>
                                    </Menu.Item>
                                    <Menu.Item key="Payment" className="custom-item" onClick={() => { setOpen(!open) }}>
                                        <Link to="payment">Payment</Link>
                                    </Menu.Item>
                                    <Menu.Item key="Cart" className="custom-item" onClick={() => { setOpen(!open) }}>
                                        <Link to="cart"> Cart</Link>
                                    </Menu.Item>
                                    <Menu.Divider className="custom-divider" />
                                    <Menu.Item key="Blog" className="custom-item" onClick={() => { setOpen(!open) }}>
                                        <Link to="blog">Blog</Link>
                                    </Menu.Item>
                                    <Menu.Item key="Contact" className="custom-item" onClick={() => { setOpen(!open) }}>
                                        <Link to="contact"> Contact</Link>
                                    </Menu.Item>
                                </Menu>
                            </div>
                        </div>
                    </Panel>
                </Collapse>

            </div>
        </div>
    );
};

