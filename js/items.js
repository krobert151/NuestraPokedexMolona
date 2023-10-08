$(document).ready(function(){
    $(document).on('click','.card-img',function () {
        var urlImg = $(this).attr('src');
        

        var seperados=urlImg.split("/");
        var reves= seperados.reverse();
        var palabra=reves[0];
        var troceoagain = palabra.slice(0,-4);
        if(troceoagain=="tm-normal"){
            troceoagain = "tm01"
        }
       $('#nombre').children().remove();
        $.ajax({
            url:'https://pokeapi.co/api/v2/item/'+troceoagain,
            type:'GET'
        }).done(function(resp){
            var urlCat = resp.category.url;
            
                $.ajax({
                    url:urlCat,
                    type:'GET'
                  }).done(function(respurlcat){
                    var itempocket=respurlcat.pocket.url;
                   
                    $.ajax({
                        url:itempocket,
                        type:'GET'
        
                    }).done(function(respPocket){
                        var final=respPocket.categories;
                        for (let i = 0; i < final.length; i++) {
                            $.ajax({
                                url:final[i].url,
                                type:'GET'
                            }).done(function(saveurlcat){
                                var cat=saveurlcat.items;
                                for (let j = 0; j < cat.length; j++) {
                                    $.ajax({
                                        url:cat[j].url,
                                        type:'GET'
                                    }).done(function(itemsresults){
                                        if (itemsresults.effect_entries && itemsresults.effect_entries.length > 0) {
                                            var descripcion = itemsresults.effect_entries[0].short_effect;
                                            var template = `<tr class="Justify-content-bettwen">
                                            <td class="d-flex justify-content-between" >
                                            
                                            <span id="spn" title="${descripcion}" foto="${itemsresults.sprites.default}">${itemsresults.name}</span>
                                            <span >${itemsresults.cost}¥</span>
                                            </td>
                                        </tr>`;
                                            $('h2').html(saveurlcat.pocket.name);
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
                                                              
                                            })
                                            
                                        } else {
                                            $('#descripcion').html('no description');
                                        }
                                                                                              
                                    })
                                }
                            })
                            
                        }
                    
                       
                    })
        
            });
         
         
        })
        

    
    })
    
    

})