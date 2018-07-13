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

function nextMove(r, c, board) {
    console.log(board);
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