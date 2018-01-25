/**
 * Created by sengwon on 2018-01-04.
 */
$(function () {
  "use strict";

  $(".todo-list").sortable({
    placeholder: "sort-highlight",
    handle: ".handle",
    forcePlaceholderSize: true,
    zIndex: 999999
  });
});
