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
            url: 'https://pokeapi.co/api/v2/item/poke-ball',
            type:'GET'
        }).done(function(resp){
            $('#pokedex').html(resp.name);
            
        })
    })
    $(document).on('click','#carta',function(){
        
        
        $.ajax({
            url: 'https://pokeapi.co/api/v2/item/grass-mail',
            type:'GET'
        }).done(function(resp){
            $('#pokedex').html(resp.name);
            
        })
    })
    $(document).on('click','#disco',function(){
        
        
        $.ajax({
            url: 'https://pokeapi.co/api/v2/item/tm-case',
            type:'GET'
        }).done(function(resp){
            $('#pokedex').html(resp.name);
            
        })
    })
    $(document).on('click','#pociones',function(){
        
        
        $.ajax({
            url: 'https://pokeapi.co/api/v2/item/hp-up',
            type:'GET'
        }).done(function(resp){
            $('#pokedex').html(resp.name);
            
        })
    })
    
    
    
   
})