process.stdout.write('hello from spinner1.js... \rheyyy\n');

const vTxt = "|/-\|/-\\|"

let delay = 200;

for (const char of vTxt) {
  setTimeout(() => {
    process.stdout.write("\r" + char);
  }, delay);
  delay += 150;
}

setTimeout (() =>{
  process.stdout.write('\n')
}, delay += 150);