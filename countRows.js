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
    return "" + col + " x " + row;
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
  var col = countColumns();
  var row = coordinates.substr(1, 2);
  //var convertRow = parseInt(row) -1;
  if(convertCol > col){
    return false;
  }
}

function isRock(coordinates){
  var cell = lightCell(coordinates);
  if (cell == '^'){
    return true;
  } else {
    return false;
  }
}

function isCurrent(coordinates){
  var cell = lightCell(coordinates);
  if(cell == '~'){
    return true;
  } else {
    return false;
  }
}

function isShip(coordinates){
  var cell = lightCell(coordinates);
  return (cell == 'v');
}

function lightRow(num){
  return GRID[num-1];
}

function lightColumn(alpha){
  var colAr = new Array();
  for(var i = 0; i < GRID.length; i++){
    colAr.push(GRID[i][alpha.charCodeAt(0) - 65]);
  }
  return colAr;
}

function allRocks(){
  var rockArr = new Array();
  for(var row = 0; row < GRID.length; row++){
    for(var col = 0; col < GRID[row].length; col++){
      if(GRID[row][col] == '^'){
        rockArr.push((col + 10).toString(36).toUpperCase() + (row + 1));
      }
    }
  }
  return rockArr;
}

function allCurrents(){
  var currentArr = new Array();
  for(var row = 0; row < GRID.length; row++){
    for(var col = 0; col < GRID[row].length; col++){
      if(GRID[row][col] == '~'){
        currentArr.push((col + 10).toString(36).toUpperCase() + (row + 1));
      }
    }
  }
  return currentArr;
}

function allShips(){
  var ships = new Array();
  for(var row = 0; row < GRID.length; row++){
    for(var col = 0; col < GRID[row].length; col++){
      if(GRID[row][col] == 'v'){
        ships.push((col + 10).toString(36).toUpperCase() + (row + 1));
      }
    }
  }
  return ships;
}

function firstRock(){
  var rocks = allRocks();
  return rocks[0];
}

function firstCurrent(){
  var currents = allCurrents();
  return currents[0];
}

function shipReport(){
  var ships = allShips();
  var shipsArr = new Array();
  shipsArr.push(ships[0]);
  shipsArr.push(ships[ships.length-1]);
  return shipsArr;
}

function howDangerous(coordinates){
  if(coordinates == '~'){
    return 50;
  } else if (coordinates == '^'){
    return 100;
  } else {
    return 0;
  }
}

function percentageReport(){
  var rocks = allRocks();
  var currents = allCurrents();
  var row = countRows();
  var col = countColumns();
  var total = row * col;
  var rocksRate = rocks.length / total * 100.00;
  var currentsRate = currents.length / total * 100.00;
  var ratesArr = [];
  ratesArr.push(rocksRate.toFixed(2));
  ratesArr.push(currentsRate.toFixed(2));
  return ratesArr;
}

function safetyReport(){
  var safetyGrid = GRID.map(row => {
    return row.map(column => howDangerous(column));
    })
    return safetyGrid;
}

function convertRow(coordinates){
  var rowNum = coordinates.substr(1, 2);
  rowNum = parseInt(rowNum);
  return rowNum;
}

function calcDistance(value1, value2){
  value1x = convertColumn(value1);
  value1y = convertRow(value1);

  value2x = convertColumn(value2);
  value2y = convertRow(value2);
  
  var distance = Math.sqrt(Math.pow((value2x - value1x), 2) + Math.pow((value2y - value1y), 2)).toFixed(2);
  
  return distance
}
