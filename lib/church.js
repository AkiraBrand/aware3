class Church {
  constructor(denomination, congregationSize, isOpen, worshipBand) {
    this.denomination = denomination;
    this.congregationSize = congregationSize
    this.isOpen = isOpen
    this.worshipBand = worshipBand
  }

  closeDown() {
    this.isOpen = false;
  }

  addCongregant(){
    this.congregationSize ++;
  }

}

module.exports = Church;
