$(function(){
  $(".task_done").on("change", function(){
    $.post("/tasks/" + $(this).data("id") + "/toggle");
  });
});
