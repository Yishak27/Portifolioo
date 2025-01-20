import { Avatar, Box, Card, Container, DataList, Flex, Grid, Separator, Text, ThickDividerHorizontalIcon } from '@radix-ui/themes'
import React from 'react'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
export const HomePage = () => {
    return (
        <Grid columns={{ md: "2", sm: "1", lg: "2" }} gap={{ md: "1", sm: "0", lg: "2" }}
            width={{ md: "auto", sm: "100%" }}>
            <Box>
                <Container>
                    <Grid columns="1" rows="2">
                        <Box>
                            <Card m='2'>
                                <Flex className='profile-avatar'>
                                    <Avatar
                                        size="8"
                                        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                                        radius="full"
                                        fallback="logo"
                                        className='avatar'
                                    />
                                </Flex>
                                <DataList.Root className='profile-list'>
                                    <DataList.Item>
                                        <Text as="div" size="5" weight="bold">
                                            Ermiyas Damte Haile
                                        </Text></DataList.Item>
                                    <DataList.Item>
                                        <Text weight="light">
                                            Developer | Software Engineer
                                        </Text>
                                    </DataList.Item>
                                </DataList.Root>
                                <Separator style={{ width: "auto" }} mb="4" />
                                <DataList.Root>
                                    <DataList.Item align="center" style={{ marginLeft: 10 }}>
                                        <DataList.Label>
                                            <PhoneIphoneIcon style={{ marginRight: "10" }} />
                                            +251924193077 / +251704609775
                                        </DataList.Label>
                                    </DataList.Item>
                                    <DataList.Item align="center" style={{ marginLeft: 10 }}>
                                        <DataList.Label>
                                            <EmailIcon style={{ marginRight: "10" }} />
                                            Yisumaid3@gmail.com
                                        </DataList.Label>
                                    </DataList.Item>
                                </DataList.Root>
                            </Card>
                        </Box>
                        <Box style={{ marginTop: 3 }}>
                            <Card>
                                About
                            </Card>
                        </Box>
                    </Grid>
                </Container>
            </Box>
            <Box>
                <Container>
                    <Card>
                        <Flex>Skill</Flex>
                    </Card>
                </Container>
            </Box>
        </Grid>
    )
}
