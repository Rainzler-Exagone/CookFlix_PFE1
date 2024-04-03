import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { Avatar } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Wrap, WrapItem } from '@chakra-ui/react'

export default async function AvatarIcon() {
    // const session = await getServerSession(authOptions)
    return (
        <>
            <ChakraProvider>
                <Wrap>
                    <WrapItem>
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                    </WrapItem>
                </Wrap>
            </ChakraProvider>
        </>
    )
}