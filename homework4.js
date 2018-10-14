// 2-Triangle Stars

  const a = function(num, str){
  let i = " "
  while(num>0){
  i = i + str;
  num = num - 1;
  }
  return i;
  }
  
  
  const triangleStars = function(n){
    let d = n*2 - 1;
    let d1 = 0;
  
    while(d > 0 && d1 < n){
       console.log(a(d1,' ') + a(d, "*"))
      d = d - 2;
      d1 = d1 + 1;
    }
  }
 triangleStars(4);
// 3. 
 const multiToSingle = function (array) {
    let rst = [];
    let r = 0;
    while (array.length>r) {
        let index = 0;
        while (array[r].length > index) {
            rst[rst.length] = array[r][index];
            index = index +1;
        }
        r = r+1;
    }
    return rst;
}
const array2d = [[1, 2], [3, 4, 5]]
console.log(multiToSingle(array2d
));

// 4. 

const findMinMax = function(array1, a){
    let result = array1[0];
    let i = 0;
    if(a === true){
        while(array1.length > i){
            if(array1[i] > result)
                result = array1[i];
            i =i+1;
        }
    }
    else if(a === false){
        while(array1.length > i){
            if(array1[i] < result)
                result = array1[i];
            i =i+1;
        }
    }
    return result;
}
let result1=findMinMax([0, 16, 4, 32], true);
console.log(result1);

// 5
const forEach = function(arr, f){
let number = 0;
while(number<arr.length){
  f(arr[number]);
number = number +1 
} ;
}
const rslt = [1, 2, 35, 11]
const ressult = function(val) {
    console.log(val);
}
forEach(rslt, ressult);

// 6. 
  const sum = function(numarr){
let num = 0;
let sumarr = 0;
while(numarr.length>num){
sumarr+= numarr[num];
num = num + 1;
}
return sumarr;
}
const fin = sum([7, 10, 4, 3]);
console.log(fin);

// 7.

const reverse = function(strn){
  let aa = strn.length
  let rsltt = ""
  while(aa>0){
    rsltt = rsltt + strn[aa-1]
    aa=aa-1;
  }
    return rsltt;
  }
  console.log(reverse("abcd"))

// 8
   const checkerboard = function (board) {
    let n1 = 0;
    while (n1 < board) {
        let n2 = 0;
        while (n2 < board) {
          if (n1 % 2 === n2 % 2 || n1 === n2){
            document.write("*")
          }
            else
            {
              document.write(".")
            }
            n2 = n2 + 1;
        }
        document.write("<br>");
        n1 = n1 + 1;
    }
}

checkerboard(8);






