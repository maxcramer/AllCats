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
                    <div class="img__parent">
                        <img class="cat__img" src="${cat.image}" alt="${cat.name}" />
                    </div>  
                    <div class="cat__info">  
                        <h2>${cat.name}</h2>
                        <p class="description">${cat.description}</p>
                    </div>
                    <div class="button__parent">
                        <button class="take__button">TAKE HOME</button>
                    </div>
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