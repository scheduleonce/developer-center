module.exports = function (context, options) {
  return {
    name: "scalar-script-plugin",

    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: "script",
            attributes: {
              src: "/js/scalar-standalone.js",
              defer: true,
            },
          },
        ],
        preBodyTags: [],
        postBodyTags: [],
      };
    },
  };
};
