function loadArray(arr) {
    return new Promise(resolve => {
        resolve(arr);
    });
}
      
function getItem(array, id) {
    return new Promise((resolve, reject) => {
        array.map(n => {
            if(n.id === id) {
                resolve(n);
            }
        });
        reject(new Error('There is no such item in the array!'));
    });
}
      
async function myAsyncFunc(id) {
    try {
        const arr = await loadArray([{id: '01', name: 'John'}, {id: '02', name: 'Henry'}, {id: '03', name: 'Ernest'}]);
        const result = await getItem(arr, id);
        console.log(result);
    } catch(err) {
        console.log(`Error: ${err}`);
    }
}
      
myAsyncFunc('04');
myAsyncFunc('03');
  