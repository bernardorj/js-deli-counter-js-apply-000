function takeANumber(katzDeliLine, name){
    let positionInLine = katzDeliLine.length + 1; //first instance the length = 0

    katzDeliLine = katzDeliLine.push(name);

    return `Welcome, ${name}. You are number ${positionInLine} in line.`
}

function nowServing(deliLine){
    if (deliLine.length > 0) {
      return `Currently serving ${deliLine[0]}.`; //first person in line has index = 0
    } else {
      return "There is nobody waiting to be served!";
  }
  return deliLine
}

function currentLine(line){
  if (line.length > 0) {
    let positionInLine = line.length + 1;

    let numberedLine = line.forEach(
      line.unshift()
  );

    return `The line is currently: ${numberedLine}. `

  } else {
    return "The line is currently empty."
  }
}
