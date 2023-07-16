import { PlaceHolder } from '.';
import { styled } from 'styled-components';

import useInput from '@/hook/useInput';
import ResetButton from './ResetButton';

const Search = () => {
  const { value, onChange, reset } = useInput('');

  return (
    <Box>
      <input type="text" value={value} onChange={onChange} />
      {value && <ResetButton reset={reset} />}
      {!value && <PlaceHolder />}
    </Box>
  );
};

const Box = styled.div`
  position: relative;
  display: flex;
  margin: 40px 0 100px;
  border-radius: 42px;
  border: 0;
  background-color: #fff;
  input {
    width: 430px;
    background-color: transparent;
    border: 0;
    z-index: 1;
    padding: 20px 10px 20px 24px;
    border-radius: 42px;
    &:focus {
      background-color: #fff;
    }
  }
`;
export default Search;
