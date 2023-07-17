import { useCallback, useEffect, useState } from 'react';

import { search } from '@/api/sick';
import { cacheValue, LocalCache } from '@/utils/cache';
import { wrapPromise } from '@/utils/wrapPromise';
import useDebounce from './useDebounce';

const cache = new LocalCache();

const useFetch = (key: string) => {
  const [result, setResult] = useState<string[]>([]);

  const fetchData = useCallback(() => {
    const now = new Date();
    const response = search(key);
    setResult(wrapPromise(response));
    cache.set(key, { data: wrapPromise(response), expire: now.getTime() });
  }, [key]);

  const delayFetch = useDebounce(fetchData, 500);

  useEffect(() => {
    if (key) {
      if (cache.has(key)) {
        const now = new Date();
        const cacheObj = cache.get(key) as cacheValue;
        if (now.getTime() - cacheObj.expire > 10000) delayFetch();
        else setResult(cacheObj.data);
      } else delayFetch();
    }
  }, [delayFetch, fetchData, key]);

  return result;
};

export default useFetch;
