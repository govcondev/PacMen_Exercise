var pos = 0;
const pacArray = [
    ['PacMan1.png', 'PacMan2.png'],
    ['PacMan3.png', 'PacMan4.png']
];
var direction = 0;
const pacMen = []; // This array holds all the pacmen

function setToRandom(scale) {
    return {
        x: Math.random() * scale,
        y: Math.random() * scale
    }
}
// Factory to make a PacMan at a random position with random speed
function makePac() {
    let velocity = { x: Math.floor(Math.random() * 11), y: Math.floor(Math.random() * 11) };
    let position = { x: Math.floor(Math.random() * 200), y: Math.floor(Math.random() * 200) };
    let game = document.getElementById('game');
    let newimg = document.createElement('img');
    newimg.style.position = 'absolute';
    newimg.src = 'PacMan1.png';
    newimg.width = 100;
    newimg.style.left = position.x + 'px';
    newimg.style.top = position.y + 'px';
    game.appendChild(newimg);
    return {
        position,
        velocity,
        newimg
    }
}

function update() {
    pacMen.forEach((item) => {
        checkCollisions(item)
        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;

        item.newimg.style.left = item.position.x + 'px';
        item.newimg.style.top = item.position.y + 'px';
    });
    setTimeout(update, 20);
}

function checkCollisions(item) {
    if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
        item.position.x + item.velocity.x < 0) item.velocity.x = -item.velocity.x;
    if (item.position.y + item.velocity.y + item.newimg.height > window.innerHeight ||
        item.position.y + item.velocity.y < 0) item.velocity.y = -item.velocity.y;
}

function makeOne() {
    pacMen.push(makePac()); // adds a new PacMan
}
