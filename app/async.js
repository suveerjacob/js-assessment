exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function (value) {
    return new Promise(function (resolve, reject) {
      if(value) resolve(value);
      else reject(value);
    });

  },

  manipulateRemoteData: function (url) {
    return new Promise(function (resolve, reject) {
      $.get(url).then(function (data) {
        var name_arr = [];
        $.each(data.people, function (index, val) {
          name_arr.push(val.name);
        });
        name_arr = name_arr.sort();
        resolve(name_arr);
      });

    });
  }
};
