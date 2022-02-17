export interface GetCitiesDataResponse {
  _id?: string;
  city?: string;
  country?: string;
  image?: string;
}

export const getCitiesDataApi = async () => {
  const cityData = fetch(`/cities`)
    // eslint-disable-next-line @typescript-eslint/no-shadow
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response;
    })
    // eslint-disable-next-line @typescript-eslint/no-shadow
    .then((response) => response.json());

  return cityData;
};
