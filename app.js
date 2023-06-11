const canvas = document.getElementById("canvas")
const canvasContext = canvas.gecontext('2d')

window.onload = () => {
    gameLoop()
}

function gameLoop() {
    setInterval(show, 1000/20) // here 15 is our fps value
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

