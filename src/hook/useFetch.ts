import { useEffect, useState } from 'react';

import { search } from '@/api/sick';
import { LocalCache } from '@/utils/cache';
import { wrapPromise } from '@/utils/wrapPromise';

const cache = new LocalCache();

const useFetch = (value: string) => {
  const [result, setResult] = useState<string[]>([]);

  useEffect(() => {
    if (value) {
      if (cache.has(value)) {
        setResult(cache.get(value) as string[]);
      } else {
        const data = search(value);
        setResult(wrapPromise(data));
        cache.set(value, wrapPromise(data));
      }
    }
  }, [value]);

  return result;
};

export default useFetch;
