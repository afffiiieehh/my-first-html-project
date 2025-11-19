// if statement

    let afnanage = 20;
    if(afnanage <= 15){
        console.log("your kid");
    }
    else if (afnanage >= 15){
            console.log("your younger");
        }
        else{
            console.log("you cant use it");
        }


// switch statement
        let switch1 = "first";
        switch(switch1){
            case "second":
                console.log("it is not first");
            break;
            case "first":
                console.log("it is first");
            default :
                console.log("it is wrong value");
        }
    

// loops
        let count = 10;

        for(let i = 0; i<=10; i++){
            console.log(i);
        }

        // while loop
        while(count <= 20){
            console.log(count);
            count++;
        }

        // do while loop
        do{
            console.log(count);
            count++;
        }while(count===11);

        // loop working on array
        let myarray2 = ["jacob","finu","farha"];
        for(i=0;i<myarray2.length;i++){
            document.write(myarray2[i] + "<br>")// it is to print on main page. br tag to like in html to get next line.
        }

        //of loop, same this think bt it is easy method and less code
        for(let x of myarray2){
            document.write(x +"<br>");
        }

        //object loop
        let myobj2 = {
            firstname : "afnuu",
            secondname : "vava"
        }
        for(let x in myobj2){
            document.write(x);// it only show the index
            document.write(myobj2[x] + "<br>"); // if we call the object then it will get all values.
        }