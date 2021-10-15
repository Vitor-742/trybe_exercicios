const n = 7
let m = (n+1)/2
let mR = m
let mL = m
for (line = 1; line <= m; line++){
    printLine = ''
    for (i = 1; i <= n; i++) {
        if (i == mR || i == mL || line == m) {
            printLine += '*'
        } else {
            printLine += ' '
        }
    }
    mR += 1
    mL -= 1
    console.log(printLine)
}

/* let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
} */