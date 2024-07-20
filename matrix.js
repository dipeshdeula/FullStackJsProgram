//sum of two matrix

const prompt = require('prompt-sync')();

function matrixAddition(){
    //for matrix1
    let row1 = parseInt(prompt("Enter the number of rows for matrix1: "));
    let col1 = parseInt(prompt("Enter the number of columns for matrix1: "));

    //for matrix2
    let row2 = parseInt(prompt("Enter the number of rows for matrix2: "));
    let col2 = parseInt(prompt("Enter the number of columns for matrix2: "));

    //check the matrix compatibility for addition

    if(row1!==row2 || col1!==col2)
    {
        console.log("Matrices are incompatible for addition.");
        return;
    }

    let matrix1=[];
    let matrix2=[];
    let result=[];

    //Read for matrix1
    for(let i=0;i<row1;i++)
    {
        matrix1[i]=[];
        for(let j=0;j<col1;j++)
        {
            matrix1[i][j] = parseInt(prompt(`Enter the number for matrix1 at position [${i},${j}]:`))
        }
    }

    //Read for matrix2
    for(let i=0;i<row2;i++)
    {
        matrix2[i]=[];
        for(let j=0;j<col2;j++)
        {
            matrix2[i][j] = parseInt(prompt(`Enter the number for matrix2 at position [${i},${j}]: `));
        }
    }

    //calculate matrix addition
    for(let i=0;i<row1;i++)
    {
        result[i]=[];
        for(let j=0;j<col2;j++)
        {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    //Displaying result matrix
    console.log("Result of matrix addition: ");
    for(let i=0;i<row1;i++)
    {
        console.log(result[i].join(" "));
    }
}
matrixAddition();