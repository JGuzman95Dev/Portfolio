// alert('welcome to the app');

$(document).ready(function() {

    $('body').on( 'mousemove' , function( e ){
        // console.clear()
        let clienteX =  e.originalEvent.clientX 
        let clienteY =  e.originalEvent.clientY 
        $('#cursor').css({
            'left': (clienteX - 20 ) + 'px',
            'top': (clienteY - 20 ) + 'px' 
        })
    })

    $('.a , .article , .JG').on({
        mouseover: function() {
            $('#cursor').addClass('mini')  
        },
        mouseout: function() {
            $('#cursor').removeClass('mini')
        },
    })   

});