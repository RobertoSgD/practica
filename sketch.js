let confetti = []; // Array que contendrá las partículas de confeti

function setup() {
  // Crear el canvas dentro del div con id 'canvas-container'
  let cnv = createCanvas(window.innerWidth, window.innerHeight);  // Ajustamos el tamaño del canvas al tamaño de la ventana
  cnv.parent('canvas-container'); // El canvas se agrega al div con id 'canvas-container'
  cnv.style('background', 'transparent'); // Fondo transparente
}

// Detección de tecla presionada
function keyPressed() {
  // Si se presiona la tecla 'C'
  if (key === 'c' || key === 'C') {
    generateConfetti();  // Generar confeti
  }
}

function draw() {
  clear(); // Limpia el canvas, manteniendo la transparencia

  // Dibujar y actualizar las partículas de confeti
  for (let i = 0; i < confetti.length; i++) {
    confetti[i].update();
    confetti[i].display();

    // Eliminar las partículas que se han salido de la pantalla
    if (confetti[i].isOutOfBounds()) {
      confetti.splice(i, 1);
      i--;
    }
  }
}

// Función que genera las partículas de confeti
function generateConfetti() {
  let numParticles = 200; // Número de partículas de confeti a generar
  for (let i = 0; i < numParticles; i++) {
    confetti.push(new Confetti(width / 2, height / 2)); // Generar confeti en el centro del canvas
  }
}

// Clase que define una partícula de confeti
class Confetti {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-4, 4), random(-10, -1)); // Velocidad más alta para hacer el confeti más grande
    this.acceleration = createVector(0, 0.1); // Gravedad
    this.color = color(random(255), random(255), random(255)); // Color aleatorio
    this.width = random(30, 60); // Aumentar el ancho de las partículas
    this.height = random(15, 40); // Aumentar la altura de las partículas
  }

  // Actualiza la posición de la partícula
  update() {
    this.velocity.add(this.acceleration); // Aplica la aceleración (gravedad)
    this.position.add(this.velocity); // Actualiza la posición
  }

  // Dibuja la partícula en el canvas
  display() {
    fill(this.color);
    noStroke();
    rect(this.position.x, this.position.y, this.width, this.height); // Dibuja un rectángulo
  }

  // Verifica si la partícula ha salido de los límites del canvas
  isOutOfBounds() {
    return (this.position.y > height || this.position.x < 0 || this.position.x > width);
  }
}
