$(document).ready(() => {


    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon?limit=1010&offset=0',
        type: 'GET'
    }).done(function (a) {
        var pokeList = a.results;
        var pokeCount = pokeList.length;

        $(document).on('click', '*', function () {
            $('#type1').parent().removeClass();
            $('#type2').parent().removeClass();
            if ($('pkm-type'))
                $('.pkm-type').removeClass();
        })

        $(document).on('click', '.pokeball', function () {

            var random = Math.floor(Math.random() * pokeCount + 1)
            var numPokeball = $(this).attr('pokeball');


            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon/${random}`,
                type: 'GET'
            }).done(function (poke) {



                var type1 = poke.types[0].type.name;
                $('#name').text(poke.name);
                $('#pkmnFoto').attr('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`)
                $('#type1').text(type1);
                $('#type1').parent().addClass('pkm-type');
                $('#type1').parent().addClass('mx-4');
                $('#type1').parent().addClass('pkm-type-random');
                $('#type1').parent().addClass(type1);
                var color_temporal1 = $('#type1').parent().css("background-color");
                var color_temporal1 = $('#type1').parent().css("background-color");
                var bgcolor;
                if (poke.types[1]) {
                    var type2 = poke.types[1].type.name;
                    $('#type2').text(type2);
                    $('#type2').parent().addClass('pkm-type');
                    $('#type2').parent().addClass(type2);
                    $('#type2').parent().addClass('mx-4');
                    $('#type2').parent().addClass('pkm-type-random');
                    var color_temporal2 = $('#type2').parent().css("background-color");
                    bgcolor = 'linear-gradient(338deg, ' + color_temporal2 + ' 0%, ' + color_temporal1 + ' 100%)';
                } else {
                    $('#type2').parent().removeClass();
                    $('#type2').text('');
                    bgcolor = 'linear-gradient(338deg, ' + color_temporal1 + ' 0%, ' + color_temporal1 + ' 100%)';
                }
                $('.modal-content').css("background", bgcolor);




                for (let i = 0; i < 4; i++) {
                    //IMPORTANTE EN LA MISMA OPERACION QUE SE TIENE ESCRIBIR EN EL CONTENEDOR DE ABAJO                    
                    //YA QUE NO SE PUEDE GUARDAR LAS VARIABLES AFUERA DEL DONE
                    var randomAtt = Math.floor(Math.random() * poke.moves.length + 1);
                    var moveUrl = poke.moves[randomAtt].move.url;

                    $.ajax({
                        url: moveUrl,
                        type: 'GET'
                    }).done(function (move) {

                        $('#att' + i).children('.attack-name').children().text(move.name)
                        $('#att' + i).children('.pp').children().eq(2).text(move.pp)
                    })





                }


            })



        })





    });
});