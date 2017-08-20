class Utils {

  static cloneObject(object){
    return JSON.parse(JSON.stringify(object));
  }

  static getLessons(staticLessons) {
    let lessons = localStorage.getItem('piikuLessons');
    if (lessons === null){
      return staticLessons;
    }
    // make sure new lessons can be added, use composit id
    // make index and search, add non existing
    // handle JSON parse errors
    return JSON.parse(lessons);
  }

  static saveLessons(lessons) {
    localStorage.setItem('piikuLessons', JSON.stringify(lessons));
  }

  static deleteLessons() {
    localStorage.removeItem('piikuLessons');
  }

  static getRandomIndexFromWeightedList(list) {
    // remove repeats, remove the chance of getting the same card
    let weightTotal = list.reduce( (accumulator, currentValue) => accumulator + parseInt(currentValue.weight, 10), 0);
    let randomPointer = Math.floor(Math.random()*weightTotal);
    let accumulator = 0;
    let index;
    for (let i = 0; i < list.length; i++) {
      accumulator += parseInt(list[i].weight, 10);
      if (randomPointer < accumulator) {
        index = i;
        break;
      }
    }
    return index;
  }

  static decreaseProbability(currentFib) {
    let sequence = [1, 2, 3, 5, 8];
    let index = sequence.indexOf(currentFib);
    if (index === -1){
      index = sequence.length - 1;
    } else {
      index = Math.max(0, index - 1);
    }
    return sequence[index];
  }

  static resetProbability() {
    let sequence = [1, 2, 3, 5, 8];
    return sequence[sequence.length - 1];
  }

}

// existsInList(){}
// getDefault(){}
// decrease(){}

export default Utils;
