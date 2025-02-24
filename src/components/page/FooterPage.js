import { Copyright, CopyrightOutlined, Email, Facebook, GitHub, LinkedIn, Telegram } from '@mui/icons-material';
import { Box, Container, DataList, Text } from '@radix-ui/themes'
import moment from 'moment';
import React, { useState } from 'react'

export const FooterPage = () => {
    const [dateNow, setDate] = useState(moment().format('YYYY'));
    return (
        <Box m={{ md: "3", lg: "3", sm: "3", xs: "3", xl: "3" }} className='w-full'>
            <DataList.Root className='footer-menu border-spacing-8'>
                <DataList.Label>
                    <Text className='text-center' >{dateNow} G.c
                        {/* <Copyright /> */}
                    </Text></DataList.Label>
            </DataList.Root>
            {/* <DataList.Root className='footer-icon float-end'>
                <DataList.Item>
                    <DataList.Label width="100%">
                        <Text>
                            <LinkedIn />
                            <Telegram />
                            <Email />
                            <GitHub />
                        </Text>
                    </DataList.Label>
                </DataList.Item>
            </DataList.Root> */}
        </Box>
    )
}
