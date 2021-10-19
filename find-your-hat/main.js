const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this._field = field;
  }
  
  get field() {
    return this._field
  }  
  print() {
    console.log(this.field.map(e => e.join('')).join('\n'));
  }

  play(mode) {
    let posX = 0;
    let posY = 0;
    
    if(mode === 'hard') {
      var fieldCharacterIndexesArr = this.findFieldCharacterIndexesForHardMode(this.field);
    }

    while(this.field[posX][posY] != hat) {
      this.print();
      let move = prompt('Which way? ');
      switch(move) {
        case 'u': case 'U':
          posX -= 1;
          break;
        case 'd': case 'D':
          posX += 1;
          break;
        case 'l': case 'L':
          posY -= 1;
          break;
        case 'r': case 'R':
          posY += 1;
          break;
        default:
          return 'Use U(up),D(down),L(left),R(right) to move accross the field.';
      }
      if(posX < 0 || posX >= this.field.length || posY < 0 || posY >= this.field[0].length) {
        return 'Out of field!'
      } else if(this.field[posX][posY] === hole) {
        return 'You fell into a hole!'
      } else if(this.field[posX][posY] === hat){
        return 'You won!'
      } else {
        this.field[posX][posY] = pathCharacter;
        if(mode === 'hard') {
          fieldCharacterIndexesArr.splice(fieldCharacterIndexesArr.indexOf([posX, posY]), 1);
          this.hardMode(fieldCharacterIndexesArr);
        }
      }
      console.clear();
    }

    
  }

  findFieldCharacterIndexesForHardMode(arr) {
    const fieldCharacterPositionsArr = [];
    for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < arr[i].length; j++)
        if(arr[i][j] === fieldCharacter) {
          fieldCharacterPositionsArr.push([i, j]);
        }
    }
    return fieldCharacterPositionsArr;
  }

  hardMode(arr) {
    const randomfieldCharacterPosition = Math.floor(Math.random() * arr.length)
    this.field[arr[randomfieldCharacterPosition][0]][arr[randomfieldCharacterPosition][1]] = hole;
    arr.splice(randomfieldCharacterPosition, 1);
  }

  static generateField(height, width, percentage, randomStart = false) {
    if(percentage > 50) {
      return 'That would be too difficult! Please choose a lower percentage.'
    }
    const field = [];
    const area = height * width;
    const hatRandomPosition = Math.floor(Math.random() * (area - 1)) + 1;
    let holesCount = Math.floor(area * (percentage / 100));

    for(let i = 0; i < area; i++) {
      field.push(fieldCharacter);
    }

    field[hatRandomPosition] = hat;
    if(randomStart) {
      const pathCharacterRandomPosition = Math.floor(Math.random() * (area - 1)) + 1;
      field[pathCharacterRandomPosition] = pathCharacter;
    } else {
      field[0] = pathCharacter;
    }

    while(holesCount > 0) {
      const holeRandomPosition = Math.floor(Math.random() * (area - 1)) + 1;
      if(field[holeRandomPosition] !== hole && holeRandomPosition !== hatRandomPosition && field[holeRandomPosition] !== pathCharacter) {
        field[holeRandomPosition] = hole;
        holesCount--;
      }
    }
    
    const formatedField = [];
    while(field.length) formatedField.push(field.splice(0,width));

    return formatedField;
  }

}
  
const myField = new Field(Field.generateField(10, 10, 20));

console.log(myField.play('hard'));