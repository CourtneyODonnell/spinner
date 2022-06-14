//process.stdout.write('hello from spinner1.js... \rheyyy\n');
const spinnerArray = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '|', '/', '-', '\\', '|', '/', '-', '\\', '|', '|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
//array to hold the positions of the spinner from spinner 1

//loop through array with timeouts
for (let i = 0; i < spinnerArray.length; i++) {
  //if i = last position in array (length-1) then...
  if (i === spinnerArray.length - 1) {
  setTimeout(() => {
    process.stdout.write(`\r${spinnerArray[i]}\n`);
    //log with return spinner array [i] and '\n'ewline because it's the last one
  }, 300 + (i * 200));
  // delay 
  } else {
    //for every other i position in array
    setTimeout(() => {
      process.stdout.write(`\r${spinnerArray[i]}`);
    }, 300 + (i * 200));
  }
};

/*
code from spinner 1:

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1200);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1400);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 1600);
setTimeout(() => {
  process.stdout.write('\r| ');
});
*/