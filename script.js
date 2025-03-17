function insert_Row() {
    //Write your code here
	let table = document.getElementById("sampleTable");

	let tableHead1 = document.createElement("th");
	let tableHead2 = document.createElement("th");
	tableHead1.innerHTML = "New Cell1";
	tableHead2.innerHTML = "New Cell2";
	
	let tableRow = document.createElement("tr");
	tableRow.appendChild(tableHead1);
	tableRow.appendChild(tableHead2);
	

	table.prepend(tableRow);
}
