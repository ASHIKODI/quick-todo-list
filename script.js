$(document).ready(function(){
    
    $('.pull-me').click(function(){
       $('.panel').slideToggle('slow'); 
    });

    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('#txtbx').val('');
        $('.list').append("<div class='item'><li>"+toAdd+"</li></div>");
        localStorage.setItem('name', toAdd);
        
    });
    $(document).on('dblclick', '.item', function(){
        $(this).remove();
        localStorage.removeItem('name');    
    });
    var name = localStorage.getItem('name');
        if(name!==null){
        $('.list').append("<div class='item'><li>"+name+"</li></div>");}
});