import * as React from 'react';
import {
  Button,
  ChakraProvider,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  LinkProps,
  Stack,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import logo from './logo.svg';

const MotionImage = motion(Image);

function HomeLink(props: React.PropsWithChildren<LinkProps>) {
  return <Link fontSize="4xl" color="blue.300" {...props} />
}

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <ChakraProvider>
      <Flex direction="column" bg="#282c34" minH="100vh">
        <Container maxW="6xl" flex="1" centerContent alignItems="center" justifyContent="center">
          <Stack direction="column" spacing="20" align="center">
            <MotionImage
              animate={{ rotate: 360 }}
              transition={{ ease: 'linear', duration: 15, repeat: Infinity }}
              src={logo}
              h="40vmin"
              pointerEvents="none"
            />
            <Heading as="h1" fontSize="4xl" color="white">
              Hello Vite + React + Chakra!
            </Heading>
            <Button colorScheme="blue" size="lg" onClick={() => setCount(oldCount => oldCount + 1)}>Count is: {count}</Button>
            <Stack direction="row" spacing="5" divider={<Text fontSize="4xl" px="5" color="white">|</Text>}>
              <HomeLink href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                React Docs
              </HomeLink>
              <HomeLink href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
                Vite Docs
              </HomeLink>
              <HomeLink href="https://chakra-ui.com/" target="_blank" rel="noopener noreferrer">
                Chakra UI Docs
              </HomeLink>
            </Stack>
          </Stack>
        </Container>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
