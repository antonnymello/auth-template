import Image from 'next/image';
import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Input,
  Text,
} from '@chakra-ui/react';
import type { NextPage } from 'next';

interface TextHighlightProps {
  children: React.ReactNode;
  onClick: () => void;
}

const TextHighlight = ({ children, onClick }: TextHighlightProps) => {
  return (
    <chakra.span
      fontWeight='bold'
      textDecoration='underline'
      cursor='pointer'
      onClick={onClick}
    >
      {children}
    </chakra.span>
  );
};

const Home: NextPage = () => {
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
            Welcome back
          </Text>

          <Text mt='1rem'>E-mail:</Text>
          <Input
            borderColor='gray.500'
            focusBorderColor='gray.600'
            placeholder='Type you e-mail here'
            variant='flushed'
          />

          <Text mt='1rem'>Password:</Text>
          <Input
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
            Sign in
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
            Login with Google account
          </Button>

          <Text mt='1rem'>
            Don&apos;t have an account?{' '}
            <TextHighlight onClick={console.log}>Sign up</TextHighlight>
          </Text>
        </Container>
      </Box>
    </Flex>
  );
};

export default Home;
