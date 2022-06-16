import { Box, Center, Container, Flex, Input, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Center
      justifyContent='space-between'
      h='100vh'
      w='100vw'
      overflowY='hidden'
      bgRepeat='no-repeat'
      bgSize='cover'
    >
      <Box backgroundImage='url("https://source.unsplash.com/random")' />
      <Flex>
        <Box
          backgroundColor='#121214'
          h='60vh'
          w='30vw'
          borderRadius='0.5rem'
          padding='1rem'
        >
          <Container>
            <Flex
              justifyContent='center'
              alignItems='center'
              flexDirection='column'
            >
              <Text fontSize='3xl' color='gray.100' mb='1.5rem'>
                Login to your account
              </Text>

              <Text color='gray.100' alignSelf='start' mb='0.5rem'>
                E-mail:
              </Text>
              <Input placeholder='Type you e-mail here' />

              <Text color='gray.100' alignSelf='start' mb='0.5rem'>
                Password:
              </Text>
              <Input placeholder='Type you e-mail here' />
            </Flex>
          </Container>
        </Box>
      </Flex>
    </Center>
  );
};

export default Home;
