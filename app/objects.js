exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) { 
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var new_arr = [];
    for(key in obj){
      if(obj.hasOwnProperty(key)){
        new_arr.push(key+": "+obj[key])
      }
    }
    return new_arr;
  }
};
