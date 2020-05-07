require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('5e997118e208ca0d8c2c0eb2', { age:24 }).then((user) => {
//     console.log(user) 
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })


const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age })
    return count;
}

updateAgeAndCount('5e99954e5a66d52e74a21f94', 23).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})
