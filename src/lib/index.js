export const countBy = (array, key) => {
    const countMap = array.reduce((result, currentValue) => {
        const groupKey = currentValue[key];

        if (!result[groupKey]) {
            result[groupKey] = 0;
        }

        result[groupKey]++;

        return result;
    }, {});

    // Convert the result object to an array of objects
    return Object.keys(countMap).map(category => ({
        category,
        count: countMap[category]
    }));
};
