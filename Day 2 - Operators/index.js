// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
  let tip = meal_cost * (tip_percent / 100);
  let tax = meal_cost * (tax_percent / 100);

  let total_cost = meal_cost + tax + tip;

  console.log(Math.round(total_cost));
}

function main() {
    const meal_cost = parseFloat(readLine());

    const tip_percent = parseInt(readLine(), 10);

    const tax_percent = parseInt(readLine(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}

main();