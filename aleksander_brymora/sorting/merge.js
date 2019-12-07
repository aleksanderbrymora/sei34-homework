const split = (arr) => {
    if (arr.length < 2) return arr;
    const length = arr.length;
    const middle = Math.floor(length/2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(split(left), split(right))
};

const merge = (left, right) => {
    const all = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) all.push(left.shift());
        else all.push(right.shift());
    }
    return all.concat(left, right);
};

const randArray = (i = 0, arr = []) => (i >= 5000) ? arr : randArray((i + 1), [...arr, Math.floor(Math.random()*1000)]);

console.log(split([7,4,5,8,3,1,4,6]));
console.log(split(randArray()));
// console.log(randArray());