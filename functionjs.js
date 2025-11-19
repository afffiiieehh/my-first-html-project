//function , it is block of code
    function myfunction(){
        let j=11;
        return j;
    } 
// we should call this function the only this output return
// calling function
    myfunction();

    function myfunction2(){
        let k = 123;
        let n = k + myfunction();
        return n;
    }

    console.log(myfunction2());


// parameter passing in function , declaring arguments or parameters inside bracates it should go on where is it called like H is gone to I . and we can give the data below when it is calling this function
    function parafunc(H){
        let M = 33;
        let I = H;
        let L = I + M;

        console.log(L);
        }

        parafunc(17);

//arrow function there is no need functon name to declare function name. and it is "function_name = () => {} "
    arowfunc = (z) => {
        return z;
    }
        console.log(arowfunc(10));

// alert function
    alert("it is not completed be carefull while using");

// objects , it is using to we can create a multiple data inside a variable
    let use1 = "manu";
    let use2 = "chitra";
    console.log(use1);

    let obj1 = {
        user1 : "manu",
        user2 : "chitra"
    };
    console.log(obj1);
    console.log(obj1.user2);


// array , it is index based so we should call index. and it is square bracates.
    myarray = [1,3,5,7,9];
        console.log(myarray);
        console.log(myarray[2]); // calling with index
        