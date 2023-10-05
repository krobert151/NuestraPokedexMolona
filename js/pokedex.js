$(document).ready(() => {
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`,
        type: 'GET'
    }).done(function (a) {
        var pokeLis = a.results;
        var numTotalPaginas = Math.ceil(pokeLis.length / 20)


        var navAnterior = `<div class="col-1  navAnterior">
                                <span class="numPag"><<|</span>
                            </div>`
        $('#paginator').append(navAnterior);
        var flechitaiz = `<div class="col-1  anterior">
                                <span class="numPag"><</span>
                            </div>`
        $('#paginator').append(flechitaiz);
        for (let i = 0; i < 5; i++) {
            var template = `<div class="col-1 buttonpage" page="${i + 1}">
                                <span class="numPag">${i + 1}</span>
                            </div>`
            $('#paginator').append(template);

        }
        var flechitader = `<div class="col-1  siguiente">
                                <span class="numPag">></span>
                            </div>`
        $('#paginator').append(flechitader);
        var navSiguiente = `<div class="col-1  navSiguiente">
                                <span class="numPag">|>></span>
                            </div>`
        $('#paginator').append(navSiguiente);



        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`,
            type: 'GET'
        }).done(function (PokePage) {
            pokeListPag = PokePage.results;
            pokeListPag.forEach(poke => {
                var i = poke.url.split('/').reverse()[1];
                var template = `<div class="col-12 col-md-3 col-xl-2 col-xxl-1 card bglilaPkdex btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" personajeid="${i}">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" class="card-img" alt="...">
                                </div>`;
                $('#pokeList').append(template);
            });
        });
        //CLIKCAR EN BOTON NUMERICO
        $(document).on('click', '.buttonpage', function () {
            page = $(this).attr('page');
            $('#pokeList').attr('page', page);
            $('#pokeList').children().remove();
            var pageOffset = (page * 20) - 20;
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pageOffset}`,
                type: 'GET'
            }).done(function (PokePage) {

                pokeListPag = PokePage.results;
                pokeListPag.forEach(poke => {
                    var i = poke.url.split('/').reverse()[1];
                    var template = `<div class="col-12 col-md-3 col-xl-2 col-xxl-1 card bglilaPkdex btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" personajeid="${i}">
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" class="card-img" alt="...">
                                    </div>`;
                    $('#pokeList').append(template);
                });
            });
        })
        //CLICKAR EN BOTON ANTERIOR "<"
        $(document).on('click', '.anterior', function () {
            page = $('#pokeList').attr('page');
            page--;
            $('#pokeList').attr('page', page);
            $('#pokeList').children().remove();
            var pageOffset = (page * 20) - 20;
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pageOffset}`,
                type: 'GET'
            }).done(function (PokePage) {

                pokeListPag = PokePage.results;
                pokeListPag.forEach(poke => {
                    var i = poke.url.split('/').reverse()[1];
                    var template = `<div class="col-12 col-md-3 col-xl-2 col-xxl-1 card bglilaPkdex btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" personajeid="${i}">
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" class="card-img" alt="...">
                                    </div>`;
                    $('#pokeList').append(template);
                });
            });
        })
        //CLICKAR EN BOTON SIGUIENTE ">"
        $(document).on('click', '.siguiente', function () {
            page = $('#pokeList').attr('page');
            page++;
            $('#pokeList').attr('page', page);
            $('#pokeList').children().remove();
            var pageOffset = (page * 20) - 20;
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pageOffset}`,
                type: 'GET'
            }).done(function (PokePage) {

                pokeListPag = PokePage.results;
                pokeListPag.forEach(poke => {
                    var i = poke.url.split('/').reverse()[1];
                    var template = `<div class="col-12 col-md-3 col-xl-2 col-xxl-1 card bglilaPkdex btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" personajeid="${i}">
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" class="card-img" alt="...">
                                    </div>`;
                    $('#pokeList').append(template);
                });
            });
        })


    });
    $(document).on('click', '*', function () {
        $('#type1').parent().removeClass();
        $('#type2').parent().removeClass();
        if ($('pkm-type'))
            $('.pkm-type').removeClass();
    })
    $(document).on('click', '.card', function () {
        var personajeid = $(this).attr('personajeid');
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon-species/' + personajeid,
            type: 'GET'
        }).done(function (poke) {
            evolution_chain = poke.evolution_chain.url;
            $.ajax({
                url: evolution_chain,
                type: 'GET'
            }).done(function (evo) {
                //PRIMERA FASE 
                if (evo.chain.species) {
                    var evol1 = evo.chain.species.url;
                    $.ajax({
                        url: evol1,
                        type: 'GET'
                    }).done(function (poke1) {
                        var template = `<div class="col row  align-items-center justify-content-end evo p-0 m-0">
                        <div class="col-9 p-0 m-0">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke1.id}.png"
                        class="card-img" alt="...">
                        </div>
                        </div>
                        `;
                        $('#evo1').append(template);
                    });
                }
                //SEGUNDA FASE
                if (evo.chain.evolves_to[0] != null) {
                    $("#evo2").removeClass("noneevo");
                    $("#evo1").removeClass("noneevo");
                    for (let i = 0; i < evo.chain.evolves_to.length; i++) {
                        $.ajax({
                            url: evo.chain.evolves_to[i].species.url,
                            type: 'GET'
                        }).done(function (poke1) {
                            var evolutionform;
                            var template
                            if (evo.chain.evolves_to[i].evolution_details[0].item != null) {
                                var fotoObj;
                                $.ajax({
                                    url: evo.chain.evolves_to[i].evolution_details[0].item.url,
                                    type: 'GET'
                                }).done(function (obj) {
                                    fotoObj = obj.sprites.default;
                                    evolutionform = `<span class="levelup text-center"> <img src="${fotoObj}"</span>
                                    <span class="levelup-trigger-name text-center">${evo.chain.evolves_to[i].evolution_details[0].trigger.name}</span>`;
                                    template = `<div class="col d-flex flex-row align-items-center justify-content-centers evo p-0">
                                    <div class="col">`+ evolutionform + `
                                    </div>
                                    <div class="col-9">
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke1.id}.png"
                                    </div>
                                    </div>`;
                                    $('#evo2').append(template);
                                })
                            } else if (evo.chain.evolves_to[i].evolution_details[0].time_of_day != "") {
                                evolutionform = `<span class="levelup ">${evo.chain.evolves_to[i].evolution_details[0].time_of_day}</span>
                                    <span class="levelup-trigger-name ">${evo.chain.evolves_to[i].evolution_details[0].trigger.name}</span>`;
                                template = `<div class="col d-flex flex-row align-items-center justify-content-centers evo p-0">
                                    <div class="col text-center">`+ evolutionform + `
                                    </div>
                                    <div class="col-9">
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke1.id}.png"
                                    </div>
                                    </div>`;
                                $('#evo2').append(template);
                            } else if (evo.chain.evolves_to[i].evolution_details[0].location != null) {
                                evolutionform = `<span class="levelup ">Special location</span>
                                    <span class="levelup-trigger-name ">${evo.chain.evolves_to[i].evolution_details[0].trigger.name}</span>`;
                                template = `<div class="col d-flex flex-row align-items-center justify-content-centers evo p-0">
                                    <div class="col text-center">`+ evolutionform + `
                                    </div>
                                    <div class="col-9">
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke1.id}.png"
                                    </div>
                                    </div>`;
                                $('#evo2').append(template);
                            } else if (evo.chain.evolves_to[i].evolution_details[0].known_move_type != null) {
                                evolutionform = `<span class="levelup r">Know move</span>
                                    <span class="levelup r">${evo.chain.evolves_to[i].evolution_details[0].known_move_type.name}</span>
                                    <span class="levelup-trigger-name text-center">${evo.chain.evolves_to[i].evolution_details[0].trigger.name}</span>`;
                                template = `<div class="col d-flex flex-row align-items-center justify-content-centers evo p-0">
                                    <div class="col text-center">`+ evolutionform + `
                                    </div>
                                    <div class="col-9">
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke1.id}.png"
                                    </div>
                                    </div>`;
                                $('#evo2').append(template);
                            } else if (evo.chain.evolves_to[i].evolution_details[0].min_level != null) {
                                evolutionform = `<span class="levelup ">+${evo.chain.evolves_to[i].evolution_details[0].min_level}</span>
                                <span class="levelup-trigger-name ">${evo.chain.evolves_to[i].evolution_details[0].trigger.name}</span>`;
                                template = `<div class="col d-flex flex-row align-items-center justify-content-centers evo p-0">
                                <div class="col text-center">`+ evolutionform + `
                                </div>
                                <div class="col-9">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke1.id}.png"
                                </div>
                                </div>`;
                                $('#evo2').append(template);
                            } else if (evo.chain.evolves_to[i].evolution_details[0].trigger.name == "trade") {
                                evolutionform = `
                                <span class="levelup-trigger-name ">Trade</span>`;
                                template = `<div class="col d-flex flex-row align-items-center justify-content-centers evo p-0">
                                <div class="col text-center">`+ evolutionform + `
                                </div>
                                <div class="col-9">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke1.id}.png"
                                </div>
                                </div>`;
                                $('#evo2').append(template);
                            } else if (evo.chain.evolves_to[i].evolution_details[0].min_happiness != null) {
                                evolutionform = `<span class="levelup ">${evo.chain.evolves_to[i].evolution_details[0].min_happiness}</span>
                                <span class="levelup-trigger-name ">Happiness</span>`;
                                template = `<div class="col d-flex flex-row align-items-center justify-content-centers evo p-0">
                                <div class="col text-center">`+ evolutionform + `
                                </div>
                                <div class="col-9">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke1.id}.png"
                                </div>
                                </div>`;
                                $('#evo2').append(template);
                            } else if (evo.chain.evolves_to[i].evolution_details[0].known_move != null) {
                                evolutionform = `<span class="levelup-trigger-name ">Know move</span>
                                <span class="levelup ">${evo.chain.evolves_to[i].evolution_details[0].known_move.name}</span>`;
                                template = `<div class="col d-flex flex-row align-items-center justify-content-centers evo p-0">
                                <div class="col text-center">`+ evolutionform + `
                                </div>
                                <div class="col-9">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke1.id}.png"
                                </div>
                                </div>`;
                                $('#evo2').append(template);
                            }
                        });
                    }
                    //Tercera Fase
                    if (evo.chain.evolves_to[0].evolves_to[0] != null) {
                        $("#evo3").removeClass("noneevo");
                        for (let i = 0; i < evo.chain.evolves_to.length; i++) {
                            for (let j = 0; j < evo.chain.evolves_to[i].evolves_to.length; j++) {
                                $.ajax({
                                    url: evo.chain.evolves_to[i].evolves_to[j].species.url,
                                    type: 'GET'
                                }).done(function (poke1) {
                                    var evolutionform;
                                    var template
                                    if (evo.chain.evolves_to[i].evolves_to[j].evolution_details[0].item != null) {
                                        var fotoObj;
                                        $.ajax({
                                            url: evo.chain.evolves_to[i].evolves_to[j].evolution_details[0].item.url,
                                            type: 'GET'
                                        }).done(function (obj) {
                                            fotoObj = obj.sprites.default;
                                            evolutionform = `<span class="levelup text-center"> <img src="${fotoObj}"</span>
                                        <span class="levelup-trigger-name text-center">${evo.chain.evolves_to[i].evolves_to[j].evolution_details[0].trigger.name}</span>`;
                                            template = `<div class="col d-flex flex-row align-items-center justify-content-centers evo p-0">
                                        <div class="col">`+ evolutionform + `
                                        </div>
                                        <div class="col-9">
                                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke1.id}.png"
                                        </div>
                                        </div>`;
                                            $('#evo3').append(template);
                                        })
                                    } else if (evo.chain.evolves_to[i].evolves_to[j].evolution_details[0].time_of_day != "") {
                                        evolutionform = `<span class="levelup ">${evo.chain.evolves_to[i].evolves_to[j].evolution_details[0].time_of_day}</span>
                                    <span class="levelup-trigger-name ">${evo.chain.evolves_to[i].evolves_to[j].evolution_details[0].trigger.name}</span>`;
                                        template = `<div class="col d-flex flex-row align-items-center justify-content-centers evo p-0">
                                    <div class="col text-center">`+ evolutionform + `
                                    </div>
                                    <div class="col-9">
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke1.id}.png"
                                    </div>
                                    </div>`;
                                        $('#evo3').append(template);
                                    } else if (evo.chain.evolves_to[i].evolves_to[j].evolution_details[0].location != null) {
                                        evolutionform = `<span class="levelup ">Special location</span>
                                    <span class="levelup-trigger-name ">${evo.chain.evolves_to[i].evolves_to[j].evolution_details[0].trigger.name}</span>`;
                                        template = `<div class="col d-flex flex-row align-items-center justify-content-centers evo p-0">
                                    <div class="col text-center">`+ evolutionform + `
                                    </div>
                                    <div class="col-9">
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke1.id}.png"
                                    </div>
                                    </div>`;
                                        $('#evo3').append(template);
                                    } else if (evo.chain.evolves_to[i].evolves_to[j].evolution_details[0].known_move_type != null) {
                                        evolutionform = `<span class="levelup r">Know move</span>
                                    <span class="levelup r">${evo.chain.evolves_to[i].evolves_to[j].evolution_details[0].known_move_type.name}</span>
                                    <span class="levelup-trigger-name text-center">${evo.chain.evolves_to[i].evolves_to[j].evolution_details[0].trigger.name}</span>`;
                                        template = `<div class="col d-flex flex-row align-items-center justify-content-centers evo p-0">
                                    <div class="col text-center">`+ evolutionform + `
                                    </div>
                                    <div class="col-9">
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke1.id}.png"
                                    </div>
                                    </div>`;
                                        $('#evo3').append(template);
                                    } else if (evo.chain.evolves_to[i].evolves_to[j].evolution_details[0].min_level != null) {
                                        evolutionform = `<span class="levelup ">+${evo.chain.evolves_to[i].evolves_to[j].evolution_details[0].min_level}</span>
                                    <span class="levelup-trigger-name ">${evo.chain.evolves_to[i].evolves_to[j].evolution_details[0].trigger.name}</span>`;
                                        template = `<div class="col d-flex flex-row align-items-center justify-content-centers evo p-0">
                                    <div class="col text-center">`+ evolutionform + `
                                    </div>
                                    <div class="col-9">
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke1.id}.png"
                                    </div>
                                    </div>`;
                                        $('#evo3').append(template);
                                    } else if (evo.chain.evolves_to[i].evolves_to[j].evolution_details[0].trigger.name == "trade") {
                                        evolutionform = `
                                    <span class="levelup-trigger-name ">Trade</span>`;
                                        template = `<div class="col d-flex flex-row align-items-center justify-content-centers evo p-0">
                                    <div class="col text-center">`+ evolutionform + `
                                    </div>
                                    <div class="col-9">
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke1.id}.png"
                                    </div>
                                    </div>`;
                                        $('#evo3').append(template);
                                    } else if (evo.chain.evolves_to[i].evolves_to[j].evolution_details[0].min_happiness != null) {
                                        evolutionform = `<span class="levelup ">${evo.chain.evolves_to[i].evolves_to[j].evolution_details[0].min_happiness}</span>
                                    <span class="levelup-trigger-name ">Happiness</span>`;
                                        template = `<div class="col d-flex flex-row align-items-center justify-content-centers evo p-0">
                                    <div class="col text-center">`+ evolutionform + `
                                    </div>
                                    <div class="col-9">
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke1.id}.png"
                                    </div>
                                    </div>`;
                                        $('#evo3').append(template);
                                    } else if (evo.chain.evolves_to[i].evolves_to[j].evolution_details[0].known_move != null) {
                                        evolutionform = `<span class="levelup-trigger-name ">Know move</span>
                                        <span class="levelup ">${evo.chain.evolves_to[i].evolves_to[j].evolution_details[0].known_move.name}</span>`;
                                        template = `<div class="col d-flex flex-row align-items-center justify-content-centers evo p-0">
                                        <div class="col text-center">`+ evolutionform + `
                                        </div>
                                        <div class="col-9">
                                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke1.id}.png"
                                        </div>
                                        </div>`;
                                        $('#evo3').append(template);
                                    }
                                });
                            }
                        }
                    } else {
                        $('#evo3').addClass('noneevo');
                    }
                } else {
                    $('#evo2').addClass('noneevo');
                    $('#evo1').addClass('noneevo');
                }
            })
        });
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
                bgcolor = 'linear-gradient(338deg, ' + color_temporal2 + ' 0%, ' + color_temporal1 + ' 100%)';
            } else {
                $('#type2').parent().removeClass();
                $('#type2').text('');
                bgcolor = 'linear-gradient(338deg, ' + color_temporal1 + ' 0%, ' + color_temporal1 + ' 100%)';
            }
            $('.modal-content').css("background", bgcolor);
            $('#hp').text(poke.stats[0].base_stat);
            $('#attack').text(poke.stats[1].base_stat);
            $('#defense').text(poke.stats[2].base_stat);
            $('#special-attack').text(poke.stats[3].base_stat);
            $('#special-defense').text(poke.stats[4].base_stat);
            $('#speed').text(poke.stats[5].base_stat);
            $(document).on('click', '*', (function () {
                $('.evo').remove();
            }));
        });
    });
});
