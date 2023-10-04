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

$(document).ready(function () {
    $(document).on('click', '#poke', function () {
        $('#nombre').empty();
        $.ajax({
            url: 'https://pokeapi.co/api/v2/item-pocket/1/',
            type: 'GET'
        }).done(function (resp) {
            var arrCat = resp.categories;
            arrCat.forEach(cat => {
                $.ajax({
                    url: cat.url,
                    type: 'GET'
                }).done(function (respCat) {
                    var itemList = respCat.items;
                    itemList.forEach(item => {
                        $.ajax({
                            url: item.url,
                            type: 'GET'
                        }).done(function (itemSelec) {
                            var efecto = itemSelec.effect_entries[0].short_effect;

                            var template = `<tr class="Justify-content-bettwen">
                                    <td class="d-flex justify-content-between" >
                                    <span id="spn" title="${efecto}" foto="${itemSelec.sprites.default}">${itemSelec.name}</span>
                                    <span>${itemSelec.cost}¥</span>
                                    </td>
                                    </tr>`;
                            $('#nombre').append(template);
                            $("span").hover(function () {
                                var verDescrip = $(this).attr('title');
                                var foto = $(this).attr('foto');
                                $('#descripcion').removeClass('d-none');
                                $('#descripcion').html(verDescrip);
                                $('#img').children().attr('src', foto)
                            }, function () {
                                $('span').find('span').last().remove();
                                $('#descripcion').removeClass('d-none');
                                $('#descripcion').html(' ');
                                $('#img').children().attr('src', '')

                            })
                        })
                    });

                })
            });


        })



    })


    $(document).on('click', '#bici', function () {
        $('#nombre').empty();
        $.ajax({
            url: 'https://pokeapi.co/api/v2/item-pocket/8/',
            type: 'GET'
        }).done(function (itCat) {
            var saveIt = itCat.categories;
            for (var t = 0; t < saveIt.length; t++) {
                $.ajax({
                    url: saveIt[t].url,
                    type: 'GET'
                }).done(function (cat) {
                    var saveCat = cat.items;
                    for (let s = 0; s < saveCat.length; s++) {
                        console.log(saveCat[s].url)
                        $.ajax({
                            url: saveCat[s].url,
                            type: 'GET'
                        }).done(function (cost) {
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










