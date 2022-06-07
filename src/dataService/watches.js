let watches = [
    {
        id: "1",
        serial: "abc123",
        year: "1999",
        color: "black",
        size: "40x40mm",
        stockNumber: 200,
        rate: [{id: 1, value:  200}, {id: 2, value: 100}, {id: 3, value: 0}, {id: 4, value: 0}, {id: 5, value: 200}],
        model: {_id: "11", name: "ABC", brand: {id: "111", name: "AAA"}}
    },
    {
        id: "2",
        serial: "abc125",
        year: "1997",
        color: "black",
        size: "40x40mm",
        stockNumber: 200,
        rate: [{id: 1, value:  0}, {id: 2, value: 100}, {id: 3, value: 20}, {id: 4, value: 60}, {id: 5, value: 200}],
        model: {_id: "11", name: "ABC", brand: {id: "111", name: "AAA"}}
    }
];

export function getWatches() {
    return watches;
}

export function getWatch(id) {
    return watches.find(w => w.id === id);
}

export function saveWatch(watch) {
    let watchInDb = watches.find(w => w.id === watch.id) || {};
    watchInDb.serial = watch.serial;
    watchInDb.year = watch.year;
    watchInDb.color = watch.color;
    watchInDb.size = watch.size;
    watchInDb.stockNumber = watch.stockNumber;
    //watchInDb.rate = watch.rate;

    if (!watchInDb.id) {
        watchInDb.id = Date.now();
        watches.push(watchInDb);
    }

    return watchInDb;
}

export function deleteWatch(id) {
    let watchInDb = watches.find(m => m.id === id);
    watches.splice(watches.indexOf(watchInDb), 1);
    return watchInDb;
}