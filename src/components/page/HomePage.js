import { Avatar, Box, Card, Container, DataList, Flex, Grid, ScrollArea, Separator, Text, ThickDividerHorizontalIcon } from '@radix-ui/themes'
import React from 'react'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import SkillsAndExperience from './SkillsAndExperience';
import ExperiencePage from './ExperiencePage';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Link2 } from 'lucide-react';
export const HomePage = () => {
    return (
        <Grid columns={{ md: "2", sm: "1", lg: "2" }}
            gap={{ md: "1", sm: "0", lg: "2" }}
            width={{ md: "auto", sm: "100%" }}>
            <Box>
                <Container ml={{ lg: "5" }} mr={{ lg: "5" }}>
                    <Grid columns="1" rows="2">
                        <Card mt={{ lg: "2", md: "1", sm: "1" }} mb={{ lg: "2", md: "1", sm: "1", xl: "2", xs: "1" }}
                            className='h-auto'>
                            <Flex>
                                <Avatar
                                    size="8"
                                    src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                                    radius="full"
                                    fallback="logo"
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
                            <Separator style={{ width: "auto" }} mb="5" />
                            <div className='m-auto'>
                                <DataList.Root className='w-full'>
                                    <DataList.Item align="center" style={{ marginLeft: 10, }}>
                                        <DataList.Label>
                                            <PhoneIphoneIcon style={{ marginRight: "10" }} />
                                            <a href='tel:251924193077' style={{textDecoration:"none", paddingRight:10}}>+251924193077 </a>  /
                                            <a href='tel: +251704609775' style={{textDecoration:"none",paddingLeft:10}}> +251704609775</a>
                                        </DataList.Label>
                                    </DataList.Item>
                                    <DataList.Item align="center" style={{ marginLeft: 10 }}>
                                        <DataList.Label>
                                            <EmailIcon style={{ marginRight: "10" }} />
                                            <a href='inbox@ermiyas.dev' style={{textDecoration:"none"}}>inbox@ermiyas.dev</a>
                                        </DataList.Label>
                                    </DataList.Item>
                                    <DataList.Item align="center" style={{ marginLeft: 10 }}>
                                        <DataList.Label>
                                          <Link2 style={{ marginRight: "10" }} className='align-middle'></Link2>
                                          <a href='/resume' className='text-pretty' style={{textDecoration:"none"}}>Download CV</a>
                                        </DataList.Label>
                                    </DataList.Item>
                                </DataList.Root>
                            </div>
                            
                        </Card>
                        <Card className='about'>
                            <Flex m='3'>
                                <Text as='div' weight='bold' size={{ md: "6", sm: '5', xs: "4" }}>About Me</Text>
                            </Flex>
                            <Flex m='3'>
                                <Text as='p' weight='light' size={{ sm: "1", md: "3" }}>
                                    Am a developer who loves development and is passionate about creating impactful software. Skilled in building enterprise-level applications and delivering full-stack solutions, I thrive on solving complex problems with creativity and precision. With a deep commitment to hard work, I approach every project as an opportunity to craft something innovative and meaningful.
                                </Text>
                            </Flex>
                            <Separator style={{ width: "auto" }} mt={{ lg: "4", sm: "4", md: "5", xs: "1", xl: "1" }}
                                mb={{ lg: "4", sm: "4", md: "5", xs: "5", xl: "4" }} />

                            <Flex m={{ md: "1", lg: "2", sm: "2" }}>
                                <Text as='div' weight='bold' size={{ md: "5" }}>Language</Text>
                            </Flex>
                            <Flex m={{ md: "1", lg: "2", sm: "2" }}>
                                <DataList.Root>
                                    <DataList.Item align="center" style={{ marginLeft: 10 }}>
                                        <DataList.Label>
                                            Amharic: Native
                                        </DataList.Label>
                                    </DataList.Item>
                                    <DataList.Item align="center" style={{ marginLeft: 10 }}>
                                        <DataList.Label>
                                            English: Proficient
                                        </DataList.Label>
                                    </DataList.Item> <DataList.Item align="center" style={{ marginLeft: 10 }}>
                                        <DataList.Label>
                                            Oromifaa: Conversational
                                        </DataList.Label>
                                    </DataList.Item>
                                </DataList.Root>
                            </Flex>
                        </Card>
                    </Grid>
                </Container>
            </Box>
            <Card mt={{ lg: "2", md: "1", sm: "1", xl:"1" , xs:"1"}} className='cardskillandexperience'>
                <ScrollArea scrollbars='vertical' className='h-10 bg-red-500'>
                    <SkillsAndExperience />
                </ScrollArea>
            </Card>
        </Grid>
    )
}
