import { styled } from 'styled-components';

const SearchButton = () => {
  return (
    <Button>
      <svg viewBox="0 0 16 16" fill="currentColor" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.56 0a6.56 6.56 0 015.255 10.49L16 14.674 14.675 16l-4.186-4.184A6.56 6.56 0 116.561 0zm0 1.875a4.686 4.686 0 100 9.372 4.686 4.686 0 000-9.372z"></path>
      </svg>
    </Button>
  );
};

const Button = styled.button`
  position: absolute;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background-color: #007be9;
  color: #fff;
  z-index: 2;
  svg {
    width: 21px;
    height: 21px;
  }
`;
export default SearchButton;
