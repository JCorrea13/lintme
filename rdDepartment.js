const Subject = require("./subject");

class RdDepartment{
  constructor(){
    this.workshopEvents = new Subject();
    this.workshops = {};
  }

  addWorkshopNotificationsSubscriber(obj){
    this.workshopEvents.addObserver(obj);
  }

  removeWorkshopNotificationsSubscriber(obj){
    this.workshopEvents.removeObserver(obj);
  }

  newWorkshopAvailable(title, limit){
    this.workshops[title] = { attendees: [], limit: limit };
    this.workshopEvents.notify({ 
      title: title, 
      subscription: (attendee) => this.subscribeToWorkshop(title, attendee)});
  }

  _getWorkshop(workshop){
    if(Object.prototype.hasOwnProperty.call(this.workshops, workshop))
      return this.workshops[workshop];

    return null;
  }

  subscribeToWorkshop(workshopName, attendee){
    var workshop = this._getWorkshop(workshopName);
    if(workshop != null){

      if(workshop.limit === workshop.attendees.length){
        console.warn("Full quota");
        return;
      }

      if(workshop.attendees.includes(attendee)){
        console.warn("Attendee already subscribed");
        return;
      }

      workshop.attendees.push(attendee);
    }
  }
}

module.exports = RdDepartment;