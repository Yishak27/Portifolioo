import { Copyright, CopyrightOutlined, Email, Facebook, GitHub, LinkedIn, Telegram } from '@mui/icons-material';
import { Box, Container, DataList, Text } from '@radix-ui/themes'
import moment from 'moment';
import React, { useState } from 'react'

export const FooterPage = () => {
    const [dateNow, setDate] = useState(moment().format('YYYY'));
    return (
        <Box m={{ md: "3", lg: "3", sm: "3" }}>
            <DataList.Root className='footer-menu'>
                <DataList.Label>
                    <Text >{dateNow} G.c
                        {/* <Copyright /> */}
                    </Text></DataList.Label>
            </DataList.Root>
            {/* <DataList.Root className='footer-icon'>
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
