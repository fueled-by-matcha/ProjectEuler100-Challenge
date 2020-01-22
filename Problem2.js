function fiboEvenSum(n) {
  let sum = 0;
  let i = 2;
  var fibo = new Array(n);
  fibo[0] = 1;
  fibo[1] = 2;
  while(i<=n){
    if(fibo[i-1]%2==0){
      sum+=fibo[i-1];
    }
    fibo[i] = fibo[i-1] + fibo[i-2];
    i+=1;
  }
  return sum;
}

fiboEvenSum(10);
