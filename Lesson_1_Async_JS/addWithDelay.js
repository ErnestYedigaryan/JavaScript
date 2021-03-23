function addWithDelay(...arr) {
    let sum = 0;
  
    return new Promise((resolve, reject) => {
        arr.map(n => {
            if(n < 0) {
                reject(new Error('Error! Some parameter is a negative number!'));
            }
            sum += n;
        });
        setTimeout(() => resolve(sum), 1000);
    });
}
      
addWithDelay(1,2,3,2)
    .then(res => console.log(res))
    .catch(err => console.log(err));
addWithDelay(1,5,8,-6,7)
    .then(res => console.log(res))
    .catch(err => console.log(err));
      
  