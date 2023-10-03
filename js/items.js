/*$(document).ready(function () {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/item-pocket/',
        type: 'GET'
    }).done(function (resp) {
        var listadoPomemon = resp.results;
        var id=1;
        var idPersonaje = 1;
        listadoPomemon.forEach(function (characters) {
           
                var template = `<div class="col-12 col-md-3 col-xl-2 col-xxl-1 card btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" personajeid="${idPersonaje}">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" class="card-img" alt="...">
                </div>`
            ;
            $('#pokeList').append(template);
            });
        });
    });
*/
$(document).ready(function(){

    $(document).on('click','#poke',function(){

        $.ajax({
            url: 'https://pokeapi.co/api/v2/item-pocket/1/',
            type:'GET'
        }).done(function(resp){
            var arrcat = resp.categories;
                for (let i = 0; i < arrcat.length; i++) {

                    $.ajax({
                        url: arrcat[i].url,
                        type: 'GET'
                    }).done(function(resp){
                        var guardarItem = resp.items;
                        for (let j = 0; j < guardarItem.length; j++) {
                          console.log(guardarItem[j]);
                                        

                          var template = `<tr>
                          <td >
                          <span>Nombre</span>
        <span >${guardarItem[j].name}</span>
                          </td>


                      </tr>`;
                          $('#nombre').append(template);
                            
                        }
                    })


                }

            })
            
           
                       
        })
    })
    

    
    
   
