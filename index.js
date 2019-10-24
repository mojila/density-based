const file = require('fs');
const csv = file.readFileSync('./momery-used-history.csv').toString();

console.log(csv);

// transform
var transformed = csv.split('\n');
transformed = transformed.splice(1);
transformed = transformed.map((d) => {
    return d.split(',').map((de, i) => {
        if (i === 0) {
            return Number(de.replace('\r', ''));
        } else if (i === 1) {
            return de.replace('\r', '');
        } else {
            return Number(de.replace('\r', ''));
        }
    });
});

transformed = transformed.map((d) => {
    return ({
        millisecond: d[0],
        objectName: d[1],
        bytesize: d[2]
    });
});

console.table(transformed);
