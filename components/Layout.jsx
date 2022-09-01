/* eslint-disable @next/next/no-sync-scripts */
import Script from 'next/script'
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
      <Script src="https://maps.googleapis.com/maps/api/js?v=3&libraries=geometry,drawing,places&key=AIzaSyDz0Diu202mipJpTA9v488X_RLA4PIPT6Q"
      strategy='beforeInteractive'
      />
  
        {children}
    </Flex>
  )
}

