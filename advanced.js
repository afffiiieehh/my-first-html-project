// spread oparater
    const globalplayer = {
        id : 34,
        name : "manu",
        power : 100
    };

    const player1 = {...globalplayer}; // when we are passing the values globalplayer to player 1,if we change any values it will change all globelplayer value too.so use object symbl and 3 ."{...write the name which data we want copy}" and below change whice data want to change.4

    // this is another whay to make spread oparate  const player1 = Object.assign({},globalplayer);
    player1.power = 50;

    console.log(player1);
    console.log(globalplayer);


// concat (mixing), array spread.
    const arraycon = ["raju","maya","michu"];
    const arraycon1 = ["minu","manu","millu"];
     
    const arraycon2 = arraycon.concat(arraycon1); // mixing 2 array calling concat.
    console.log(arraycon2);

    const arraycon3 = [...arraycon,...arraycon1,"vava"]; // same thing bt it is using with spread oparater "...[]", and adding a value last.
    console.log(arraycon3);


// rest
    const name2 = ["niya", "milly", "badu"];
    const [first,second,third] = name2; // we can call inside the array single values.
    console.log(second);
    
    const name3 = {
        id : 49,
        name : "vava",
        power : 100
    };

    const {id,name,...rest} = name3; // thats 3 dot it will rest values,which is not called
    console.log(id,name);
    console.log(rest);


// arrow function
    function myfun1(){
        console.log("runing");
    }
    console.log(myfun1()); // normal function

    // arrow function
    const arowfun1 = (value,x) =>{
        console.log("it is also runing");
        console.log(value+x);
    }
    arowfun1(20,4);  // this is how arrow function workin,if there is only one parameter we can remove the bracets,write oparations on after => this symbol.


// foreach method
        const foreach1 = [
        { id: 1, name: "monu" },
        { id: 2, name: "lulu" }
    ];

    // Normal for loop
    for (let i = 0; i < foreach1.length; i++) {
        console.log(foreach1[i].name);
    }

    // forEach loop
    foreach1.forEach((value, index, array) => {
        console.log("Value:", value.name);
        console.log("Index:", index);
        console.log("Array:", array);
    });


// map method
    const myarray3 = foreach1.map((value) => value.name);
    console.log(myarray3);


// filltering 
    const fillter = [
        {
            name : "aju",
            age : 30
        },
        {
            name : "bidu",
            age : 43
        },
        {
            name : "minu",
            age : 30
        }
    ]

    const afterfillter = fillter.filter((value)=> value.age === 30);
    console.log(afterfillter); // here only show fillter value like whos has age 30. we can accses the data using "filte" method , after value give the data which we want to accses like above 'value.age'


// reduce method
    const numarray = [49,32,23,42,43];

    const numnewarray = numarray.reduce((total,value) => total + value ,0 ); // this last number is value const vlaue. there is we are giving total value. and here it has alreay like total variable like inbilt function.

    console.log(numnewarray);

    // every array should take 3 arguments bt this reduce method should take 4 argumens total,value,index,full array


// find method
    const findarray = [
        {
            name : "aju",
            age : 30
        },
        {
            name : "bidu",
            age : 43
        },
        {
            name : "minu",
            age : 30
        }
    ]

    console.log(findarray.find(value=>value.name==="bidu")); // it returnig from findarray it is on object which is the name included bidu,we can call this method a single object.


// sort method
    const sortarray = [42,32,54,10,31];
    console.log(sortarray.sort()); // it is one way to sort , evertime it is not give full sort

    const sortedaray = sortarray.sort((a,b)=>a+b); // it is another way to sort
    console.log(sortedaray);

    console.log(sortarray.sort((a,b)=> b-a)); // desending order sort.


// Dom selectotrs
    //nexted array(inside the array another array)
    const nextedarray = [2,3,4,5,[34,2,[15,16,17],34,2,],6,7,8];
    console.log(nextedarray);
    console.log(nextedarray.flat()); // flat : it will show all the arrays on one array. it only show limted array. if we want to show of full array give inside the flat bracate "(infinity)" infinity.
    console.log(nextedarray.flat(Infinity)); // it will show all of the array.

    // in the object array
    const nextedobject = {
            name : "dinu",
            id : 4,
            company : {
                company_name : "amazon", // inside the object array another object.
            }
        };
    if(nextedobject && nextedobject.company && nextedobject.company. company_name ){
    console.log(nextedobject.company.company_name);
    } // this is the way we can call inside the object.

    // we can call this think also like chainig. "?." this method is called "chaining".
    if(nextedobject?.company?.company_name){
        console.log(nextedobject.company.company_name);
    };
    document.getElementById("hello").innerHTML = "bye";
    document.querySelector("#hello").style.color = "red";
