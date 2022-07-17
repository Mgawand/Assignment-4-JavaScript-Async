function getBoard(callback) {
  // console.log('Fetching board...');
  return setTimeout(function() {
    let board = {
      id: "def453ed",
      name: "Thanos"
    };
    // console.log('Received board');
    callback(board);
  }, 1000);
}

function getLists(boardId, callback) {
  // console.log(`Fetching lists for board id ${boardId}...`);
  return setTimeout(function() {
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
    // console.log(`Received lists for board id ${boardId}`);
    callback(lists[boardId]);
  }, 1000);
}

function getCards(listId, callback) {
  // console.log(`Fetching cards for list id ${listId}...`);
  return setTimeout(function() {
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
    // console.log(`Received cards for list id ${listId}`);
    callback(cards[listId]);
  }, 1000);
}

// Task 1 board -> lists -> cards for list qwsa221

function fetchSingleCards(card_Id, callback){
  getBoard((board_Id) => {
    getLists(board_Id.id, (listsId) =>{
      let cardId = listsId.map(obj => {
        if (obj.id == card_Id) {
          return obj;
        }
      })
      console.log(cardId)
      getCards(cardId[0].id, (cards) => {
        callback(cards)
      })
    })
  })
}
const mainFunc1 = (card) => {
  console.log(card)
}

fetchSingleCards('qwsa221', mainFunc1)

// Task 2 board -> lists -> cards for list qwsa221 and cards for list jwkh245 simultaneously

function fetchTwoCards(card_Id1, card_Id2, cb){
  getBoard((board_Id) =>{
    getLists(board_Id.id, (listsId) => {
      let cardsId = listsId.map(obj => {
        if(obj.id === card_Id1 || obj.id === card_Id2){
          console.log(obj)
          return obj;
        }
      })
      cardsId.forEach(obj => getCards(obj.id, (card) => {
        cb(card)
      }))
    })
  })
}
const mainFunc2 = (card) => {
  console.log(card)
}

fetchTwoCards('qwsa221', 'jwkh245', mainFunc2)

// Task 3 board -> lists -> cards for all lists simultaneously

function fetchAllCards(cb){
  getBoard((board_Id) => {
    getLists(board_Id.id, (listsId) => {
      console.log(listsId)
      listsId.forEach(obj => getCards(obj.id, (card) => {
        cb(card)
      }))
    })
  })
}
const mainFunc3 = (card) => {
  console.log(card)
} 

fetchAllCards(mainFunc3)