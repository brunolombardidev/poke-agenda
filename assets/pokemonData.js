const pokemonData = [
    { number: 1, name: "Bulbasauro", description: "Há uma semente de planta em suas costas desde o dia que este Pókemon nasce. A semente cresce lentamente.", types: ["Planta", "Veneno"], advantages: ["Fogo", "Gelo", "Psíquico", "Voador."] },
    { number: 2, name: "Ivysauro", description: "Quando o bulbo em suas costas cresce, parece perder a capacidade de ficar de pé em suas patas traseiras.", types: ["Planta", "Veneno"], advantages: ["Fogo", "Gelo", "Psíquico", "Voador."] },
    { number: 3, name: "Venusauro", description: "Sua planta floresce quando está absorvendo energia solar. Ele permanece em movimento para buscar a luz solar.", types: ["Planta", "Veneno"], advantages: ["Fogo", "Gelo", "Psíquico", "Voador."] },

    { number: 4, name: "Charmander", description: "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.", types: ["Fogo"], advantages: ["Água", "Pedra", "Terrestre"] },
    { number: 5, name: "Charmeleon", description: "Tem uma natureza bárbara. Na batalha, ele chicoteia sua cauda ardente e corta com garras afiadas.", types: ["Fogo"], advantages: ["Água", "Elétrico", "Planta", "Lutador", "Inseto"] },
    { number: 6, name: "Charizard", description: "Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode causar incêndios florestais soprando chamas.", types: ["Fogo", "Voador."], advantages: ["Água", "Elétrico", "Pedra."] },

    { number: 7, name: "Squirtle", description: "Quando ele retrai seu longo pescoço em sua concha, ele esguicha água com força vigorosa.", types: ["Água"], advantages: ["Elétrico", "Planta."] },
    { number: 8, name: "Wartortle", description: "É reconhecido como um símbolo de longevidade. Se sua concha tem algas, esse Wartortle é muito antigo.", types: ["Água"], advantages: ["Elétrico", "Planta."] },
    { number: 9, name: "Blastoise", description: "Ele esmaga seu inimigo sob seu corpo pesado para causar desmaios. Em uma pitada, ele se retirará dentro de sua concha.", types: ["Água"], advantages: ["Elétrico", "Planta."] },
    
  ];
  
  function padNumber(number) {
    return String(number).padStart(3, '0');
  }  