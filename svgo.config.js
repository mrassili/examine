module.exports = {
  plugins: [
    "removeDimensions",
    {
      name: "removeAttributesBySelector",
      params: {
        selector: "svg",
        attributes: "fill",
      },
    },
    {
      name: "removeAttrs",
      params: {
        attrs: "*:fill:((?!^none$).)*",
      },
    },
    {
      name: "addAttributesToSVGElement",
      params: {
        attributes: [
          {
            fill: "currentColor",
          },
        ],
      },
    },
  ],
};
