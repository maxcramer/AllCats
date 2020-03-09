let data = "https://5e5932cd7777050014463360.mockapi.io/cats";

fetch(data)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));