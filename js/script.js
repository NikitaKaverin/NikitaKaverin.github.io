alert("Hello word");
for (var i=0 ;i<10 ;i++)
{
  $('#ourlist').append('<li>'+i+'</li>');
} 
var ListVisible=true;
$('button').on('click',function(){
    if(ListVisible)
    {
          $('ul').fadeOut(200);
    ListVisible=false;
    $('button').html('Показать');
    }else{
    $('ul').fadeIn(200);
    ListVisible=true;
    $('button').html('Скрыть');
}
})
