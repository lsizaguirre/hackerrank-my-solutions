function processData(input) {
    var lines = input.split('\n');
    var dimension = parseInt(lines[0]);
    var grid = [];
    for (var i = 1; i <= dimension; ++i) {
        grid.push(lines[i]);
    }
    displayPathtoPrincess(dimension, grid);
}

function displayPathtoPrincess(dimension, grid) {
    let marioPosition = {
        X: 0,
        Y: 0
    };
    let princessPosition = {
        X: 0,
        Y: 0
    };
    for (let indexX = 0; indexX < dimension; indexX++) {
        for (let indexY = 0; indexY < dimension; indexY++) {
            //console.log(`Elemento [${indexX}][${indexY}] -> ${grid[indexX][indexY]}`)
            if (grid[indexX][indexY] == 'm') {
                marioPosition.X = indexX;
                marioPosition.Y = indexY;
            }
            if (grid[indexX][indexY] == 'p') {
                princessPosition.X = indexX;
                princessPosition.Y = indexY;
            }
        }
    }
    while (marioPosition.X !== princessPosition.X && marioPosition.Y !== princessPosition.Y) {
        if (marioPosition.X > princessPosition.X) {
            process.stdout.write('UP' + '\n');
            marioPosition.X--;
        } else if (marioPosition.X < princessPosition.X) {
            process.stdout.write('DOWN' + '\n');
            marioPosition.X++;
        }
        if (marioPosition.Y > princessPosition.Y) {
            process.stdout.write('LEFT' + '\n');
            marioPosition.Y--;
        } else if (marioPosition.Y < princessPosition.Y) {
            process.stdout.write('RIGHT' + '\n');
            marioPosition.Y++;
        }
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