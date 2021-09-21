const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  let timer = 0 + (50 * i);
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, timer)
}

setTimeout(() => {
  console.log("")
}, (50 * sentence.length));



// for (const char of sentence) {
//   let timer = 
//   setTimeout(() => {
//     process.stdout.write(char);
//     console.log(timer)
//   }, timer)
// }