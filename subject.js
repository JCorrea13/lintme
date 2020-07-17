const ObserverList = require('./observerList');

class Subject {
  constructor(){
    this.observers = new ObserverList();
  }

  addObserver(observer){
    this.observers.add(observer);
  }

  removeObserver(observer){
    this.observers.removeAt(this.observers.indexOf(observer, 0));
  }

  notify(context){
    var count = this.observers.count();
    for(var i = 0; i < count; i++){
      this.observers.get(i)(context);
    }
  }
}

module.exports = Subject;