// array
    myarray = [1,3,4,6,7,3];
    console.log(myarray);
    console.log(myarray[3]);

// strings methods
    let name1 = "afnan t";
        console.log(name1.length); // to check the length the string
        console.log(name1.indexOf('n')); // to check index number of specific spell
        console.log(name1.lastIndexOf('t'));
        console.log(name1.search('afnan t'));
        console.log(name1.includes('afnan t')); // it show on true of false statement. 

// slice methods
    let slice1 = "afnan";
    let slice2 = slice1.slice(0,3); // it means it start from index 0 and which is the ending index we given it should print there 

        console.log(slice2);

// number methods
    let str = "15";
    let num = 10;

    // converting to string number
        console.log(parseInt(str));
    // converting number to string
        console.log(num.toString());

// array methods
    let myarray1 = ["a","b","c"];
        console.log(myarray1);

        myarray1[1] = "gg"; // changing the array value calling to index . call position name index and storing the changing value
        console.log(myarray1); 

        myarray1.push("kk"); // adding an value it will last at the array.
        console.log(myarray1);

        myarray1.pop(); // deleting an value from last of the array.
        console.log(myarray1);

        myarray1.unshift('jj'); // adding an element on first.
        console.log(myarray1);

        myarray1.shift(); // deliting an value from the first
        console.log(myarray1);

        console.log(myarray1.length); // to check the length 

        myarray1.splice(0,2); // removes 2 element starting from index 0, we can remove elements on specific places.
        console.log(myarray1);

        myarray1.splice(2,3,"mm", "nn"); // adding elements on those index place.
        console.log(myarray1); 

        let newarray = myarray1.slice(0); // we can make new array with this slice function and with the old array we can add the values like it.
        console.log(newarray);

        let array2 =["c","b","a"];
        array2.sort(); // this function make array on order.
        console.log(array2);

        array2.reverse();
        console.log(array2); // it will make on array reverse.


// object method
    let myobject = {
        name2 : "badu",
        age : 32
    }
    myobject.name2 = "manu"; // to change a object value.
    console.log(myobject);
    delete myobject.name2; // delete the object.
    console.log(myobject);



