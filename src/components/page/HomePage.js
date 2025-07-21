import React from 'react'
import { Avatar, Box, Card, Flex, Text, Button } from '@radix-ui/themes'
import { useTheme } from '../themes/ThemeContext'

export const HomePage = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Flex direction="column" align="center" justify="center" style={{ minHeight: '80vh', width: '100%' }}>
            <Card style={{ maxWidth: 400, width: '100%', padding: '2rem', textAlign: 'center', background: 'var(--color-background-2)' }}>
                <Text as="h1" size="7" weight="bold" style={{ marginBottom: '1rem' }}>
                    Ermiyas Damte Haile
                </Text>
                <Avatar
                    size="8"
                    src="/photo.jpg"
                    radius="full"
                    fallback="E"
                    style={{ margin: '0 auto 1rem auto', display: 'block' }}
                />
                <Text as="h2" size="4" weight="medium" style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>
                    Designer & Developer
                </Text>
                <Text as="p" size="3" weight="light" style={{ marginBottom: '2rem' }}>
                    I am a developer who loves building impactful software. Skilled in full-stack solutions and passionate about clean, creative, and meaningful work.
                </Text>
                <Button onClick={toggleTheme} variant="soft" style={{ width: '100%' }}>
                    Switch to {theme === 'dark' ? 'Light' : 'Dark'} Theme
                </Button>
            </Card>
        </Flex>
    )
}
