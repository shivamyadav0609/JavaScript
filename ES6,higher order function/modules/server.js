    // import all fxns from import(not good practice)
//   import * as utility from "./utility.js"
import { add as addition} from "./utility.js";
import { sub } from "./utility.js";
// no need to apply curly 
import multi from "./utility.js";

// function name can be renamed
const a=5;
const b=4;
const result=addition(a,b);


console.log(result)