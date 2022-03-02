
import {Flex } from '@chakra-ui/react'
 export const Layout = ({children}) => {
  return (
    <Flex
    justifyContent={'center'}
    alignItems={'center'}
    width={'100vw'}
    height={'100vh'}
    maxWidth={'100vw'}
    maxHeight={'100vh'}
    position={'relative'}
    bg={'blue.400'}
    >
        {children}
    </Flex>
  )
}


export default Layout