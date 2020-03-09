function fetchData() {
    fetch("https://5e5932cd7777050014463360.mockapi.io/cats")
        .then(response => {
            if(!response.ok) {
                throw Error("Error!");
            }
            return response.json();
        })
        .then(data => {
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
                            <button onClick="adopt()" class="take__button">TAKE HOME</button>
                        </div>
                    </div>
                `
            }).join('');
            document.querySelector('#app').innerHTML = html;
        })
        .catch(error => {
            console.log(error);
        });
}

fetchData();


function adopt() {
        var div = document.createElement('div');
        div.id = 'adopt__details';

        document.getElementsByTagName('body')[0].appendChild(div);
        div.innerHTML += "<h2>Please enter your details</h2>";
        div.innerHTML += "<div><h4>Name:<h4><input/></div>";
        div.innerHTML += "<div><h4>Email<h4><input/></div>";
        div.innerHTML += "<div><h4>Phone Number<h4><input/></div>";
        div.innerHTML += "<div><h4>Address<h4><input/></div>";
        div.innerHTML += "<div><button onClick='hide()' class='submit__button'>Submit Details</button></div>";
}

function hide() {
    var elm = document.getElementById('adopt__details');
    elm.parentNode.removeChild(elm);
}