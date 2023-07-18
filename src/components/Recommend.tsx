import { TextItem } from '.';
import { styled } from 'styled-components';

type RecommendProps = {
  value: string;
  focus: number;
  data: string[];
};
const Recommend = ({ value, focus, data }: RecommendProps) => {
  return (
    <Box>
      {value ? (
        <>
          <TextItem>{value}</TextItem>
          <span className="title">추천 검색어</span>
          {data.map((item, index) => {
            return (
              <TextItem isFocus={focus == index} key={index}>
                {item}
              </TextItem>
            );
          })}
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
