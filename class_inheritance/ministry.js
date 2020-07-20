class Ministry {
  constructor(type, leader, population, neededResources, time) {
    this.type = type;
    this.leader = leader;
    this.population = population;
    this.neededResources = neededResources;
    this.time = time;
  };

  startMinistry() {
    return `${this.type} Ministry happens at ${this.time}. \n We serve ${this.population} and we need your donations for ${this.resources}. ${this.leader} will be leading. Come hang out at ${this.time}.`
  }
}

class Youthministry extends Ministry {
  constructor(type, leader, population, neededResources, time) {
    super(type, leader, population, neededResources, time);
  }

  hostPrayerCircle() {
    console.log('Let us pray');
  }

  
}

let youthMinistry = new Youthministry('Youth', "Cool Steve","teenagers", null, 9);

youthMinistry.startMinistry();
//youthMinistry.hostPrayerCircle();
