function processData(input) {
    var lines = input.split('\n');
    var botPosition = lines[0].split(' ');
    var botPositionRow = parseInt(botPosition[0]);
    var botPositionColumn = parseInt(botPosition[1]);
    var board = [];
    for (var i = 1; i <= 5; ++i) {
        board.push(lines[i]);
    }
    nextMove(botPositionRow, botPositionColumn, board);
}

function getNearDirty(r, c, board) {
    let nearDirtyPosition = {
        row: -1,
        column: -1
    };
    let distance = 1000;
    for (let row = 0; row < 5; row++) {
        for (let column = 0; column < 5; column++) {
            //console.log(`Procesando ${row} y ${column}: ${grid[row][column]}`)
            if (board[row][column] == 'd') {
                let pointDistance = Math.abs(row - r) + Math.abs(column - c);
                if (pointDistance < distance) {
                    nearDirtyPosition.row = row;
                    nearDirtyPosition.column = column;
                    distance = pointDistance;
                }
            }
        }
    }
    return nearDirtyPosition;
}

function nextMove(r, c, board) {

    let nearDirtyPosition = getNearDirty(r, c, board);

    // 1. Si la misma celda donde esta posicionada el bot esta sucia, se limpia.
    if (board[r][c] == 'd') {
        process.stdout.write('CLEAN' + '\n');
    }




    // Mismo row
    else if (r == nearDirtyPosition.row) {
        if (c < nearDirtyPosition.column)
            process.stdout.write('RIGHT' + '\n');
        else
            process.stdout.write('LEFT' + '\n');
    }

    // Mismo column
    else if (c == nearDirtyPosition.column) {
        if (r < nearDirtyPosition.row)
            process.stdout.write('DOWN' + '\n');
        else
            process.stdout.write('UP' + '\n');
    } else if (Math.abs(r - nearDirtyPosition.row) < Math.abs(c - nearDirtyPosition.column)) {
        if (r < nearDirtyPosition.row)
            process.stdout.write('DOWN' + '\n');
        else
            process.stdout.write('UP' + '\n');
    } else {
        if (c < nearDirtyPosition.column)
            process.stdout.write('RIGHT' + '\n');
        else
            process.stdout.write('LEFT' + '\n');
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