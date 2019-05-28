$(function(){
    $('#name').keyup(function(){
        $('#Greet').text('Hello ' + $('#name').val());
    })
})