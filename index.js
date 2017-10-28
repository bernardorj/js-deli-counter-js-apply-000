function takeANumber(katzDeliLine, name){
  let i=0; //0 index is 1st person in line
  let positionInLine = i+1;

  katzDeliLine = katzDeliLine.push(name);

  return `Welcome, ${name}. You are number ${katzDeliLine[i]} in line.`
  i++;
}
