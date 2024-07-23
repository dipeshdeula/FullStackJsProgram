//1. square pattern
/*

*****
*****
*****
*****
*****

*/


// console.log("Square pattern: ");
// for(let i=0;i<5;i++)
// {
//      let row="";
//     for(let j=0;j<5;j++)
//     {
//         row+="*";
//     }
//     console.log(row);
       
    
// }


//2. Right Triangle Pattern
/*
*
**
***
****
*****


*/
// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 0; j < i; j++) {
//         row += "*";
//     }
//     console.log(row);
// }

// function show(){

//     for(let i=0;i<5;i++)
//     {
//         for(let j=0;j<5;j++)
//         {
//             //document.write("*");
//             process.stdout.write("*");
//         }
//         //document.write("<br>");
//         process.stdout.write("\n");
//     }
// }
// show()

//pyrmaid print
/*
    *
   ***
  *****
 *******
*********


*/
// for(let i = 0;i<5;i++)
// {
//     for(let j = 0; j<5; j++)
//     {
//         if((i+j)<=3)
//         {
//             process.stdout.write(" ");
//             //console.log(" ");
//         }
//         else{
//             process.stdout.write("*");
//             // console.log("*");
//         }
//     }
//     process.stdout.write("\n");
// }

// for(let i = 0; i<5; i++)
// {
//     for(let j=0;j<5;j++)
//     {
//         if(i>=j)
//         {
//             process.stdout.write("*");

//         }
//         process.stdout.write("");
//     }
//     process.stdout.write("\n");
// }

const rows = 5;  // Number of rows in the pyramid

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < 2 * rows - 1; j++) {
        // Check if the current position should be a space or an asterisk
        if (i + j < rows - 1 || j - i >= rows) {
            process.stdout.write(" ");
        } else {
            process.stdout.write("*");
        }
    }
    process.stdout.write("\n");
}
