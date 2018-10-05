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

//gridSize();

console.log(gridSize());