function insert_Row() {
    //Write your code here
	let table = document.getElementById("sampleTable");

let tableRow = document.createElement("tr");

let tableData1 = document.createElement("td");  // Corrected to <td>
tableData1.innerHTML = "New Cell1";

let tableData2 = document.createElement("td");  // Corrected to <td>
tableData2.innerHTML = "New Cell2";

tableRow.appendChild(tableData1);
tableRow.appendChild(tableData2);

table.prepend(tableRow);  // Correct placement at the top

}
