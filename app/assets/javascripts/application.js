
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery
//= require jquery_ujs
//= require alert.js

$(function(){
  $(".delete").click(function(){
    var result = confirm('本当に削除しますか？');
    if(result){
    } else{
      return false;
    }
  });
});
