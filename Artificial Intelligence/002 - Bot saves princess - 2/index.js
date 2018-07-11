function processData(input) {
    var lines = input.split('\n');
    var dimension = parseInt(lines[0]);
    var rc = lines[1].split(' ');
    var rows = parseInt(rc[0]);
    var columns = parseInt(rc[1]);
    var grid = [];
    for(var i = 2; i <= dimension+1; ++i)
    {
        grid.push(lines[i]);
    }
    nextMove(dimension, rows, columns, grid);
}

function nextMove(n, r, c, grid){
    //console.log(grid);
    let dimension = n;
    let botPosition = {Row: r, Column: c}
    let princessPosition = {X: 0, Y: 0};
    for (let row = 0; row < dimension; row++) {
        for (let column = 0; column < dimension; column++) {
            //console.log(`Procesando ${row} y ${column}: ${grid[row][column]}`)
            if (grid[row][column] == 'p') {
                princessPosition.Row = row;
                princessPosition.Column = column;
            } 
        }
    }
    if(botPosition.Row > princessPosition.Row) {
        process.stdout.write('UP' + '\n');
    } else if(botPosition.Row < princessPosition.Row) {
        process.stdout.write('DOWN' + '\n');
    } else if(botPosition.Column > princessPosition.Column) {
        process.stdout.write('LEFT' + '\n');
    } else if(botPosition.Column < princessPosition.Column) {
        process.stdout.write('RIGHT' + '\n');
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
