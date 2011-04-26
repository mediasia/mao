$(document).ready(function(){
  $('#content-area .node table tr').each(function(i,val){
    $(this).find('td').each(function(i,val){
      $(this).css('text-align', 'center');
    });
  });

  $('#content-area .node table tr').each(function(i,val){
    $(this).find('td').each(function(i,val){
      if(i==0) {
        $(this).css({'text-align':'left', 'font-weight':'bold'});
      }
    });
  });
  
  var table = {
    thead:'',
    tbody:''
  };
  
  $('#content-area .node table').each(function(i,val) {
    table.thead = '';
    table.tbody = '';
    $(this).find('tr').each(function(i,val) {
      console.log($(val).html());
      if(i<2) {
        table.thead += '<tr>'+$(val).html()+'</tr>';
      } else {
        table.tbody += '<tr>'+$(val).html()+'</tr>';
      }
    });
    
    $(this).html('<thead></thead><tbody></tbody>').find('thead').html(table.thead).parent().find('tbody').html(table.tbody);
  });
  
  $('.view-slideshow').height($('.view-slideshow .view-content .views-row-1 img').css('height'));
  $('.view-slideshow .view-content').cycle({
    before: function() {
      console.log('before');
      $('.views-field-body').animate({top:0, opacity:0});
    },
    after: function() {
      console.log('after');
      $('.views-field-body').animate({top:-50, opacity:0.6});
    },
    timeout: 3600,
  });
  
});