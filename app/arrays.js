exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    return arr.indexOf(item);
  },

  sum: function (arr) {
    var sum = arr.reduce(function (a, b) { return a + b; }, 0);
    return sum;
  },

  remove: function (arr, item) {
    return arr.filter((i) => {
      return i !== item;
    });

  },

  removeWithoutCopy: function (arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function (arr, item) {
    arr.push(item);
    return arr;

  },

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    return arr.reduce((val, current) => {
      return (current == item) ? ++val : val;
    }, 0);
  },

  duplicates: function (arr) {
    var unq_arr = [];
    $.each(arr, function (i, el) {
      if (arr.indexOf(el, (i + 1)) !== -1 && unq_arr.indexOf(el) === -1) {
        unq_arr.push(el);
      }
    });
    return unq_arr;
  },

  square: function (arr) {
    return arr.map((i) => {
      return i * i;
    });
  },

  findAllOccurrences: function (arr, target) {
    var indices = [];
    var idx = arr.lastIndexOf(target);
    while (idx != -1) {
      indices.push(idx);
      idx = (idx > 0 ? arr.lastIndexOf(target, idx - 1) : -1);
    }
    return indices;
  }
};
