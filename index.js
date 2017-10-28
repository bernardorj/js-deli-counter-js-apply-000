function takeANumber(katzDeliLine, name){
  for (let i=0;; i++) //0 index is 1st person in line
  let positionInLine = i+1;

  katzDeliLine = katzDeliLine.push(name);

  return `Welcome, ${name}. You are number ${positionInLine} in line.`
}
