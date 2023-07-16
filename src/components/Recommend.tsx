import { TextItem } from '.';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { styled } from 'styled-components';

import { search } from '@/api/sick';

type RecommendProps = {
  value: string;
};
const Recommend = ({ value }: RecommendProps) => {
  const [result, setResult] = useState<string[]>([]);

  const searchKeyword = useCallback(async (value: string) => {
    if (value) {
      const res = await search(value);
      const data = res.data.map((current: sickDTO) => current.sickNm);
      const arr = [...data].slice(0, 8);
      setResult(arr);
    }
  }, []);

  const result_list = useMemo(() => {
    return result.map((item) => {
      return <TextItem>{item}</TextItem>;
    });
  }, [result]);

  useEffect(() => {
    searchKeyword(value);
  }, [searchKeyword, value]);

  return (
    <Box>
      {value ? (
        <>
          <TextItem>{value}</TextItem>
          <span className="title">추천 검색어</span>
          {result_list}
        </>
      ) : (
        <span>검색어 없음</span>
      )}
    </Box>
  );
};

const Box = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  background-color: #fff;
  width: 100%;
  border-radius: 18px;
  padding: 26px 0 20px;
  text-align: left;
  .title {
    font-size: 12px;
    padding: 10px 20px;
    color: #888;
  }
`;
export default Recommend;
