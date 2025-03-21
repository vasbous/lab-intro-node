class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.items.length || pos < 0) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length < 1) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length < 1) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    return this.items.reduce((total, num) => total + num, 0);
  }

  avg() {
    if (this.items.length < 1) {
      throw new Error("EmptySortedList");
    } else {
      let sum = this.items.reduce((total, num) => total + num, 0);
      return sum / this.items.length;
    }
  }
}
module.exports = SortedList;
