const Converter = {
  convertDateToNumber(date) {
    return Number(date);
  },

  convertMenuToArr(menus) {
    return menus.split(",").map((menu) => {
      const info = menu.split("-");
      return [info[0], Number(info[1])];
    });
  },
};

export default Converter;
