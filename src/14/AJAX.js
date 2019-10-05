const getJSON = function (url) {
    const promise = new Promise((resolve, reject) => {
        const handler = () => {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
        const client = new XMLHttpRequest();
        client.open('GET', url);
        client.onreadystatechange = handler;
        client.responseType = 'json';
        client.setRequestHeader('Accept', 'application/json');
    });
    return promise;
};
getJSON('http://www.lzhlo.top/admin/product/show?page=1&limit=20').then((json) => {
    console.log('Contents: ' + json.length);
}, (error) => {
    console.log('Error' + error);
});