    // Declare second integer, double, and String variables.
    let sI;
    let sD;
    let sS;

    // Read and save an integer, double, and String to your variables.
    sI = readLine();
    sD = readLine();
    sS = readLine();
    // Print the sum of both integer variables on a new line.
    console.log(i + parseInt(sI));
    // Print the sum of the double variables on a new line.
    console.log((d + parseFloat(sD)).toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s.concat(sS));