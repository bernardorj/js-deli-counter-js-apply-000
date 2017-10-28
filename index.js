function takeANumber(katzDeliLine, name){
    let i = katzDeliLine.length-1;
    let positionInLine = katzDeliLine.length; //0 index is 1st person in line

    katzDeliLine = katzDeliLine.push(name);

    return `Welcome, ${name}. You are number ${positionInLine} in line.`
}

function nowServing(){
  if (katzDeliLine.length > 0) {
    return katzDeliLine[0] //first person in line has index = 0
    katzDeliLine = katzDeliLine.shift();
  } else {
    return "There is nobody waiting to be served!"
  }
}
