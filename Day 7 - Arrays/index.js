function main() {
  const n = parseInt(readLine(), 10);

  const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
  
  const arrStr = arr.reverse().toString();

  console.log(arrStr.split(',').join(' '));
}

main();
