// Задание 1
let a = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];
let b = a.forEach(function (item, key, arr) {
    if (item < 1) {
        newItem = item * 100
        if (newItem % 2 != 0) {
            console.log(newItem / 100);
        }
    } else
        if (item % 2 != 0) {
            console.log(item);
        }
});

//Задание 2
let c = ['lorem ipsum', 'javascript', 'php', 'css', 'react', 'git', 'html', 'mysql'];
let d = c.forEach(function (item) {
    if (item.length <= 4) {
        console.log(item);
    }
})

//Задание 3
let e = [1, -3, 5, 6, -7, 8, 9, -11];
let newE = e.filter(function (item, key, arr){
    return item < 0;
})
console.log(newE);

//Задание 4
let f = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];
let newF = f.filter(function (item, key, arr){
    if (item < 1) {
        newItem = item * 100;
        if (!(newItem % 2)) {
            return newItem / 100;
        }
    } else {
        return (!(item % 2));
        }
})
console.log(newF);

//Задание 5
let g = ['lorem ipsum', 'javascript', 'php', 'css', 'react', 'git', 'html', 'mysql'];
let newG = g.filter(function (item, key, arr){
    return item.length != 3;
})
console.log(newG);

//Задание 6
let h = [5, 6, 7, 8, 9];
let newH = h.map(function(item){
    return Math.pow(item, 2);
})
console.log(newH);

//Задание 7
let i = [{a: 10, b: 5}, {a: 20, b: 22}, {a: 131, b: 55}];
let newI = i.map(function(item, key, arr){
    // return arr[key] = arr[key].a + arr[key].b;
    return arr[key].a + arr[key].b;
})
console.log(newI);

//Задание 8
let j = [-13, 0, 12, 1662, -0.32, -102, -2];
let j2 = j.filter(function(item, key, arr){
    return item < 0;
})
let newJ = j2.reduce(function(sum, item, key, arr){
    return sum + item;
}, 0)
console.log(Math.abs(newJ));

//Задание 9
let k = [{x: 10, y: 'lorem'}, {x: 21, y: 'lorem'}, {x: -17, y: 'lorem'}, {x: 156, y: 'lorem'}];
let newK = k.reduce(function(sum, item, key, arr){
    return sum + item.x;
}, 0)
console.log(newK);
