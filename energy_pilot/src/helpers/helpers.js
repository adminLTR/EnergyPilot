export function getSumDevices(devices) {
    const keys = Object.keys(devices);
    const x = new Array(keys.length);

    for (let i = 0; i < keys.length; i++) {
        x[i] = sum(devices[keys[i]]);
    }
    return x;
}

export function sum(array) {
    let x = 0;
    array.forEach(element => {
        x += parseFloat(element.power);
    });
    return x;
}