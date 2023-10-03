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
        $('#nombre').empty();
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
                          
                            $.ajax({
                                url:guardarItem[j].url,
                                type:'GET'
                            }).done(function(name){
                                var cd= name.effect_entries;
                                for (let w = 0; w < cd.length; w++) {
                                    console.log(cd[w].short_effect)
                                    var template = `<tr class="Justify-content-bettwen">
                                    <td class="d-flex justify-content-between" >
                                    <span title="${cd[w].short_effect}">${guardarItem[j].name}</span>
                                    <span>${name.cost}¥</span>
                                    </td>
                                    </tr>`;
                                    $('#nombre').append(template);
                                }
                            })

                         
                            
                        }
                    })


                }

            })
            
           
                       
        })
    
   
        $(document).on('click','#bici',function(){
            $('#nombre').empty();
            $.ajax({
                url:'https://pokeapi.co/api/v2/item-pocket/8/',
                type:'GET'
            }).done(function(itCat){
                var saveIt=itCat.categories;
                for (var t = 0; t < saveIt.length; t++) {
                   $.ajax({
                    url:saveIt[t].url,
                    type:'GET'
                   }).done(function(cat){
                    var saveCat = cat.items;
                    for (let s = 0; s < saveCat.length; s++) {
                        console.log(saveCat[s].url)
                        $.ajax({
                            url:saveCat[s].url,
                            type:'GET'
                        }).done(function(cost){
                            var template = `<tr class="Justify-content-bettwen">
                            <td class="d-flex justify-content-between" >
                            
                            <span >${saveCat[s].name}</span>
                            <span >${cost.cost}¥</span>
                            </td>
  
  
                        </tr>`;
                            $('#nombre').append(template);
                        })
                        
                    }
                   })
                    
                }
            })
        })
    })

       


   
    

    
    
   
