import { PlaceHolder, Recommend, ResetButton, SearchButton } from '.';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { search } from '@/api/sick';
import useInput from '@/hook/useInput';

const Search = () => {
  const { value, onChange, reset } = useInput('');
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const focusHandler = () => {
    setIsFocus(true);
  };
  const searchKeyword = async (value: string) => {
    const res = await search(value);
    console.log(res);
  };
  useEffect(() => {
    searchKeyword(value);
  }, [value]);
  return (
    <Box>
      <input onFocus={focusHandler} type="text" value={value} onChange={onChange} />
      {value && <ResetButton reset={reset} />}
      {!value && <PlaceHolder />}
      {isFocus && <Recommend />}
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
