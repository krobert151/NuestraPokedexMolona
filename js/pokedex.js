$(document).ready(() => {

    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon?limit=1010&offset=0',
        type: 'GET'
    }).done(function (a) {
        var pokeLis = a.results;
        var i = 1;
        pokeLis.forEach(poke => {
            var modalId = `modal-${i}`; // Genera un ID único para cada modal
            var template = `<div class="col-12 col-md-3 col-xl-2 col-xxl-1 card btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" personajeid="${i}">
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" class="card-img" alt="...">
                            </div>`;
                $('#pokeList').append(template);
                i++;
            });
        });
        $(document).on('click', '*', function () {
            $('#type1').parent().removeClass();
            $('#type2').parent().removeClass(); 
            if($('pkm-type'))
            $('.pkm-type').removeClass();
        })
        $(document).on('click', '.card', function () {
            var personajeid = $(this).attr('personajeid');
            $.ajax({
                url: 'https://pokeapi.co/api/v2/pokemon/' + personajeid,
                type: 'GET'
            }).done(function (poke) {
                var type1 = poke.types[0].type.name
                $('.pokesprite').attr('src', poke.sprites.front_default);
                $('#name').text(poke.species.name.toUpperCase());
                $('#height').text(poke.height);
                $('#weight').text(poke.weight);
                $('#pokedex').text(poke.id);
                $('#ability').text(poke.abilities[0].ability.name);
                $('#type1').text(type1);
                $('#type1').parent().addClass('pkm-type');
                $('#type1').parent().addClass(type1);
                var color_temporal1 = $('#type1').parent().css("background-color");
                var bgcolor;
                if (poke.types[1]) {
                    var type2 = poke.types[1].type.name;
                    $('#type2').text(type2);
                    $('#type2').parent().addClass('pkm-type');
                    $('#type2').parent().addClass(type2);
                    var color_temporal2 = $('#type2').parent().css("background-color");
                    bgcolor = 'linear-gradient(338deg, '+color_temporal2+' 0%, '+color_temporal1+' 100%)';
                } else {
                    $('#type2').parent().removeClass(); 
                    $('#type2').text('');
                    bgcolor = 'linear-gradient(338deg, '+color_temporal1+' 0%, '+color_temporal1+' 100%)';
                }
                $('.modal-content').css("background",bgcolor);
                $('#hp').text(poke.stats[0].base_stat);
                $('#attack').text(poke.stats[1].base_stat);
                $('#defense').text(poke.stats[2].base_stat);
                $('#special-attack').text(poke.stats[3].base_stat);
                $('#special-defense').text(poke.stats[4].base_stat);
                $('#speed').text(poke.stats[5].base_stat);
            });
        });
    });