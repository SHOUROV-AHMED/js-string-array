// using indexOf 

// const products = [
//     'IPhone',
//     'Xoimi Phone',
//     'RealMe phone',
//     'Oppo phone',
//     'Vivo Phone',
//     'Dell Laptop',
//     'Asus laptop',
//     'Lenovo laptop',
//     'Fokira Laptop'
// ]
//  const searching = 'phone';
// const output = [];

// for (const product of products){
//     if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
//         output.push(product);
//     }
// }
// console.log(output);

// using include

const products = [
    'IPhone',
    'Xoimi Phone',
    'RealMe phone',
    'Oppo phone',
    'Vivo Phone',
    'Dell Laptop',
    ' Asus laptop',
    ' Lenovo laptop',
    'dellFokira Laptop'
]
const searching = 'phone';
const output = [];

for(const product of products){
    if (product.toLowerCase().endsWith(searching.toLowerCase())){
        output.push(product);
    }
}
console.log(output);