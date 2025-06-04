let seeds = []; // Cria um array para armazenar as sementes
let messages = [
  "Educação é a raiz do futuro.", 
  "Preservar o campo é cuidar da vida.",
  "Sustentabilidade começa com pequenas ações.",
  "Plante hoje, colha amanhã.",
  "O futuro depende do que semeamos agora."
];

function setup() {
  createCanvas(800, 600); // Cria a tela com 800px de largura e 600px de altura
  textAlign(CENTER, CENTER); // Alinha o texto no centro tanto vertical quanto horizontal
  textSize(16); // Define o tamanho da fonte do texto
}

function draw() {
  background(180, 230, 180); // Cor de fundo (verde claro, cor de campo)
  
  fill(100, 200, 100); // Preenche com cor verde para representar o chão
  noStroke(); // Desativa o contorno para o chão
  rect(0, height - 50, width, 50); // Desenha o chão (retângulo na parte inferior)

  for (let seed of seeds) { // Para cada semente no array 'seeds'
    seed.update(); // Atualiza o crescimento da semente
    seed.display(); // Exibe a semente na tela
  }
}

function mousePressed() {
  // Quando o mouse for pressionado, cria uma nova semente
  if (mouseY < height - 50) { // Verifica se o clique foi acima do chão
    seeds.push(new Seed(mouseX, mouseY)); // Adiciona uma nova semente no array 'seeds' com as coordenadas do clique
  }
}

class Seed {
  constructor(x, y) {
    this.x = x; // Posição x da semente
    this.y = y; // Posição y da semente
    this.size = 5; // Tamanho inicial da semente
    this.growth = 0; // A semente começa com crescimento zero
    this.maxGrowth = random(80, 120); // Define o crescimento máximo da semente (valor aleatório entre 80 e 120)
    this.messageShown = false; // Flag para verificar se a mensagem foi exibida
    this.message = random(messages); // Seleciona uma mensagem aleatória do array 'messages'
  }

  update() {
    // A cada frame, faz a semente crescer um pouco
    if (this.growth < this.maxGrowth) { 
      this.growth += 0.2; // Aumenta o crescimento da semente a cada atualização
    }
  }

  display() {
    // Desenha a árvore (tronco)
    stroke(100, 60, 20); // Cor do tronco (marrom)
    strokeWeight(6); // Define a espessura do tronco
    line(this.x, this.y, this.x, this.y - this.growth); // Desenha o tronco da árvore, que cresce conforme a variável 'growth'

    // Desenha a copa da árvore
    noStroke(); // Desativa o contorno para a copa da árvore
    fill(30, 150, 70); // Cor verde para a copa
    ellipse(this.x, this.y - this.growth, this.growth / 2 + 20); // Desenha a copa da árvore como um círculo que cresce com o tempo

    // Exibe a mensagem quando a árvore alcança o crescimento máximo
    if (this.growth >= this.maxGrowth && !this.messageShown) { 
      fill(255); // Cor de fundo da caixa de texto (branca)
      stroke(0); // Cor do contorno da caixa de texto (preto)
      strokeWeight(1); // Define a espessura do contorno da caixa de texto
      rect(this.x - 120, this.y - this.growth - 50, 240, 40, 10); // Desenha o retângulo para a caixa de texto
      noStroke(); // Desativa o contorno da caixa de texto
      fill(0); // Cor do texto (preto)
      text(this.message, this.x, this.y - this.growth - 30); // Exibe a mensagem no centro da caixa de texto
      this.messageShown = true; // Marca que a mensagem foi exibida
    }
  }
}
