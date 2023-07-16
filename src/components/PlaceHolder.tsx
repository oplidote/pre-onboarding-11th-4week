import { styled } from 'styled-components';

const PlaceHolder = () => {
  return (
    <Box>
      <svg viewBox="0 0 16 16" fill="currentColor" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.56 0a6.56 6.56 0 015.255 10.49L16 14.674 14.675 16l-4.186-4.184A6.56 6.56 0 116.561 0zm0 1.875a4.686 4.686 0 100 9.372 4.686 4.686 0 000-9.372z"></path>
      </svg>
      <span>질환명을 입력해 주세요.</span>
    </Box>
  );
};

const Box = styled.div`
  position: absolute;
  left: 24px;
  top: 20px;
  display: flex;
  color: #a7afb7;
  svg {
    width: 16px;
    height: 16px;
    margin-right: 12px;
    font-weight: 400;
  }
`;
export default PlaceHolder;
