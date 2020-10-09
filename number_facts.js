let base_url = "http://numbersapi.com"
let $numberFacts = $("#number-facts")

async function getNumberFacts(number, count) {
    let promises = [];
    for (i of new Array(count)) {
        promises.push(axios.get(`${base_url}/4?json`));
    }
    let res = await Promise.all(promises)
    return res
}
getNumberFacts(4, 4)
    .then(funFacts => {
        funFacts.forEach(f => $numberFacts.append(`<li>${f.data.text}</li>`));
    })





