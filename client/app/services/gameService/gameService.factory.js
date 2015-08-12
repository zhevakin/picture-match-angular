import angular from 'angular';

const clientId = '75eea1f2dc3a4a37a5806e031a1a1faa';

let Game = (instagram) => {
    let cards = [];

    let shuffleArray = function (array) {
        let m = array.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    };

    let getPhotos = (gameMode, username, callback) => {

        if (gameMode == 'user') {
            instagram.getUserPhotos(username, (data) => {
                data.length = 10;

                let dataCopy = angular.copy(data);

                data = data.concat(dataCopy);

                let i = 0;
                data.map((item) => {
                    item.index = i;
                    i++;
                });

                data = shuffleArray(data);

                callback(data);
            });
        } else if (gameMode == 'popular') {
            instagram.getPopularPhotos((data) => {
                data.length = 10;

                let dataCopy = angular.copy(data);

                data = data.concat(dataCopy);

                let i = 0;
                data.map((item) => {
                    item.index = i;
                    i++;
                });

                data = shuffleArray(data);

                callback(data);
            });
        } else {

        }

    };

    let getState = () => {
        return cards;
    };


    return {
        getPhotos,
        getState
    };
};

Game.$inject = ['instagram'];

export {Game};