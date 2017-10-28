function takeANumber(katzDeliLine, name){
  let i=0; //0 index is 1st person in line

  katzDeliLine = katzDeliLine.push(name);

  let positionInLine = i+1;
  
  return `Welcome, ${name}. You are number ${katzDeliLine[positionInLine]} in line.`
  i++;
}
