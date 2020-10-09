let base_url = "https://deckofcardsapi.com/api/deck"
let $card = $('#card');
let $newCardBtn = $('#new-card');

async function newDeck() {
    let res = await axios.get(`${base_url}/new/shuffle/?deck_count=1`);
    return res.data.deck_id;
}

async function pickCard(deck_id) {
    let res = await axios.get(`${base_url}/${deck_id}/draw/?count=1`);
    return {
        img: res.data.cards[0].image,
        remaining: res.data.remaining
    }
}

async function run() {
    let deck_id = await newDeck();
    $newCardBtn.on("click", async () => {
        let newCard = await pickCard(deck_id);
        $card.attr("src", newCard.img);
        console.log(`${newCard.remaining} cards remain`);
    });
}

run();






