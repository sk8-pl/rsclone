export interface GetCitiesDataResponse {
  _id?: string;
  city?: string;
  country?: string;
  image?: string;
}

export const getCitiesDataApi = async () => {
  const cityData = fetch(`http://localhost:8080/cities`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.json());

  return cityData;
};
