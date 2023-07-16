import { PlaceHolder } from '.';
import { styled } from 'styled-components';

import useInput from '@/hook/useInput';

const Search = () => {
  const { value, onChange, reset } = useInput('');

  return (
    <Box>
      <input type="text" value={value} onChange={onChange} />
      {value && <button onClick={reset}></button>}
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
