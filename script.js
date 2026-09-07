const DATA = [
  { symbol: "HBL", current: 315.72, changePct: -0.73, sector: "Banks" },
  { symbol: "UBL", current: 449.10, changePct: -0.37, sector: "Banks" },
  { symbol: "MCB", current: 400.17, changePct: -1.26, sector: "Banks" },
  { symbol: "OGDC", current: 331.69, changePct: 0.91, sector: "E&P" },
  { symbol: "LUCK", current: 433.39, changePct: -0.90, sector: "Cement" },
  { symbol: "FFC", current: 552.45, changePct: -0.04, sector: "Fertilizer" },
  { symbol: "BOP", current: 34.43, changePct: -1.60, sector: "Banks" },
  { symbol: "SYS", current: 127.72, changePct: 0.00, sector: "Tech" }
];

const tbody = document.getElementById("tbody");
const search = document.getElementById("search");

function render(list) {
  tbody.innerHTML = list.map(r => {
    const cls = r.changePct >= 0 ? "up" : "down";
    const sign = r.changePct >= 0 ? "+" : "";
    return `
      <tr>
        <td><strong>${r.symbol}</strong></td>
        <td>${r.current.toFixed(2)}</td>
        <td class="${cls}">${sign}${r.changePct.toFixed(2)}%</td>
        <td>${r.sector}</td>
      </tr>`;
  }).join("");
}

function filter() {
  const q = search.value.trim().toUpperCase();
  const list = q ? DATA.filter(r => r.symbol.includes(q)) : DATA;
  render(list);
}

document.getElementById("btnFilter").onclick = filter;
document.getElementById("btnReset").onclick = () => {
  search.value = "";
  render(DATA);
};
search.addEventListener("keydown", e => { if (e.key === "Enter") filter(); });

function calcPL() {
  const buy = parseFloat(document.getElementById("buy").value) || 0;
  const sell = parseFloat(document.getElementById("sell").value) || 0;
  const shares = parseFloat(document.getElementById("shares").value) || 0;
  const pl = (sell - buy) * shares;
  const el = document.getElementById("pl");
  el.textContent = `Net P/L: ${pl >= 0 ? "+" : ""}${pl.toFixed(2)} PKR`;
  el.style.color = pl >= 0 ? "#4ade80" : "#f87171";
}

["buy", "sell", "shares"].forEach(id => {
  document.getElementById(id).addEventListener("input", calcPL);
});

render(DATA);
calcPL();
