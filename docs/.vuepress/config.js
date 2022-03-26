const charpters = Array.from({ length: 12 }, (_, index) => `ch${index + 1}`);

module.exports = {
  title: "JavaScript 函数式编程指南中文版",
  base: "/mostly-adequate-guide-chinese/",
  themeConfig: {
    sidebar: charpters,
  },
};
