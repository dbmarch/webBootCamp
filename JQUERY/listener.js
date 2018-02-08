console.log('listener.js');

$('button').on('click', function () {
    console.log ('click')
    $(this).css('color', 'blue');
})


$('input').on('keypress', function() {
    console.log ('key pressed')
})

$('button').on ('mouseenter', function (){
    $(this).css ('font-weight', 'bold')
})

$('button').on ('mouseleave', function (){
    $(this).css ('font-weight', 'normal')
})