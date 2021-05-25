var config = {
  map: {
    "*": {
      lodash: "Lodash_js/js/dif",
    },
  },
  paths: {
    lodash: "js/lodash.min",
  },
  shim: {
    lodash: {
      deps: ["jquery"],
    },
  },
};
