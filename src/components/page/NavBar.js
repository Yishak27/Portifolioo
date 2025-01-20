import { Box, Button, Container, DataList, Grid, Link, Theme } from '@radix-ui/themes'
import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from '../themes/ThemeContext';

export default function NavBar() {
    const { theme, toogleTheme } = useTheme();

    return (
        <NavigationMenu.Root className="nav-root">
            <div className="nav-container">
                <div className="nav-logo">
                    <a href="#">Ermiyas.dev</a>
                </div>
                <NavigationMenu.List className="nav-list">
                    <NavigationMenu.Item>
                        <NavigationMenu.Link href="/resume" className="nav-link">
                            Resume
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Link href="/contact" className="nav-link">
                            Contact
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
                <div className="nav-icon">
                    <button className="icon-button">
                        <SunIcon onClick={toogleTheme}>
                            {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
                        </SunIcon>
                    </button>
                </div>
            </div>
        </NavigationMenu.Root>
    )
}
