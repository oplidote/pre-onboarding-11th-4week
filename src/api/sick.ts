import { client } from '.';

export const search = async (keyword: string) => {
  const res = await client.get(`/sick?q=${keyword}`);
  const data = res.data
    .map((item: sickDTO) => {
      if (item.sickNm.indexOf(keyword) === 0) {
        return item.sickNm;
      }
    })
    .filter((item: string | undefined) => item)
    .slice(0, 8);

  return data;
};
