$(function(){
  $(".task_done").on("change", function(){
    $.post("/tasks/" + $(this).data("id") + "/toggle", {"_method": "_patch"}, function(){
    }
    
    );
  });
});
