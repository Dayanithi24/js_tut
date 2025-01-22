const data = {
  mark1: 70,
  mark2: 80,
  mark3: 60,
  mark4: 90,
  mark5: 50,
  marks: () => {
    return [data.mark1, data.mark2, data.mark3, data.mark4, data.mark5];
  },
  total: function () {
    return this.mark1 + this.mark2 + this.mark3 + this.mark4 + this.mark5;
  },
};

export default data;
