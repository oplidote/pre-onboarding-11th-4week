import { useCallback, useState } from 'react';

const useInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };

  const reset = useCallback(() => setValue(initialValue), [initialValue]);
  return { value, onChange, reset };
};

export default useInput;
