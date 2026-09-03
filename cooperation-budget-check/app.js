const municipalities = [
  { name: "가람군", population: 30000, amount: 250000 },
  { name: "나봄시", population: 45000, amount: 500000 },
  { name: "다솔구", population: 80000, amount: 600000 },
  { name: "라윤시", population: 60000, amount: 700000 },
  { name: "마을군", population: 25000, amount: 200000 },
  { name: "바람시", population: 100000, amount: 950000 },
  { name: "사계구", population: 55000, amount: 600000 },
  { name: "아현시", population: 70000, amount: 650000 },
  { name: "자연군", population: 40000, amount: 380000 },
  { name: "차돌시", population: 90000, amount: 880000 }
];

const body = document.getElementById("resultBody");
const approvedCountEl = document.getElementById("approvedCount");
const rejectedCountEl = document.getElementById("rejectedCount");
const approvedTotalEl = document.getElementById("approvedTotal");

let approvedCount = 0;
let rejectedCount = 0;
let approvedTotal = 0;

municipalities.forEach(item => {
  const limit = item.population * 10;
  const approved = item.amount <= limit;

  if (approved) {
    approvedCount += 1;
    approvedTotal += item.amount;
  } else {
    rejectedCount += 1;
  }

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${item.name}</td>
    <td>${item.population.toLocaleString("ko-KR")}</td>
    <td>${item.amount.toLocaleString("ko-KR")}원</td>
    <td>${limit.toLocaleString("ko-KR")}원</td>
    <td><span class="badge ${approved ? "approved" : "rejected"}">${approved ? "승인" : "반려"}</span></td>
  `;
  body.appendChild(tr);
});

approvedCountEl.textContent = `${approvedCount}건`;
rejectedCountEl.textContent = `${rejectedCount}건`;
approvedTotalEl.textContent = `${approvedTotal.toLocaleString("ko-KR")}원`;
