// function addTwo(num1 : number, num2 : number){
//     // return num1+num2;
//     return "Hello"   /* how to handle the return type */
// }
function addTwo(num1 : number, num2 : number) :number {
    return num1+num2;
    // return "Hello" 
                          /* To handle the return type we infer   the number */
}


addTwo(5,8);

function toUppercase(str:string){
    return  str.toUpperCase();
}
toUppercase("aadarsh");

function signUp(name:String, email:string, isloggedIn:boolean = false){}

const myVal = (s:string) : string =>{
    return "Aadarsh";
}

function consoleError(errMsg:string):void{
    console.log(errMsg);
}

function handleError(errMsg:string):never{
    throw new Error(errMsg);
}