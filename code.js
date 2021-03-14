// 1
function logOne() {
  setTimeout(function () {
    console.log('one!');
  }, Math.random() * 1000);
}
  
function logTwo() {
  setTimeout(function () {
    console.log('two!');
  }, Math.random() * 1000);
}
  
   
  
function inOrder(cb1, cb2) {
  cb1();
  setTimeout(cb2(), 0);
}
  
inOrder(logOne, logTwo); // not working correctly
  
  
// 2
async function addWithDelay(...arr) {
  let sum = 0;
  
  try {
    const res = await new Promise((resolve, reject) => {
      arr.map(n => {
        if (n < 0) {
          reject(new Error('Error! Some parameter is a negative number!'));
        }
        sum += n;
      });
      setTimeout(() => resolve(sum), 1000);
    });
  
    return console.log(res);
  } catch (err) {
    return console.log(err);
  }
}
  
addWithDelay(1,2,3,2);
addWithDelay(1,5,8,-6,7);
  
  
// 3
function loadArray(arr) {
  return new Promise(resolve => {
    resolve(arr);
  });
}
  
function getItem(array, id) {
  return new Promise((resolve, reject) => {
    array.map(n => {
      if(n.id == id) {
        resolve(n);
      }
    });
    reject(new Error('There is no such item in the array!'));
  });
}
  
async function myAsyncFunc(id) {
  try {
    const arr = await loadArray([{id: '01', name: 'John'}, {id: '02', name: 'Henry'}, {id: '03', name: 'Ernest'}]);
    const result = getItem(arr, id);
    console.log(result);
  } catch(err) {
    console.log(`Error: ${err}`);
  }
}
  
myAsyncFunc('04');
  