$(() => {
  $(".change-devoured").click(function(event) {
    const id = $(this).data("id");
    console.log(`/api/burgers/${id}`);
    $.ajax(`/api/burgers/${id}`, {
      type: "PUT"
    }).then(() => {
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#ca")
        .val()
        .trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(() => {
      location.reload();
    });
  });

  $(".delete-burger").on("click", function(event) {
    const id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(() => {
      location.reload();
    });
  });
});
