function takeANumber(katzDeliLine, name){
    let positionInLine = katzDeliLine.length + 1; //first instance the length = 0

    katzDeliLine = katzDeliLine.push(name);

    return `Welcome, ${name}. You are number ${positionInLine} in line.`
}

function nowServing(katzDeliLine){
    if (katzDeliLine.length > 0) {
      return `Currently serving ${katzDeliLine[0]}.` //first person in line has index = 0
      katzDeliLine = katzDeliLine.shift();
    } else {
      return "There is nobody waiting to be served!"
  }
}
