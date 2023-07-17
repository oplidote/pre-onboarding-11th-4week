import { useEffect, useState } from 'react';

import { search } from '@/api/sick';
import { wrapPromise } from '@/utils/wrapPromise';

const useFetch = (value: string) => {
  const [result, setResult] = useState<string[]>([]);

  useEffect(() => {
    const data = search(value);
    setResult(wrapPromise(data));
  }, [value]);

  return result;
};

export default useFetch;
