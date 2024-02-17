import { Container,Flex,Box } from '@chakra-ui/react';
import './App.css';
import Main from './components/main';

function App() {
  return (
    <Container bg={'#fBfafd'} maxW={'Container.3xl'} height={'100vh'} p={'0'}>
     <Flex height={'full'}>
       <Box>
        <Main/>
       </Box>
     </Flex>
    </Container>
  );
}

export default App;
