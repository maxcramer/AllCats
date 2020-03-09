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
                return `
                <div class="cat">
                    <img src="${cat.image}" alt="${cat.name}" />
                    <h3>${cat.name}</h3>
                    <p>${cat.description}</p>
                </div>
                `
            }).join('');
            // console.log(html);
            document.querySelector('#app').innerHTML = html;
        })
        .catch(error => {
            console.log(error);
        });
}

fetchData();