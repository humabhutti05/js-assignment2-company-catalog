const inventory = [];

const item1 = {
    name: 'Product A',
    model: 'Model X',
    cost: 100,
    quantity: 50
};

const item2 = {
    name: 'Product B',
    model: 'Model Y',
    cost: 150,
    quantity: 30
};

const item3 = {
    name: 'Product C',
    model: 'Model Z',
    cost: 200,
    quantity: 20
};

inventory.push(item1, item2, item3);
console.log(inventory);

console.log('Quantity of item 3: ' + inventory[2].quantity);
