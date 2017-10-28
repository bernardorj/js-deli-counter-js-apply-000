function takeANumber(katzDeliLine, name){
  for (let i=0;; i++) {
    katzDeliLine = katzDeliLine.push(name);
    let positionInLine = i+1; //0 index is 1st person in line
    return `Welcome, ${name}. You are number ${positionInLine} in line.`
  }
}
