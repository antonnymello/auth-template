import Image from 'next/image';
import { Box, Button, Container, Flex, Input, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import TextHighlight from '../components/TextHighlight';
import { useState } from 'react';

const Home: NextPage = () => {
  const [page, setPage] = useState<'login' | 'register'>('login');

  const isLoginPage = page === 'login';

  return (
    <Flex
      justifyContent='space-between'
      h='100vh'
      w='100vw'
      overflowY='hidden'
      bgRepeat='no-repeat'
      bgSize='cover'
    >
      <Box
        w='70vw'
        backgroundImage='url("https://source.unsplash.com/random")'
        backgroundSize='cover'
        backgroundPosition='center'
      />

      <Box
        backgroundColor='gray.100'
        h='100vh'
        w='30vw'
        padding='1rem'
        display='flex'
        flexDirection='column'
        justifyContent='center'
      >
        <Container padding='2rem'>
          <Text fontSize='3xl' mb='1rem'>
            {isLoginPage ? 'Welcome back' : 'Register your account'}
          </Text>

          <Text mt='1rem'>E-mail:</Text>
          <Input
            type='email'
            borderColor='gray.500'
            focusBorderColor='gray.600'
            placeholder='Type you e-mail here'
            variant='flushed'
          />

          <Text mt='1rem'>Password:</Text>
          <Input
            type='password'
            borderColor='gray.500'
            focusBorderColor='gray.600'
            placeholder='Type you e-mail here'
            variant='flushed'
          />

          <Button
            background='gray.800'
            color='gray.100'
            _hover={{ background: 'black' }}
            w='100%'
            size='sm'
            mt='2.5rem'
          >
            {isLoginPage ? 'Sign in' : 'Sign up'}
          </Button>

          <Button
            colorScheme='gray'
            border='2px'
            borderColor='gray.800'
            w='100%'
            size='sm'
            mt='0.5rem'
          >
            <Image
              src='/google_icon.svg'
              width={18}
              height={18}
              alt="Google's Logo"
            />
            {isLoginPage
              ? 'Login with Google account'
              : 'Sign up with Google account'}
          </Button>

          <Text mt='1rem' userSelect='none'>
            {isLoginPage
              ? "Don't have an account? "
              : 'Already have an account? '}
            <TextHighlight
              onClick={() =>
                isLoginPage ? setPage('register') : setPage('login')
              }
            >
              Sign up
            </TextHighlight>
          </Text>
        </Container>
      </Box>
    </Flex>
  );
};

export default Home;
