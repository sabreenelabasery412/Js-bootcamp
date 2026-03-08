let fnum=10;
let snum=20;
let operation= prompt("enter your operation");
if (operation== "+"){
    summation=fnum+snum;
    console.log("summation = "+summation);


}
else if (operation== "-"){
    subtration=fnum-snum;
    console.log(" subtration = "+subtration);
    

}
else if (operation== "*"){
    multiplication=fnum*snum;
    console.log("multiplication = "+ multiplication);
    

}
else if (operation== "/"){
    division=fnum/snum;
    console.log( "the division =  "+ division);
    

}
else{
    console.log("invaild operation");
}
