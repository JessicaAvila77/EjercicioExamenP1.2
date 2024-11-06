
fetch("https://fakestoreapi.com/products")
    .then (response =>  response.json())
    .then (ropa => {
        //no lleva elementos antes, por eso va vacia
        let card = '';

        for (let db of ropa){
            card += 
            ` 
            <div class="row mt-5">
                <div class="col">
                    <div class="card" style="width: 18rem;">
                        <img src="${db.image}" class="card-img-top">
                        <div class="card-body">
                        <h5 class="card-title">"${db.title}"</h5>
                    </div>
                </div>
                
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Item: ${db.id}</li>
                    </ul>
                
            </div>
           `
        }

        document.getElementById('card').innerHTML = card
    })