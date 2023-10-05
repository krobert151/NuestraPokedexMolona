$(document).ready(function(){
    $(document).on('click','.card-img',function () {
        var urlImg = $(this).attr('src');
        

        var seperados=urlImg.split("/");
        var reves= seperados.reverse();
        var palabra=reves[0];
        var troceoagain = palabra.slice(0,-4);
       
        $.ajax({
            url:'https://pokeapi.co/api/v2/item/'+troceoagain,
            type:'GET'
        }).done(function(resp){
            var urlCat = resp.category.url;
            alert(urlCat);
          $.ajax({
            url:urlCat,
            type:'GET'
          }).done(function(respurlcat){
            var itempocket=respurlcat.pocket.url;
            $.ajax({
                url:itempocket,
                type:'GET'

            }).done(function(respPocket){
                var final=respPocket.results;
                for (let index = 0; index < urlCat.length; index++) {
                    var template = `<tr class="Justify-content-bettwen">
                                <td class="d-flex justify-content-between" >
                                
                                <span id="spn"  >${urlCat.name}</span>
                                <span >${urlCat.cost}¥</span>
                                </td>
                            </tr>`;
                                $('#nombre').append(template);
                    
                }
            })

          })
        })
        


    })
    
    

})