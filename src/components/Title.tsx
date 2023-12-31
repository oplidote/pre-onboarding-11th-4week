import { styled } from 'styled-components';

const Title = () => {
  return (
    <Text>
      <h1>국내 모든 임상시험 검색하고</h1>
      <h1>온라인으로 참여하기</h1>
    </Text>
  );
};

const Text = styled.div`
  display: block;
  h1 {
    white-space: nowrap;
    font-size: 34px;
  }
`;
export default Title;
