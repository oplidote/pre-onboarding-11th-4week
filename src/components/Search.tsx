import { PlaceHolder, ResetButton, SearchButton } from '.';
import { styled } from 'styled-components';

import useInput from '@/hook/useInput';

const Search = () => {
  const { value, onChange, reset } = useInput('');

  return (
    <Box>
      <input type="text" value={value} onChange={onChange} />
      {value && <ResetButton reset={reset} />}
      {!value && <PlaceHolder />}
      <SearchButton />
    </Box>
  );
};

const Box = styled.div`
  position: relative;
  display: flex;
  width: 490px;
  align-items: center;
  margin: 40px 0 100px;
  border-radius: 42px;
  border: 2px solid #fff;
  background-color: #fff;
  input {
    width: 100%;
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
