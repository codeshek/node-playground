require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5e999891ff1b8361b82f7874').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false });
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
}

deleteTaskAndCount('5e999891ff1b8361b82f7874').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log('Error - ',e);
})