import { createGrid } from "./grid.js";
import delay from "./delay.js";

document.addEventListener("DOMContentLoaded",()=>{
    console.log("hello!");
    const grid = createGrid(null)
    for (const [i,row] of grid.entries()) {
        for (const [j,card] of row.entries()) {
            const cell = document.querySelector("#row_"+i+"-col_"+j)
            console.log(i,j,cell);
            cell.addEventListener("click",()=>{
                cell.src = "images/image1.jpeg"
                delay(3000).then(()=>{
                    cell.src = "images/dos.jpeg"
                })
            })
        }
    }
    console.table("grid",grid);
})