// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const randBase = Math.floor(Math.random() * dna.length);
      const candidatesForBaseMutation = dna.filter(base => base !== dna[randBase]);
      console.log(candidatesForBaseMutation);
      const randMutatedBase =  Math.floor(Math.random() * candidatesForBaseMutation.length);
      dna[randBase] = candidatesForBaseMutation[randMutatedBase];
    },
    compareDNA(pAequor) {
      let identicalBases = 0;
      for(let i = 0; i < dna.length; i++) {
        if(dna[i] === pAequor.dna[i]) {
          identicalBases++;
        }
      }
      const identicalBasesPercent = Math.floor((identicalBases / dna.length) * 100);
      return `specimen ${specimenNum} and specimen ${pAequor.specimenNum} have ${identicalBasesPercent}% DNA in common`
    },
    willLikelySurvive() {
      let gOrCBases = 0;
      for(let i of dna) {
        if(i === 'G' || i === 'C') {
          gOrCBases++;
        }
      };
      const gOrCBasesPercent = Math.floor((gOrCBases / dna.length) * 100);
      console.log(gOrCBasesPercent);
      return gOrCBasesPercent > 59;
    },
    complementStrand() {
      const compDna = [];
      for(let i of this.dna) {
        switch(i) {
          case 'T':
            compDna.push('A');
            break;
          case 'A':
              compDna.push('T');
              break;
          case 'C':
            compDna.push('G');
            break;
          case 'G':
            compDna.push('C');
            break;
        }
      }
      return compDna;
    }
  }
}

//const creature1 = pAequorFactory(1, mockUpStrand());
//const creature2 = pAequorFactory(2, mockUpStrand());
//console.log(creature1);
//creature.mutate();
//console.log(creature1);
//creature1.dna = ['A', 'T', 'C', 'G'];
//creature2.dna = ['A', 'T', 'C', 'G'];
//console.log(creature1.compareDNA(creature2));
//console.log(creature1.willLikelySurvive());

//let survivorsCount = 1;
//const survivors = [];
//while(survivorsCount < 31) {
//  const creature = pAequorFactory(survivorsCount, mockUpStrand());
//  if(creature.willLikelySurvive) {
//    survivors.push(creature);
//    survivorsCount++;
//  }
//};
//
//console.log(survivors);

//console.log(creature1.dna);
//console.log(creature1.complementStrand());