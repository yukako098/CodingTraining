const GRID = [
    ["", "", "", "^", "", "", "", "", "", ""],
    ["", "", "v", "", "~", "", "", "", "", ""],
    ["", "v", "", "", "^", "^", "", "", "", ""],
    ["", "", "", "", "^", "^", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "v", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "^", "~", "~", "", "", "", "^", "", ""],
    ["", "^", "", "~", "~", "", "", "", "", ""],
    ["", "^", "", "", "~", "~", "", "", "", ""],    
  ];

function countRows() {
    var grid = GRID.length
    return grid
}

function countColumns(){
    var col;
    for(var i = 0; i < GRID.length; i++){
      col = GRID[i].length;
    }
    return col
}

function gridSize(){
    var row = countRows();
    var col = countColumns();
    return "" + row + " x " + col;
}

function totalCells(){
    var row = countRows();
    var col = countColumns();
    var total = row * col;
    return "" + total;
}
  
function convertColumn(coordinates){
  var colAlpha = coordinates.substr(0, 1);
  var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for(var i = 0; i < alpha.length; i++){
    if(alpha[i] == colAlpha){
      return i;
    }
  }
}

function lightCell(coordinates){
  var convertCol =  convertColumn(coordinates);
  var row = coordinates.substr(1, 2);
  var convertRow = parseInt(row) -1;
  return GRID[convertRow][convertCol];
}

lightCell('B4');
