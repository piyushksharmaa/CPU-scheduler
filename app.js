var count = 1;
var idNumber = 2;
function insert_row() {
  var table = document.getElementById("FCFS-Table");
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = count + 1;
  count = count + 1;
  cell1.setAttribute("id", "s_no");
  cell2.innerHTML = `<input  id="arrive_${idNumber}" type="number" value="arrival" />`;
  cell3.innerHTML = `<input  id="execute_${idNumber}" type="number" value="execute" />`;
  idNumber = idNumber + 1;
  //   var y = x.insertCell(0);
  //   y.innerHTML = count + 1;
  //   count = count + 1;
}
function Delete_row() {
  if (count != 1) {
    document.getElementById("FCFS-Table").deleteRow(-1);
    count = count - 1;
    idNumber = idNumber - 1;
  }
}

function for_sort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1][1] > array[i][1]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}
function clearBox(elementID) {
  document.getElementById(elementID).innerHTML = "";
}
function making_bars(array) {
  var size_arr = array.length;
  // console.log(size_arr);
  var total_length = 0;
  for (i = 0; i < size_arr; i++) {
    total_length = total_length + array[i][2];
  }
  // console.log(total_length);
  for (i = 0; i < size_arr; i++) {
    var block_to_insert;
    var container_block;
    block_to_insert = document.createElement("div");
    var width_cal = (array[i][1] / total_length) * 100;
    block_to_insert.style.width = "20px";
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // randomColor = randomColor + "#";
    block_to_insert.style.backgroundColor = "#" + randomColor;
    block_to_insert.style.height = "15px";
    block_to_insert.innerHTML = array[i][0];
    container_block = document.getElementById("progress-bar");
    // console.log(block_to_insert.getAttribute("background-color"));
    container_block.appendChild(block_to_insert);
  }
}
function progress_show() {
  clearBox("progress-bar");
  const store_data = [];
  var table = document.getElementById("FCFS-Table");
  var n1 = document.getElementById("FCFS-Table").rows.length;
  for (i = 1; i < n1; i++) {
    var n2 = document.getElementById("FCFS-Table").rows[i].cells.length;
    var temp = [];
    var x = document
      .getElementById("FCFS-Table")
      .rows[i].cells.item(0).innerHTML;
    var y = document.getElementById(`arrive_${i}`).value;
    var z = document.getElementById(`execute_${i}`).value;
    // console.log("x", x, y, z);
    temp.push(parseInt(x));
    temp.push(parseInt(y));
    temp.push(parseInt(z));
    store_data.push(temp);
  }
  for_sort(store_data);
  making_bars(store_data);
}
