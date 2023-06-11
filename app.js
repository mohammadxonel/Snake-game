const canvas = document.getElementById("canvas")
const canvasContext = canvas.gecontext('2d')

window.onload = () => {
    gameLoop()
}

function gameLoop() {
    setInterval(show, 1000 / 20) // here 15 is our fps value
}

function show() {
    update()
    draw()
}

function update() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height)
    snake.move()
    eatApple()
    checkHitWall()
}

function eatApple() {
    if (snake.tail[snake.tail.length - 1].x == apple.x &&
        snake.tail[snake.tail.length - 1].y == apple.y) {
        snake.tail[snake.tail.length] = {
            x: apple.x,
            y: apple.y
        }
        apple = new Apple();
    }
}


function checkHitWall() {
    let headTail = snake.tail[snake.tail.length - 1]

    if (headTail.x == -snake.size) {
        headTail.x = canvas.width - snake.size
    } else if (headTail.x == canvas.widh) {
        headTail.x = 0
    } else if (headTail.y == -snake.size) {
        headTail.y = canvas.height - snake.size
    } else if (headTail.y == canvas.height) {
        headTail.y = 0
    }
}

function draw() {
    createRect(0, 0, canvas.width, canvas.height, "black")
    createRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < snake.tail.length; i++) {
        createRect(snake.tail[i].x + 2.5, snake.tail[i].y + 2.5,
            snake.size - 5, snake.size - 5, "white")
    }

    canvasContext.font = "20px Arial"
    canvasContext.fillStyle = "#00FF42"
    canvasContext.fillText("Score: " + (snake.tail.length - 1), canvas.width - 120, 18)
    createRect(apple.x, apple.y, apple.size, apple.size, apple.color)
}