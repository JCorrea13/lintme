class ObserverList{
  constructor(){
    this.observerList = [];
  }

  add(obj){
    this.observerList.push(obj);
  }

  get(index){
    if(index > -1 && index < this.observerList.length)
      return this.observerList[index];

    return null;
  }

  count(){
    return this.observerList.length;
  }

  indexOf(obj){
    return this.observerList.indexOf(obj);
  }

  removeAt(index){
    this.observerList.splice(index, 1);
  }
}

module.exports = ObserverList;