import { useCallback, useEffect, useState } from 'react';

const useKeydown = (len: number, value: string) => {
  const [focus, setFocus] = useState<number>(-1);

  useEffect(() => {
    setFocus(-1);
  }, [value]);

  const keydownHandler = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.nativeEvent.isComposing) return;
      else if (len > 0) {
        switch (e.key) {
          case 'ArrowDown':
            if (len <= focus + 1) setFocus(0);
            else setFocus(focus + 1);
            break;
          case 'ArrowUp':
            if (0 >= focus) setFocus(len - 1);
            else setFocus(focus - 1);
            break;
          default:
            break;
        }
      }
    },
    [focus, len],
  );
  return { focus, keydownHandler };
};

export default useKeydown;
