import { PlaceHolder } from '.';
import { styled } from 'styled-components';

import useInput from '@/hook/useInput';

const Search = () => {
  const value = useInput('');
  return (
    <Box>
      <input type="text" {...value} />
      <PlaceHolder />
    </Box>
  );
};

const Box = styled.div`
  position: relative;
  display: flex;
  margin-top: 40px;
  border-radius: 42px;
  border: 0;
  background-color: #fff;
  input {
    background-color: transparent;
    border: 0;
    z-index: 1;
    width: 430px;
    padding: 20px 10px 20px 24px;
    border-radius: 42px;
    &:focus {
      background-color: #fff;
    }
  }
`;
export default Search;
