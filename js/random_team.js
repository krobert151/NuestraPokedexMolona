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
        $(document).on('click', '.card', function () {
            var random = Math.floor(Math.random() * pokeCount + 1)
            var n = $(this).attr('pokeball');
            var template = `<div class="m-1 my-3 row">
            <div class="col-3">
                <div class="d-flex justify-content-center position-relative" id="imgs${n}">
                    <img src=""
                        alt="" width="80%">
                    <div class="objetoObt" id="objfoto${n}">
                        <img src=""
                            alt="item" height="100%">
                    </div>
                </div>
                <div class="row d-flex justify-content-center ">
                    <div class="col-10 row">
                        <div class="col-9">
                            <div class="hp row d-flex justify-content-between">
                                <span class="col-2 p-0 text-center">
                                    HP
                                </span>
                                <div class="col p-0">
                                </div>
                            </div>
                        </div>
                        <div class="col p-0 d-flex justify-content-center align-items-center">
                            <span class="hpstat" id="HP${n}"></span>
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center ">
                    <div class="col-8 row my-5 stats">
                        <div class="col-12 row">
                            <div class="col-4 text-center mb-3">
                                <span>HP:</span>
                                <span id="HP2${n}"></span>
                            </div>
                            <div class="col-4 text-center">
                                <span>AT:</span>
                                <span id="AT${n}"></span>
                            </div>
                            <div class="col-4 text-center">
                                <span>DF:</span>
                                <span id="DF${n}"></span>
                            </div>
                        </div>
                        <div class="col-12 row mt-2">
                            <div class="col-4 text-center">
                                <span>SA:</span>
                                <span  id="SA${n}"></span>
                            </div>
                            <div class="col-4 text-center">
                                <span>SD:</span>
                                <span id="SD${n}"></span>
                            </div>
                            <div class="col-4 text-center">
                                <span>SP:</span>
                                <span id="SP${n}"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row">
                    <div class="row col-12 d-flex justify-content-evenly mt-5" >
                        <div class="col-5 attakdetails py-1 px-3" id="att0${n}">
                            <div class="row">
                                <div class="col-12 text-center mt-2 mb-3" >
                                    <span id="att0name${n}"></span>
                                </div>
                                <div class="col-6 text-center mb-3">
                                    <span>POTENC.</span>
                                    <span id="att0POTENC${n}"></span>
                                </div>
                                <div class="col-6 text-center mb-3">
                                    <span>ACC.</span>
                                    <span id="att0ACC${n}"></span>
                                </div>
                                <div class="col-6 text-center mb-3">
                                    <span id="att0TYPE${n}"></span>
                                </div>
                                <div class="col-6 text-center mb-3">
                                    <span>PP.</span>
                                    <span id="att0PP${n}"></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-5 attakdetails py-1 px-3" id="att1${n}">
                            <div class="row">
                                <div class="col-12 text-center mt-2 mb-3" >
                                    <span id="att1name${n}"></span>
                                </div>
                                <div class="col-6 text-center mb-3">
                                    <span>POTENC.</span>
                                    <span id="att1POTENC${n}"></span>
                                </div>
                                <div class="col-6 text-center mb-3">
                                    <span>ACC.</span>
                                    <span id="att1ACC${n}"></span>
                                </div>
                                <div class="col-6 text-center mb-3">
                                    <span id="att1TYPE${n}"></span>
                                </div>
                                <div class="col-6 text-center mb-3">
                                    <span>PP.</span>
                                    <span id="att1PP${n}"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row col-12 d-flex justify-content-evenly mt-5" >
                        <div class="col-5 attakdetails py-1 px-3" id="att2${n}">
                            <div class="row">
                                <div class="col-12 text-center mt-2 mb-3">
                                    <span id="att2name${n}"></span>
                                </div>
                                <div class="col-6 text-center mb-3">
                                    <span>POTENC.</span>
                                    <span id="att2POTENC${n}"></span>
                                </div>
                                <div class="col-6 text-center mb-3">
                                    <span>ACC.</span>
                                    <span id="att2ACC${n}"></span>
                                </div>
                                <div class="col-6 text-center mb-3">
                                    <span id="att2TYPE${n}"></span>
                                </div>
                                <div class="col-6 text-center mb-3">
                                    <span>PP.</span>
                                    <span id="att2PP${n}"></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-5 attakdetails py-1 px-3" id="att3${n}">
                            <div class="row">
                                <div class="col-12 text-center mt-2 mb-3">
                                    <span id="att3name${n}"></span>
                                </div>
                                <div class="col-6 text-center mb-3">
                                    <span>POTENC.</span>
                                    <span id="att3POTENC${n}"></span>
                                </div>
                                <div class="col-6 text-center mb-3">
                                    <span>ACC.</span>
                                    <span id="att3ACC${n}"></span>
                                </div>
                                <div class="col-6 text-center mb-3">
                                    <span id="att3TYPE${n}"></span>
                                </div>
                                <div class="col-6 text-center mb-3">
                                    <span>PP.</span>
                                    <span id="att3PP${n}"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-evenly mt-5 pt-3">
                    <div class="col-5 text-center">
                        <span>
                            Ability:
                        </span>
                        <span id="abilityName${n}"></span>
                    </div>
                    <div class="col-5 text-center">
                        <span>
                            Item:
                        </span>
                        <span id="itemName${n}">
                        </span>
                    </div>
                </div>
            </div>
        </div>`;
            $('#pokobt'+n).append(template);
            $(this).removeClass('card');
            $(this).children().attr('src',`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${random}.png`);
            $(this).removeAttr('data-bs-toggle');
            $(this).removeAttr('data-bs-target');
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon/${random}`,
                type: 'GET'
            }).done(function (poke) {
                var type1 = poke.types[0].type.name;
                $('#name').text(poke.name.toUpperCase());
                $('#imgs'+n).children('img').attr('src',`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`)
                $('#HP'+n).text(poke.stats[0].base_stat+"/"+poke.stats[0].base_stat)
                $('#HP2'+n).text(poke.stats[0].base_stat)
                $('#AT'+n).text(poke.stats[1].base_stat)
                $('#DF'+n).text(poke.stats[2].base_stat)
                $('#SA'+n).text(poke.stats[3].base_stat)
                $('#SD'+n).text(poke.stats[4].base_stat)
                $('#SP'+n).text(poke.stats[5].base_stat)
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
                $('#pokobt'+n).css("background", bgcolor);
                $('#pokobt'+n).css("border-radius", "20pt");
                var randomObjNumber = Math.floor(Math.random() * 41);
                $.ajax({
                    url: "https://pokeapi.co/api/v2/item-attribute/3",
                    type: "GET"
                }).done(function(obj){
                    
                    $.ajax({
                        url: obj.items[randomObjNumber].url,
                        type: 'GET'
                    }).done(function(randomObjt){
                        $('#objfoto'+n).children().attr('src',randomObjt.sprites.default);
                        $('#itemName'+n).text(randomObjt.name);
                    });
                });
                $('#abilityName'+n).text(poke.abilities[0].ability.name);
                for (let i = 0; i < 4; i++) {
                    //IMPORTANTE EN LA MISMA OPERACION QUE SE TIENE ESCRIBIR EN EL CONTENEDOR DE ABAJO                    
                    //YA QUE NO SE PUEDE GUARDAR LAS VARIABLES AFUERA DEL DONE
                    var randomAtt = Math.floor(Math.random() * poke.moves.length + 1);
                    var moveUrl = poke.moves[randomAtt].move.url;
                    $.ajax({
                        url: moveUrl,
                        type: 'GET'
                    }).done(function (move) {
                        var moveType = move.type.name;
                        $('#att' + i).children('.attack-name').children().text(move.name.toUpperCase());
                        $('#att'+i+'name'+n).text(move.name.toUpperCase())
                        $('#att' + i).children('.pp').children().children().eq(1).text(move.pp + "/" + move.pp);
                        $('#att' + i).children('.attack-type').children().removeClass();
                        $('#att' + i).children('.attack-type').children().addClass('pkm-type-random');
                        $('#att' + i).children('.attack-type').children().addClass('attack-type');
                        $('#att'+i+n).addClass(move.type.name);
                        $('#att' + i).children('.attack-type').children().addClass(move.type.name);
                        $('#att' + i).children('.attack-type').children().text(moveType.toUpperCase(),);
                        if(move.power != null){
                            $('#att'+i+'POTENC'+n).text(move.power);
                        }else{
                            $('#att'+i+'POTENC'+n).text("-");
                        }
                        if(move.accuracy != null){
                            $('#att'+i+'ACC'+n).text(move.accuracy);
                        }else{
                            $('#att'+i+'ACC'+n).text("-");
                        }
                        $('#att'+i+'TYPE'+n).text(move.damage_class.name.toUpperCase());
                        if(move.pp != null){
                            $('#att'+i+'PP'+n).text("-");
                        }else{
                            $('#att'+i+'PP'+n).text(move.pp);
                        }
                    });
                }
            });
        })
    });
});