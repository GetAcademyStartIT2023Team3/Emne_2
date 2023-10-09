const model = {
    // app-tilstand
    state: {
        page: 'home',
        auth: {
            user: 'jack09', // null hvis ikke logged inn
            email: 'jack@daniels.com',
        }
    },

    // app-input
    input: {
        learningContent: {
            id: {

            },
        },
    },

    // app-data
    data: {
        learning: {

        },
        users: {
            1: {},
        }
    }
    
}


const modelA = {
    users: [
        { id: 1, name: 'Bob' },
        { id: 2, name: 'Alice' },
    ],
}
console.log('modelA', modelA.users[0].name);

const myIntNumbers = [1, 2, 3];
const myIntNumbersV1 = myIntNumbers.map((x) => x * 2);
console.log(myIntNumbersV1);

const modelB = {
    users: {
        1: { name: 'Bob' },
        2: { name: 'Alice' },
    },
}

console.log('modelB', modelB.users[1].name);


// const maxId = model.inputs.drawPage.list.map(p => p.id).reduce((max, value) => Math.max(max, value), -1);
// model.inputs.drawPage.list.push(
//   { id: maxId+1, name: name, isSelected: true });
// updateView();


const products = [
    { name: "sports car" },
    { name: "laptop" },
    { name: "phone" },
  ];
  
  products.map((product) => {
    product.price = 100;
  });
