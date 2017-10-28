function takeANumber(katzDeliLine, name){
    let positionInLine = katzDeliLine.length + 1; //first instance the length = 0

    katzDeliLine = katzDeliLine.push(name);

    return `Welcome, ${name}. You are number ${positionInLine} in line.`
}

function nowServing(deliLine){
deliLine.shift();
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
