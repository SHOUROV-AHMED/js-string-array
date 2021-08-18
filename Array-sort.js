const number = [2,3,5,4,7,9,1];
const sortNumber = number.sort();
// console.log(sortNumber);

const friends = ['kabia', 'arif', 'sajid', 'likhon', 'badsha'];
// const sortFriend = friends.sort();
const revarseFriends = friends.reverse();
// console.log(revarseFriends)


const sortedRevers = friends.sort().reverse();
// console.log(sortedRevers)

// number sort fun

const bigNumber = [55,66,74, 3,67,65,4,47,7,75,88,34];
const sortBigNumber = bigNumber.sort(function(a, b){
    return a - b
});
console.log(sortBigNumber)