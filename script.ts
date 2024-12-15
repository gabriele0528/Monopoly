interface Cards {
    name: string;
    type: string;
    description?: string;
    color?: string;
    price?: number;
    rent?: number[];
    houseCost?: number;
    hotelCost?: number;
    rentMultiplier?: number[];
    amount?: number;
    icons?: string;
}

interface Player {
    name: string;
    money: number;
    properties: string[];
    position: number;
    houses: { [propertyName: string]: number };
}

const cards: Cards[] = [
    {
        "name": "GO",
        "type": "special",
        "description": "Collect $200 when you pass.",
        "icons": "➙"
    },
    {
        "name": "Mediterranean Avenue",
        "type": "property",
        "color": "brown",
        "price": 60,
        "rent": [2, 10, 30, 90, 160, 250],
        "houseCost": 50,
        "hotelCost": 50
    },

    {
        "name": "New York Building",
        "type": "property",
        "color": "brown",
        "price": 60,
        "rent": [2, 10, 30, 90, 160, 250],
        "houseCost": 80,
        "hotelCost": 60
    },
    {
        "name": "Community Chest",
        "type": "special",
        "description": "Draw a Community Chest card."
    },
    {
        "name": "Baltic Avenue",
        "type": "property",
        "color": "brown",
        "price": 60,
        "rent": [4, 20, 60, 180, 320, 450],
        "houseCost": 50,
        "hotelCost": 50
    },
    {
        "name": "Income Tax",
        "type": "tax",
        "amount": 200,
        "icons": "💵"
    },
    {
        "name": "Reading Railroad",
        "type": "railroad",
        "price": 200,
        "rent": [25, 50, 100, 200]
    },
    {
        "name": "Oriental Avenue",
        "type": "property",
        "color": "light blue",
        "price": 100,
        "rent": [6, 30, 90, 270, 400, 550],
        "houseCost": 50,
        "hotelCost": 50
    },
    {
        "name": "Chance",
        "type": "special",
        "description": "Draw a Chance card."
    },
    {
        "name": "Vermont Avenue",
        "type": "property",
        "color": "light blue",
        "price": 100,
        "rent": [6, 30, 90, 270, 400, 550],
        "houseCost": 50,
        "hotelCost": 50
    },
    {
        "name": "Connecticut Avenue",
        "type": "property",
        "color": "light blue",
        "price": 120,
        "rent": [8, 40, 100, 300, 450, 600],
        "houseCost": 50,
        "hotelCost": 50
    },
    {
        "name": "Jail",
        "type": "special",
        "description": "Just visiting or in jail.",
        "icons": "🚫"
    },
    {
        "name": "St. Charles Place",
        "type": "property",
        "color": "pink",
        "price": 140,
        "rent": [10, 50, 150, 450, 625, 750],
        "houseCost": 100,
        "hotelCost": 100
    },
    {
        "name": "Electric Company",
        "type": "utility",
        "price": 150,
        "rentMultiplier": [4, 10]
    },
    {
        "name": "States Avenue",
        "type": "property",
        "color": "pink",
        "price": 140,
        "rent": [10, 50, 150, 450, 625, 750],
        "houseCost": 100,
        "hotelCost": 100
    },
    {
        "name": "Virginia Avenue",
        "type": "property",
        "color": "pink",
        "price": 160,
        "rent": [12, 60, 180, 500, 700, 900],
        "houseCost": 100,
        "hotelCost": 100
    },
    {
        "name": "St. James Place",
        "type": "property",
        "color": "orange",
        "price": 180,
        "rent": [14, 70, 200, 550, 750, 950],
        "houseCost": 100,
        "hotelCost": 100
    },
    {
        "name": "Tennessee Avenue",
        "type": "property",
        "color": "orange",
        "price": 180,
        "rent": [14, 70, 200, 550, 750, 950],
        "houseCost": 100,
        "hotelCost": 100
    },
    {
        "name": "New York Avenue",
        "type": "property",
        "color": "orange",
        "price": 200,
        "rent": [16, 80, 220, 600, 800, 1000],
        "houseCost": 100,
        "hotelCost": 100
    },
    {
        "name": "Free Parking",
        "type": "special",
        "description": "No action."
    },
    {
        "name": "Kentucky Avenue",
        "type": "property",
        "color": "red",
        "price": 220,
        "rent": [18, 90, 250, 700, 875, 1050],
        "houseCost": 150,
        "hotelCost": 150
    },
    {
        "name": "Indiana Avenue",
        "type": "property",
        "color": "red",
        "price": 220,
        "rent": [18, 90, 250, 700, 875, 1050],
        "houseCost": 150,
        "hotelCost": 150
    },
    {
        "name": "Illinois Avenue",
        "type": "property",
        "color": "red",
        "price": 240,
        "rent": [20, 100, 300, 750, 925, 1100],
        "houseCost": 150,
        "hotelCost": 150
    },
    {
        "name": "B&O Railroad",
        "type": "railroad",
        "price": 200,
        "rent": [25, 50, 100, 200]
    },
    {
        "name": "Atlantic Avenue",
        "type": "property",
        "color": "yellow",
        "price": 260,
        "rent": [22, 110, 330, 800, 975, 1150],
        "houseCost": 150,
        "hotelCost": 150
    },
    {
        "name": "Ventnor Avenue",
        "type": "property",
        "color": "yellow",
        "price": 260,
        "rent": [22, 110, 330, 800, 975, 1150],
        "houseCost": 150,
        "hotelCost": 150
    },
    {
        "name": "Water Works",
        "type": "utility",
        "price": 150,
        "rentMultiplier": [4, 10]
    },
    {
        "name": "Marvin Gardens",
        "type": "property",
        "color": "yellow",
        "price": 280,
        "rent": [24, 120, 360, 850, 1025, 1200],
        "houseCost": 150,
        "hotelCost": 150
    },
    {
        "name": "Go to Jail",
        "type": "special",
        "description": "Move directly to Jail. Do not pass GO, do not collect $200.",
        "icons": "🚫"
    },
    {
        "name": "Pacific Avenue",
        "type": "property",
        "color": "green",
        "price": 300,
        "rent": [26, 130, 390, 900, 1100, 1275],
        "houseCost": 200,
        "hotelCost": 200
    },
    {
        "name": "North Carolina Avenue",
        "type": "property",
        "color": "green",
        "price": 300,
        "rent": [26, 130, 390, 900, 1100, 1275],
        "houseCost": 200,
        "hotelCost": 200
    },
    {
        "name": "Pennsylvania Avenue",
        "type": "property",
        "color": "green",
        "price": 320,
        "rent": [28, 150, 450, 1000, 1200, 1400],
        "houseCost": 200,
        "hotelCost": 200
    },
    {
        "name": "Short Line",
        "type": "railroad",
        "price": 200,
        "rent": [25, 50, 100, 200]
    },
    {
        "name": "Park Place",
        "type": "property",
        "color": "dark blue",
        "price": 350,
        "rent": [35, 175, 500, 1100, 1300, 1500],
        "houseCost": 200,
        "hotelCost": 200
    },
    {
        "name": "Luxury Tax",
        "type": "tax",
        "amount": 100,
        "icons": "💵"
    },
    {
        "name": "Boardwalk",
        "type": "property",
        "color": "dark blue",
        "price": 400,
        "rent": [50, 200, 600, 1400, 1700, 2000],
        "houseCost": 200,
        "hotelCost": 200
    }
]

