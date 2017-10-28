function takeANumber(katzDeliLine, name){
  for (let i=0;; i++) {
      let positionInLine = i+1; //0 index is 1st person in line

      katzDeliLine = katzDeliLine.push(name);

      return `Welcome, ${name}. You are number ${positionInLine} in line.`
  }
}

function nowServing(){
  let firstPerson = katzDeliLine[0];
  
  if (katzDeliLine.length > 0) {
    return firstPerson
    katzDeliLine = katzDeliLine.shift();
  } else {
    return "There is nobody waiting to be served!"
  }
}
