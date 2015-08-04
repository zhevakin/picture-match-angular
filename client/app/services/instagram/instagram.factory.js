const clientId = '75eea1f2dc3a4a37a5806e031a1a1faa';

let Instagram = ($http) => {
    let getPopularPhotos = (callback) => {
        const endPointPopular = 'https://api.instagram.com/v1/media/popular?client_id=' + clientId + '&callback=JSON_CALLBACK';

        const cache = localStorage.getItem(endPointPopular);

        if (cache) {
            var cachedData = JSON.parse(cache);
            callback(cachedData);
            return;
        }

        $http.jsonp(endPointPopular).success(function (response) {
            callback(response.data);

            // Cache result
            if (!localStorage[endPointPopular]) {
                localStorage.setItem(endPointPopular, JSON.stringify(response.data));
            }
        });
    };

    let getUserId = (username, callback) => {
        const endPointUserSearch = 'https://api.instagram.com/v1/users/search?&client_id=' + clientId + '&callback=JSON_CALLBACK' + '&q=' + username;

        $http.jsonp(endPointUserSearch).success(function (response) {
            callback(response.data[0].id);
        });
    };

    let getUserPhotos = (username, callback) => {

        getUserId(username, (userId) => {
            const endPointUserMedia = 'https://api.instagram.com/v1/users/' + userId + '/media/recent/?client_id=' + clientId + '&callback=JSON_CALLBACK';

            const cache = localStorage.getItem(endPointUserMedia);

            if (cache) {
                var cachedData = JSON.parse(cache);
                callback(cachedData);
                return;
            }

            $http.jsonp(endPointUserMedia).success(function (response) {
                callback(response.data);

                // Cache result
                if (!localStorage[endPointUserMedia]) {
                    localStorage.setItem(endPointUserMedia, JSON.stringify(response.data));
                }
            });
        });

    };


    return {
        getPopularPhotos,
        getUserPhotos
    };
};

Instagram.$inject = ['$http'];

export {Instagram};