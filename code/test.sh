#!/bin/bash

echo "What's your name?"

# read username

username="lean"

echo "hello,${username}!"

for zm in a b c d e
do
    echo ${zm};
done

echo "------------"
var=`expr 2+2`;
echo ${var}
echo "------------"

arr=(1 2 3 4 5 6 7);

# for ((i = 0; i < arrlen arr; i++))
# do
#     echo ${arr[i]}
# done

function arrlen(){
    echo $@
    return $@
}
echo ${#arr}

# arrlen arr
