let arr = [1, 1];

let i = 2;
while (arr.length < 10) {
  let sum = arr[i - 1] + arr[i - 2];

  arr[i] = sum;
  i++;
}

console.log(arr);


//递归调用实现

function fibonacci(x){
    if(x<2){
        return 1   
    }else{
        return fibonacci(x-1)+fibonacci(x-2)
    }
}

let arr2 = [ ];
for(let x = 0;x<10;x++){
    let sum = fibonacci(x)
    arr2.push(sum)
}

console.log(arr2)