const boardTop = document.querySelector("#board-top") as HTMLElement;
const boardRight = document.querySelector("#board-right") as HTMLElement;
const boardBottom = document.querySelector("#board-bottom") as HTMLElement;
const boardLeft = document.querySelector("#board-left") as HTMLElement;
const diceButton = document.querySelector("#dice-button") as HTMLButtonElement;
const diceResult = document.querySelector("#dice-result") as HTMLElement;
const playerTurn = document.querySelector("#turned-player") as HTMLElement;

const players: Player[] = [
    {
        name: "Player 1",
        money: 1000,
        properties: [],
        position: 0,
        houses: {}
    },
    {
        name: "Player 2",
        money: 1000,
        properties: [],
        position: 0,
        houses: {}
    }
];

let firstPlayerPosition = 1;
let secondPlayerPosition = 1;
let currentPlayerIndex = 0;

function updateCardsInBoard(): void {
    boardTop.innerHTML = "";
    boardRight.innerHTML = "";
    boardBottom.innerHTML = "";
    boardLeft.innerHTML = "";

    const cardsWithContent = cards.map((card, index) => {
        const player1Houses = players[0].houses[card.name] || 0;
        const player2Houses = players[1].houses[card.name] || 0;
        const houseDisplay = player1Houses > 0 ? `🏠 x${player1Houses}` : 
                           player2Houses > 0 ? `🏠 x${player2Houses}` : '';
        
        return `
            <div class="monopoly-card d-flex flex-column">
                <div class="card-color" style="background-color: ${card.color}"></div>
                <span class="d-flex j-center text-center"><strong>${card.name}</strong></span>
                <span class="d-flex j-center" style="font-size: 30px;">${card.icons || ""}</span>
                <span class="d-flex j-center">${card.price ? "Card Price: " + card.price + "$" : ""}</span>
                <span class="d-flex j-center">${card.houseCost ? "House Price: " + card.houseCost + "$" : ""}</span>
                <span class="d-flex j-center">${card.hotelCost ? "Hotel Price: " + card.hotelCost + "$" : ""}</span>
                <span class="d-flex j-center">${card.amount ? "Tax Amount: " + card.amount + "$" : ""}</span>
                <span class="d-flex j-center">${houseDisplay}</span>
                <div class="d-flex gap-20 j-center">
                    ${index + 1 === firstPlayerPosition ? '<div class="first-player-position position-absolute">🦸‍♀️</div>' : ""}
                    ${index + 1 === secondPlayerPosition ? '<div class="second-player-position position-absolute">🦹️️</div>' : ""}
                </div>
            </div>
        `;
    });

    for (let i = 0; i < 10; i++) {
        boardTop.innerHTML += cardsWithContent[i];
    }
    for (let i = 10; i < 18; i++) {
        boardRight.innerHTML += cardsWithContent[i];
    }
    for (let i = 27; i >= 18; i--) {
        boardBottom.innerHTML += cardsWithContent[i];
    }
    for (let i = 35; i >= 28; i--) {
        boardLeft.innerHTML += cardsWithContent[i];
    }
}

