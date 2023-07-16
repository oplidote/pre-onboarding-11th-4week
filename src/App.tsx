import { useState } from 'react';
import { styled } from 'styled-components';

import { Search, Title } from './components';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Title />
      <Search />
    </Container>
  );
}

const Container = styled.div``;
export default App;
