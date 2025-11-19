import {
    str1 as str2,myfun1 // we can change the variable name. like call "as" word.
} from "./module_export.js";

console.log(str2 ,myfun1());
console.log(str2);

// This makes variables, functions, or classes available outside this file (so they can be imported in another JS file),It’s part of ES6 Modules.

import varnamechange1 from "./module_export.js";
console.log(varnamechange1());

import * as utils from "./module_export.js";
console.log(utils.str1); // it is used to import all the function from another javascript file , after utils it show automatically