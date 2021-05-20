define(["jquery"], function ($) {
  "use strict";
  fetch("https://magento.test/rest/all/V1/directory/countries")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (const el of data) {
        $(".country").append($("<li>").text(el.id + ":" + el.full_name_locale));
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
