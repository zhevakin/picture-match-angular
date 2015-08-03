import angular from 'angular';

const clientId = '75eea1f2dc3a4a37a5806e031a1a1faa';

let shuffleArray = function (array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
};

let doubleArray = function (array) {

    return array;
};

let Game = (instagram) => {
    let cards = [],
        card1,
        card2;

    let loadCards = (callback) => {

        instagram.fetchPopular((data) => {
            data.length = 10;

            let dataCopy = angular.copy(data);

            data = data.concat(dataCopy);

            let i = 0;
            data.map((item) => {
                item.index = i;
                i++;
            });

            data = shuffleArray(data);
            console.log(data);

            callback(data);
        });

    };

    let getState = () => {
        return cards;
    };

    return {
        loadCards,
        getState
    };
};

Game.$inject = ['instagram'];

export {Game};