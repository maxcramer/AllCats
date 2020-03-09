function fetchData() {
    fetch("https://5e5932cd7777050014463360.mockapi.io/cats")
        .then(response => {
            if(!response.ok) {
                throw Error("Error!");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const html = data.map(cat => {
                return `<h3>${cat.name}</h3>`
            });
            console.log(html);
            document.querySelector('#app').innerHTML = '<h1>TESTING</h1>'
        })
        .catch(error => {
            console.log(error);
        });
}

fetchData();