function getCurrentCard(position: number): Cards {
    return cards[position - 1];
}

function ownsAllPropertiesOfColor(playerIndex: number, color: string | undefined): boolean {
    if (!color) return false;
    const propertiesOfColor = cards.filter(c => c.color === color);
    return propertiesOfColor.every(prop => players[playerIndex].properties?.indexOf(prop.name) !== -1);
}

function canBuyProperty(playerIndex: number, position: number): boolean {
    const card = getCurrentCard(position);
    const player = players[playerIndex];
    const purchasableTypes = ["property", "railroad", "utility"];
    
    return purchasableTypes.indexOf(card.type) !== -1 &&
           !!card.price &&
           player.money >= card.price &&
           players[0].properties.indexOf(card.name) === -1 &&
           players[1].properties.indexOf(card.name) === -1;
}

function canBuyHouse(playerIndex: number, propertyName: string): boolean {
    const property = cards.find(c => c.name === propertyName);
    if (!property) return false;
    
    const player = players[playerIndex];
    const currentHouses = player.houses[propertyName] || 0;
    
    return property.type === "property" && 
           !!property.houseCost && 
           player.money >= property.houseCost && 
           player.properties.indexOf(propertyName) !== -1 &&
           currentHouses < 4 && 
           ownsAllPropertiesOfColor(playerIndex, property.color);
}

function canBuyHotel(playerIndex: number, propertyName: string): boolean {
    const property = cards.find(c => c.name === propertyName);
    if (!property) return false;
    
    const player = players[playerIndex];
    const currentHouses = player.houses[propertyName] || 0;
    
    return property.type === "property" && 
           !!property.hotelCost && 
           player.money >= property.hotelCost && 
           player.properties.indexOf(propertyName) !== -1 &&
           currentHouses === 4 &&
           ownsAllPropertiesOfColor(playerIndex, property.color);
}

function handlePropertyFees(playerIndex: number, position: number): void {
    const card = getCurrentCard(position);
    const player = players[playerIndex];
    const otherPlayerIndex = playerIndex === 0 ? 1 : 0;

    if (card.type === "tax" && card.amount) {
        player.money -= card.amount;
        diceResult.innerHTML += `<p>${player.name} paid $${card.amount} in tax</p>`;
    } else if (card.type === "property" && players[otherPlayerIndex].properties.indexOf(card.name) !== -1) {
        const rentIndex = players[otherPlayerIndex].houses[card.name] || 0;
        const rent = card.rent ? card.rent[rentIndex] : 0;
        player.money -= rent;
        players[otherPlayerIndex].money += rent;
        diceResult.innerHTML += `<p>${player.name} paid $${rent} rent to ${players[otherPlayerIndex].name}</p>`;
    }
}

function buyProperty(): void {
    const position = currentPlayerIndex === 0 ? firstPlayerPosition : secondPlayerPosition;
    const card = getCurrentCard(position);
    const player = players[currentPlayerIndex];

    if (canBuyProperty(currentPlayerIndex, position)) {
        player.money -= card.price!;
        player.properties.push(card.name);
        player.houses[card.name] = 0;
        diceResult.innerHTML = `<p>${player.name} bought ${card.name}</p>`;
        updatePlayersDisplay();
    }
}

