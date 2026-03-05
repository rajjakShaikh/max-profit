function maxProfit(time) {
  let bestProfit = 0;
  let bestT = 0;
  let bestP = 0;
  let bestC = 0;

  for (let t = 0; t <= time / 5; t++) {
    for (let p = 0; p <= time / 4; p++) {
      for (let c = 0; c <= time / 10; c++) {
        let totalTime = t * 5 + p * 4 + c * 10;

        if (totalTime <= time) {
          let profit = t * 1500 + p * 1000 + c * 2000;

          if (profit > bestProfit) {
            bestProfit = profit;
            bestT = t;
            bestP = p;
            bestC = c;
          }
        }
      }
    }
  }

  return {
    profit: bestProfit,
    theatre: bestT,
    pub: bestP,
    commercial: bestC,
  };
}

function calculate() {
  const time = Number(document.getElementById("timeInput").value);

  const result = maxProfit(time);

  document.getElementById("result").innerHTML = `
  <h3>Earnings: $${result.profit}</h3>
  <p><strong>Solution:</strong></p>
  <p>T: ${result.theatre} | P: ${result.pub} | C: ${result.commercial}</p>
  `;
}
