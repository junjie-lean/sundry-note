斐波那契数列js实现

斐波那契数列是指 前两个数为1，第三个数开始每个数均为前两个数之和

JavaScript实现：
```javascript

    //面向过程
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

```

递归调用是一种比较耗性能的操作方式，大量的递归调用会导致程序栈内存分配耗尽。解决办法是使用惰性求值。