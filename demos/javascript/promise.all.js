Promise.all = (promises) => {
    return new Promise((resolve, reject) => {
        const length = promises.length;
        const result = new Array(length);
        let count = 0;

        promises.forEach((item, index) => {
            item.then((data) => {
                result[index] = data;
                count++;
                if (count === length) resolve(result);
            }).catch((err) => {
                reject(err);
            });
        });
    });
};