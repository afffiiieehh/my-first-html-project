// localStorage.setItem("key idd ","value"); // here is setting key and value
// localStorage.getItem("key id"); // it is to show item, give the key it will show what is the result included.

// localStorage.removeItem(""); // it is to remove item it is only remove induvitualy

// localStorage.clear(); // it is to clear all the local storage.

 //localStorage.setItem("name", "afnan" );
// const local1 = localStorage.key(1);
    //document.write(local1);

   // const obj = {
     //   id : 0,
       // name : "manu",
   // };

    //localStorage.setItem("data", JSON.stringify(obj));

const inputt = document.querySelector(".in");
const loginbtn = document.querySelector("#login");
const logoutbtn = document.querySelector("#logout");
const h1 = document.querySelector("h1");

// Login
loginbtn.onclick = () => {
    if (inputt.value) {
        localStorage.setItem("token", inputt.value);
        h1.innerHTML = "Welcome " + inputt.value;  // 👈 show name too
    }
};

// Logout
logoutbtn.onclick = () => {
    localStorage.clear();
    location.reload();
};