export const generateServiceInfo = () => {
  const random = Math.floor(Math.random() * 10000);
  return {
    servicename: `testservice${random}`,
    tag: 'dy',
    url: `http://testservice${random}.com`,
    host: `api.kong-air_${random}.com`,
  };
};

export const generateRouteInfo = () => {
  const random = Math.floor(Math.random() * 10000);
  return {
    routename: `testroute${random}`,
    path: `/testroute${random}`,
  };
};