const getUrlForCoffeeStores = (latLong, query, limit) => {
  return `https://api.foursquare.com/v3/places/nearby?ll=${latLong}&query=${query}&limit=${limit}`;
};

export const fetchCoffeeStores = async () => {
  const response = await fetch(
    getUrlForCoffeeStores(
      "53.61236248299089, -113.5092964723547",
      "coffee stores",
      8
    ),
    {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
      },
    }
  );

  const data = await response.json();
  return data.results?.map((venue, idx) => {
    return data.results?.map((venue, idx) => {
        return {
          // ...venue,
          id: venue.id,
          id: venue.fsq_id,
          address: venue.location.address || "",
          name: venue.name,
          neighbourhood:
            venue.location.neighborhood || venue.location.crossStreet || "",
          imgUrl: photos[idx],
        };
      }) || [];
    

  //   console.log(data.results);
//   const transformedData =
//     data?.results?.map((venue) => {
//       return {
//         id: venue.fsq_id,
//         ...venue,
//       };
//     }) || [];

//   console.log(transformedData);
//   return transformedData;
//   console.log(transformedData);
