module.exports = (items, key, value) => {
  const result = items.filter(item => {
    if (item[key] === value) {
      return true;
    }

    return false;
  });

  return result;
};
