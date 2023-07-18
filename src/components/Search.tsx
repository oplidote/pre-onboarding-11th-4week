import { PlaceHolder, Recommend, ResetButton, SearchButton } from '.';
import { useCallback, useState } from 'react';
import { styled } from 'styled-components';

import useFetch from '@/hook/useFetch';
import useInput from '@/hook/useInput';
import useKeydown from '@/utils/useKeydown';

const Search = () => {
  const { value, onChange, reset } = useInput('');
  const data = useFetch(value);
  const [isAutoSearch, setIsAutoSearch] = useState<boolean>(false);
  const { focus, keydownHandler } = useKeydown(data.length, value);
  const onAutoSearch = () => {
    setIsAutoSearch(true);
  };

  const offAutoSearch = () => {
    setIsAutoSearch(false);
  };

  const changeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event);
    },
    [onChange],
  );
  return (
    <Box>
      <input
        onBlur={offAutoSearch}
        onFocus={onAutoSearch}
        type="text"
        value={value}
        onChange={changeHandler}
        onKeyDown={keydownHandler}
      />
      {value && <ResetButton reset={reset} />}
      {!value && <PlaceHolder />}
      {isAutoSearch && <Recommend value={value} focus={focus} data={data} />}
      <SearchButton />
    </Box>
  );
};

const Box = styled.div`
  position: relative;
  display: flex;
  width: 490px;
  align-items: center;
  margin: 40px 0 500px;
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
