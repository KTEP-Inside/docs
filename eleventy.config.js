/**
 *
 * @param {import('@11ty/eleventy').UserConfig} config
 * @returns
 */
module.exports = (config) => {
  config.addPassthroughCopy("src/styles");

  config.addWatchTarget("src/styles");

  config.addFilter("year", (date) => {
    return new Date(date).getFullYear();
  });

  config.addFilter("map", (list, key) => {
    if (!Array.isArray(list)) {
      throw Error("map only for arrays");
    }
    return list.map((item) => item[key]);
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      data: "data",
      includes: "includes",
      layouts: "layouts",
    },
  };
};
