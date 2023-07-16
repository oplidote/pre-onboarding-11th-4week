import { styled } from 'styled-components';

type ResetButtonProps = {
  reset: () => void;
};
const ResetButton = ({ reset }: ResetButtonProps) => {
  return (
    <Button onClick={reset}>
      <svg width="10" height="10" fill="currentColor" xmlns="http://www.w3.org/2000/svg" color="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 6.414l3.293 3.293 1.414-1.414L6.414 5l3.293-3.293L8.293.293 5 3.586 1.707.293.293 1.707 3.586 5 .293 8.293l1.414 1.414L5 6.414z"
        ></path>
      </svg>
    </Button>
  );
};

const Button = styled.button`
  position: absolute;
  right: 66px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background-color: #a8afb6;
`;
export default ResetButton;
