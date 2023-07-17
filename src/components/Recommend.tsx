import { TextItem } from '.';
import { useMemo } from 'react';
import { styled } from 'styled-components';

import useFetch from '@/hook/useFetch';

type RecommendProps = {
  value: string;
};
const Recommend = ({ value }: RecommendProps) => {
  const result = useFetch(value);

  const result_list = useMemo(() => {
    return result.map((item) => {
      return <TextItem>{item}</TextItem>;
    });
  }, [result]);

  return (
    <Box>
      {value ? (
        <>
          <TextItem>{value}</TextItem>
          <span className="title">추천 검색어</span>
          {result_list}
        </>
      ) : (
        <Empty>검색어가 존재하지 않습니다.</Empty>
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
const Empty = styled.div`
  padding: 0 30px;
  color: #888;
`;
export default Recommend;
