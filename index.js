function takeANumber(katzDeliLine, name){
  for (let i=0;; i++) {
    if (i===0){
      let positionInLine = i+1; //0 index is 1st person in line

      katzDeliLine = katzDeliLine.push(name);

      return `Welcome, ${name}. You are number ${positionInLine} in line.`  
    } else {
      positionInLine = i+1; //0 index is 1st person in line

      katzDeliLine = katzDeliLine.push(name);

      return `Welcome, ${name}. You are number ${positionInLine} in line.`
    }
  }
}
