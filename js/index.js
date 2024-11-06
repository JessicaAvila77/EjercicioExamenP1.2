
fetch("https://fakestoreapi.com/products")
    .then (response =>  response.json())
    .then (products => {
        //no lleva elementos antes, por eso va vacia
        let card = '';

        for (let db of products){
            card += 
            ` 
            <div class="row mt-5">
                <div class="col-5">
                    <div class="card" style="width: 18rem;">
                        <img src="${db.image}" class="card-img-top">
                        <div class="card-body">
                        <h5 class="card-title">"${db.title}"</h5>
                    </div>

                    <ul class="list-group ">
                        <li class="list-group-item">Description: ${db.description}</li>
                        <li class="list-group-item">Price: $ ${db.price}</li>
                        <li class="list-group-item">Category: ${db.category}</li>
                    </ul>

                </div>             
                                  
            </div>
           `
        }

        document.getElementById('card').innerHTML = card
    })