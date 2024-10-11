let arr = [1, 2, 3, 4, 5, { id: 1, age: 25 }, [1, 2, 3]];
let reversedArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reversedArr.push(arr[i]);
}
console.log(reversedArr);

var str="vamsi"
var reverStr=" "
for(i=str.length-1;i>=0;i--){
    reverStr = reverStr+str[i]
}
console.log(reverStr);

var arr2=[1, 2, 3, 4, 5, { id: 1, age: 25 }, [1, 2, 3]];
for(key in arr2){
    console.log(25)
}
console.log(arr2["age"])