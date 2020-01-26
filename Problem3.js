function largestPrimeFactor(number) {
  // Good luck!
  var i;
  while (number/2==0){
    number /=2;}
  for(i = 3; i<Math.sqrt(number); i = i+2){
    while(number%i==0){
      number/=i;
    }
  }
  return number;
}
