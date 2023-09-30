$(document).ready(function () {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/item/',
        type: 'GET'
    }).done(function (resp) {
        var listadoPomemon = resp.results;
        listadoPomemon.forEach(function (characters) {
            $.ajax({
                url: characters.url,
                type: 'GET'
            }).done(function(itemData){
                var imageUrl = itemData.sprites.default;
                var template = ` <div class="card bg-black text-white border border-warning-subtle  " id="pinchar" style="width: 19rem;">
                <div class="img">
                    <img src="${imageUrl}" class="card-img-top rounded-4" alt="..."  >
                </div>
                <div class=" card card-body bg-black text-white card d-flex align-items-center justify-content-center" >
                    <p class="card-text text-center "> <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary " data-bs-toggle="modal" id="btn" data-bs-target="#exampleModal"  >
                        ${itemData.name}
                          </button></p>
                </div>
              </div>
            `;
            $('#pokeList').append(template);
            });
        });
    });
});
