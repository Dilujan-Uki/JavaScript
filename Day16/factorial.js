let num=10;
function factorial(num){
    let fact=1;
    let some=""
    for(let i=1;i<=num; i++){
        fact*=i
        some+=fact+", "
    }
     console.log(some);
}
(factorial(num));
