let watches = [
    {
        id: "1",
        serial: "abc123",
        year: "1999",
        color: "black",
        size: "40x40mm",
        stockNumber: 200,
        rate: [{1: 200}, {2:100}, {3: 0}, {4: 0}, {5: 200}],
        model: {_id: "11", name: "ABC", brand: {id: "111", name: "AAA"}}
    },
    {
        id: "2",
        serial: "abc125",
        year: "1997",
        color: "black",
        size: "40x40mm",
        stockNumber: 200,
        rate: [{1: 200}, {2:100}, {3: 0}, {4: 0}, {5: 200}],
        model: {_id: "11", name: "ABC", brand: {id: "111", name: "AAA"}}
    }
];

export function getWatches() {
    return watches;
}

export function getWatch(id) {
    return watches.find(w => w._id === id);
}

export function saveWatch(watch) {
    let watchInDb = watches.find(w => w._id === watch._id) || {};
    watchInDb.serial = watch.serial;
    watchInDb.year = watch.year;
    watchInDb.color = watch.color;
    watchInDb.size = watch.size;
    watchInDb.stockNumber = watch.stockNumber;
    watchInDb.rate = watch.rate;

    if (!watchInDb._id) {
        watchInDb._id = Date.now();
        watches.push(watchInDb);
    }

    return watchInDb;
}

export function deleteWatch(id) {
    let watchInDb = watches.find(m => m._id === id);
    watches.splice(watches.indexOf(watchInDb), 1);
    return watchInDb;
}