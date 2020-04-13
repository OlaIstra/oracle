export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const sortByName = (obj, request) => {
  const newObj = obj.filter(elem => {
    return elem.name.toLowerCase().indexOf(request.toLowerCase()) > -1;
  });
  return newObj;
};

export const sortByStars = obj => {
  let newObj = [...obj];
  newObj.sort((prev, next) => {
    return prev.stargazers_count < next.stargazers_count ? 1 : -1;
  });
  return newObj;
};
