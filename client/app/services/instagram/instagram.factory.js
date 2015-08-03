const clientId = '75eea1f2dc3a4a37a5806e031a1a1faa';

let Instagram = ($http) => {
    let fetchPopular = (callback) => {

        const endPoint = 'https://api.instagram.com/v1/media/popular?client_id=' + clientId + '&callback=JSON_CALLBACK';
        const cache = localStorage.getItem(endPoint);

        if (cache) {
            var cachedData = JSON.parse(cache);
            callback(cachedData);
            return;
        }

        $http.jsonp(endPoint).success(function (response) {
            callback(response.data);

            // Cache result
            if (!localStorage[endPoint]) {
                localStorage.setItem(endPoint, JSON.stringify(response.data));
            }
        });
    };

    return {
        fetchPopular
    };
};

Instagram.$inject = ['$http'];

export {Instagram};