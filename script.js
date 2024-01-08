                                            // task 1
let nums = [5, 2, 4];
let sqares = [];

nums[99] = 3;

for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
        sqares.push(nums[i] * nums[i]);
    }
};

console.log(sqares);
                                            // task 2
let list = [
    {product: "tomato", price: 150},
    {product: "apple", price: 80},
    {product: "salad", price: 25},
    {product: "acai", price: 150},
    {product: "carrot", price: 100},
    {product: "potato", price: 60},
    {product: "banana", price: 123},
    {product: "corn", price: 80},
    {product: "grape", price: 75},
    {product: "dragon fruit", price: 150},
];

let max = list.reduce((acc, item) => {
    if (acc < item) {
        return item;
    } else {
        return acc;
    }
});
console.log(max);

                                            // task 3
let products = [
    {product: "tomato", price: 123, cnt: 1},
    {product: "apple", price: 80, cnt: 1},
    {product: "salad", price: 25, cnt: 1},
    {product: "acai", price: 150, cnt: 1},
    {product: "carrot", price: 100, cnt: 1},
    {product: "potato", price: 60, cnt: 1},
    {product: "banana", price: 123, cnt: 1},
    {product: "corn", price: 80, cnt: 1},
    {product: "grape", price: 75, cnt: 1},
    {product: "dragon fruit", price: 100, cnt: 1},
];

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let arr = [];
let rand = getRandom(10, 30);

for (let i = 0; i <= rand; i++) {
	if (arr.length < i) {
        let randEl = products[Math.floor(Math.random() * products.length)];
        arr.push(randEl)
    }
};

console.log(arr);

let busket = arr.reduce((acc, item) => {
    let existingProduct = acc.find((product) => product.product === item.product);

    if (existingProduct) {
        existingProduct.cnt += 1;
    } else {
        const product = { ...item, cnt: 1 };
        acc.push(product);
    }
    return acc;
}, [])

console.log(busket);

 let result = busket.reduce((acc, item) => {
    return item.price * item.cnt + acc;
}, 0);

console.log(result);