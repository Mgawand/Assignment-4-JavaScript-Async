function getBoard() {
  return new Promise((resolve, reject) => {
    console.log('Fetching board...');
    setTimeout(function() {
      let board = {
        id: "def453ed",
        name: "Thanos"
      };
      console.log('Received board');
      resolve(board);
    }, 1000);
  });
}

function getLists(boardId) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching lists for board id ${boardId}...`);
    setTimeout(function() {
      let lists = {
        def453ed: [
          {
            id: "qwsa221",
            name: "Mind"
          },
          {
            id: "jwkh245",
            name: "Space"
          },
          {
            id: "azxs123",
            name: "Soul"
          },
          {
            id: "cffv432",
            name: "Time"
          },
          {
            id: "ghnb768",
            name: "Power"
          },
          {
            id: "isks839",
            name: "Reality"
          }
        ]
      };
      console.log(`Received lists for board id ${boardId}`);
      resolve(lists[boardId]);
    }, 500);
  });
}

function getCards(listId) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching cards for list id ${listId}...`);
    setTimeout(function() {
      let cards = {
        qwsa221: [
          {
            id: "1",
            description: `Having acquired the Power Stone, one of the six Infinity Stones,from the planet Xandar`
          },
          {
            id: "2",
            description: `Having acquired the Power Stone, one of the six Infinity Stones,from the planet Xandar`
          },
          {
            id: "3",
            description: `Having acquired the Power Stone, one of the six Infinity Stones,from the planet Xandar`
          }
        ],
        jwkh245: [
          {
            id: "1",
            description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
          },
          {
            id: "2",
            description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
          },
          {
            id: "3",
            description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
          },
          {
            id: "4",
            description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
          }
        ],
        azxs123: [
          {
            id: "1",
            description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
          },
          {
            id: "2",
            description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
          }
        ],
        cffv432: [
          {
            id: "1",
            description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
          },
          {
            id: "2",
            description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
          }
        ],
        ghnb768: [
          {
            id: "1",
            description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
          },
          {
            id: "2",
            description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
          }
        ]
      };
      console.log(`Received cards for list id ${listId}`);
      resolve(cards[listId] || []);
    }, 1500);
  });
}

// Task 1 board -> lists -> cards for list qwsa221

function fetchSingleCards(){
  let board = 'qwsa221';
  return getBoard()
  .then(boardId => getLists(boardId.id))
  .then(listId => {
    let card = listId.map(id => {
      if(id.id == board){
        return id
      }
    })
    return getCards(card[0].id)
  })
  .then(cards => console.log(cards))
}
fetchSingleCards()

// Task 2 board -> lists -> cards for list qwsa221 and cards for list jwkh245 simultaneously


function fetchTwoCards(){
  let board1 = 'qwsa221';
  let board2 = 'jwkh245';
  return getBoard()
  .then(boardId => getLists(boardId.id))
  .then(listId => {
    let list = listId.filter(id  => id.id === board1 || id.id === board2)
    list.forEach(element => {
      getCards(element.id).then(cards => console.log(cards))
    })
  })
}
fetchTwoCards()

// Task 3 board -> lists -> cards for all lists simultaneously


function fetchAllCards(){
  return getBoard()
  .then(boards => getLists(boards.id))
  .then(boards => {
    boards.forEach(obj => getCards(obj.id)
      .then(cards => console.log(boards)))    
    })
}
fetchAllCards()