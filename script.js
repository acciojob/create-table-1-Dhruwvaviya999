function insert_Row() {
    //Write your code here
	let table = document.getElementById("sampleTable");

	let tableHead1 = document.createElement("td");
	tableHead1.innerHTML = "New Cell1";

	let tableHead2 = document.createElement("td");
	tableHead2.innerHTML = "New Cell2";
	
	let tableRow = document.createElement("tr");
	tableRow.appendChild(tableHead1);
	tableRow.appendChild(tableHead2);
	

	table.prepend(tableRow);
}
