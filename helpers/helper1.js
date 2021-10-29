module.exports = (items, key, value) => {
    const result = items.filter(function(item){
        if (item[key] === value) {
          return true;
        }

        return false;
    });

    return result;
};