function updatePlayersDisplay(): void {
    [".first-player", ".second-player"].forEach((selector, index) => {
        const playerInfo = document.querySelector(selector) as HTMLElement;
        const player = players[index];
        const position = index === 0 ? firstPlayerPosition : secondPlayerPosition;
        const currentCard = getCurrentCard(position);

        playerInfo.innerHTML = `
            <div class="d-flex j-between">
                <span>Player ${index + 1}: ${index === 0 ? '🦸‍♀️' : '🦹️'}</span>
                <span class="money"><strong>Money: ${player.money}$</strong></span>
            </div>
            <div class="cards d-flex wrap gap-20 p-20">
                ${player.properties.map(prop => {
                    const card = cards.find(c => c.name === prop);
                    return `
                        <div class="own-card" style="border-top: 3px solid ${card?.color || 'transparent'}">
                            ${prop}
                            ${player.houses[prop] ? `<div class="house-count">
                                ${player.houses[prop] === 5 ? '🏨' : `🏠 x${player.houses[prop]}`}
                            </div>` : ''}
                        </div>
                    `;
                }).join('')}
            </div>
            <div class="buy-properties d-flex j-between gap-20">
                <button type="button" class="btn btn-primary" ${currentPlayerIndex === index && canBuyProperty(index, position) ? '' : 'disabled'}>Buy Property</button>
                <button type="button" class="btn btn-secondary" ${currentPlayerIndex === index && canBuyHouse(index, currentCard?.name) ? '' : 'disabled'}>Buy House</button>
                <button type="button" class="btn btn-success" ${currentPlayerIndex === index && canBuyHotel(index, currentCard?.name) ? '' : 'disabled'}>Buy Hotel</button>
            </div>
        `;
    });

    attachButtonListeners();
}

function attachButtonListeners(): void {
    document.querySelectorAll('.btn-primary').forEach((btn, index) => {
        (btn as HTMLElement).onclick = () => currentPlayerIndex === index && buyProperty();
    });

    document.querySelectorAll('.btn-secondary').forEach((btn, index) => {
        (btn as HTMLElement).onclick = () => {
            const position = currentPlayerIndex === 0 ? firstPlayerPosition : secondPlayerPosition;
            const card = getCurrentCard(position);
            const player = players[currentPlayerIndex];
            
            if (canBuyHouse(currentPlayerIndex, card.name) && currentPlayerIndex === index) {
                player.money -= card.houseCost!;
                player.houses[card.name] = (player.houses[card.name] || 0) + 1;
                diceResult.innerHTML = `<p>${player.name} bought a house on ${card.name}</p>`;
                updatePlayersDisplay();
                updateCardsInBoard();
            }
        };
    });

    document.querySelectorAll('.btn-success').forEach((btn, index) => {
        (btn as HTMLElement).onclick = () => {
            const position = currentPlayerIndex === 0 ? firstPlayerPosition : secondPlayerPosition;
            const card = getCurrentCard(position);
            const player = players[currentPlayerIndex];
            
            if (canBuyHotel(currentPlayerIndex, card.name) && currentPlayerIndex === index) {
                player.money -= card.hotelCost!;
                player.houses[card.name] = 5;
                diceResult.innerHTML = `<p>${player.name} bought a hotel on ${card.name}</p>`;
                updatePlayersDisplay();
                updateCardsInBoard();
            }
        };
    });
}

diceButton.addEventListener('click', () => {
    const diceRoll = Math.ceil(Math.random() * 6);
    diceResult.innerHTML = `<h2>You rolled: ${diceRoll}</h2>`;

    if (currentPlayerIndex === 0) {
        firstPlayerPosition += diceRoll;
        if (firstPlayerPosition > 36) {
            firstPlayerPosition -= 36;
            players[0].money += 200;
            diceResult.innerHTML += `<p>${players[0].name} passed GO, collected $200</p>`;
        }
        currentPlayerIndex = 1;
        playerTurn.innerHTML = "<h3>Your Turn: Player 2 🦹️</h3>";
        handlePropertyFees(0, firstPlayerPosition);
    } else {
        secondPlayerPosition += diceRoll;
        if (secondPlayerPosition > 36) {
            secondPlayerPosition -= 36;
            players[1].money += 200;
            diceResult.innerHTML += `<p>${players[1].name} passed GO, collected $200</p>`;
        }
        currentPlayerIndex = 0;
        playerTurn.innerHTML = "<h3>Your Turn: Player 1 🦸‍♀️</h3>";
        handlePropertyFees(1, secondPlayerPosition);
    }

    updateCardsInBoard();
    updatePlayersDisplay();
});

function startGame(): void {
    playerTurn.innerHTML = "<h3>Your Turn: Player 1 🦸‍♀️</h3>";
    updateCardsInBoard();
    updatePlayersDisplay();
}

startGame();