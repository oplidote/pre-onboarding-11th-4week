import { client } from '.';

export const search = async (keyword: string) => {
  const res = client.get(`/sick?q=${keyword}`);
  return res;
};
