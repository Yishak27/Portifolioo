import { Box, Button, Container, DataList, Grid, Link, Text, Theme } from '@radix-ui/themes'
import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from '../themes/ThemeContext';
import { Link2 } from 'lucide-react';

export default function NavBar() {
    const { theme, toogleTheme } = useTheme();

    return (
        <NavigationMenu.Root className="nav-root">
            <div className="nav-container">
                <div className="nav-logo">
                    <Text as="label" size={{ lg: "6", md: "6", sm: "5" }}
                    >
                        <a href='/' className='list-none'>Ermiyas.dev</a></Text>
                </div>
                <NavigationMenu.List className="nav-list float-start">
                    <NavigationMenu.Item>
                        <NavigationMenu.Link href="/resume" className="nav-link">
                            <Text as='label' weight='light' size={{ lg: "2", md: "0" }}>Resume</Text>
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Link href="/resume" className="nav-link">
                            <Text as='label' weight='light' size={{ lg: "2", md: "0" }} >Contact</Text>
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
