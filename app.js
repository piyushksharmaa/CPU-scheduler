var count = 1;
function insert_row() {
  var table = document.getElementById("FCFS-Table");
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = count + 1;
  count = count + 1;
  cell2.innerHTML = '<input type="number" />';
  cell3.innerHTML = '<input type="number" />';
  //   var y = x.insertCell(0);
  //   y.innerHTML = count + 1;
  //   count = count + 1;
}
function Delete_row() {
  if (count != 1) {
    document.getElementById("FCFS-Table").deleteRow(-1);
    count = count - 1;
  }
}
