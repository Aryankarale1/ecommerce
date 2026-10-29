let container = document.getElementById("container");

function displayData(data){
    for (let i of data){
        container.innerHTML += `
                <div class='card'>
                    <img src = '${i.image}'/>
                    <h2> ${i.title}</h2>
                    <p> ${i.price}</p>
                    <button>Order Now </button>
                </div>
        `
    }
}


async function getData() {
    let res = await fetch("https://fakestoreapi.com/products");
    res = await res.json();
    displayData(res);
}

getData();