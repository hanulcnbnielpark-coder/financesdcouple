const categories = [
  "전체",
  "1. 초기 데이터 구축",
  "2. BIM 모델링",
  "3. 시공 관리",
  "4. 시뮬레이션 및 검토",
  "5. 성과품 및 보고서",
  "6. 시스템 및 인력",
  "7. 기타 경비"
];

const searchKeywords = [
  { term: "토목", description: "터널·지형·구조물 관련 공종", tags: ["토목", "터널", "지형", "지반", "구조물", "수직구", "정거장"] },
  { term: "토공", description: "지형·지반 모델링 관련 공종", tags: ["토공", "지형", "지반"] },
  { term: "터널", description: "본선·연결터널 및 지하 구조물", tags: ["터널", "본선터널", "연결터널", "수직구"] },
  { term: "철도", description: "철도·도시철도 BIM 공종", tags: ["철도", "정거장", "터널", "BIM"] },
  { term: "구조물", description: "터널·수직구·정거장 모델링", tags: ["구조물", "본선터널", "수직구", "정거장"] },
  { term: "모델링", description: "3D·구조물 BIM 모델 구축", tags: ["모델링", "모델", "3D"] },
  { term: "시공", description: "시공관리·시뮬레이션 공종", tags: ["시공", "공정", "시뮬레이션", "간섭"] },
  { term: "보고서", description: "성과품·수행보고서 공종", tags: ["보고서", "성과품"] },
  { term: "시스템", description: "CDE 및 정보 연계 공종", tags: ["시스템", "CDE", "정보 연계"] }
];

const defaultWorks = [
  { id: 1, code: "INIT-001", cat: categories[1], middle: "계획 및 기준 수립", name: "BIM 수행계획서 작성", unit: "식", price: 6500000, kind: "labor", recommended: true, qty: 1 },
  { id: 2, code: "INIT-002", cat: categories[1], middle: "계획 및 기준 수립", name: "설계 자료 검토", unit: "식", price: 4800000, kind: "labor", recommended: true, qty: 1 },
  { id: 3, code: "INIT-003", cat: categories[1], middle: "코드 및 분류 체계", name: "코드체계 정립", unit: "식", price: 5500000, kind: "labor", recommended: true, qty: 1 },
  { id: 4, code: "INIT-004", cat: categories[1], middle: "수량 및 내역 작성", name: "객체별 수량 분개 및 집계", unit: "식", price: null, kind: "labor", recommended: false, qty: 1 },
  { id: 5, code: "INIT-005", cat: categories[1], middle: "정보 연계", name: "공정정보 연계", unit: "식", price: 7200000, kind: "labor", recommended: false, qty: 1 },
  { id: 6, code: "BIM-001", cat: categories[2], middle: "지형 및 지반 모델링", name: "3D 지형 모델 구축", unit: "km", price: 7200000, kind: "labor", recommended: true, qty: 2, source: "length" },
  { id: 7, code: "BIM-002", cat: categories[2], middle: "지형 및 지반 모델링", name: "3D 지반 모델 구축", unit: "km", price: null, kind: "labor", recommended: false, qty: 2, source: "length" },
  { id: 8, code: "BIM-003", cat: categories[2], middle: "구조물 모델링", name: "본선터널", unit: "km", price: 18400000, kind: "labor", recommended: true, qty: 2, source: "length" },
  { id: 9, code: "BIM-004", cat: categories[2], middle: "구조물 모델링", name: "수직구", unit: "개소", price: 7500000, kind: "labor", recommended: true, qty: 2, source: "shaft" },
  { id: 10, code: "BIM-005", cat: categories[2], middle: "구조물 모델링", name: "정거장", unit: "개소", price: 12800000, kind: "labor", recommended: true, qty: 3, source: "station" },
  { id: 11, code: "BIM-006", cat: categories[2], middle: "구조물 모델링", name: "연결터널", unit: "식", price: null, kind: "labor", recommended: false, qty: 1 },
  { id: 12, code: "SITE-001", cat: categories[3], middle: "현장 BIM 운영", name: "시공 BIM 모델 업데이트", unit: "월", price: 3100000, kind: "labor", recommended: true, qty: 18, source: "period" },
  { id: 13, code: "SITE-002", cat: categories[3], middle: "공정 및 기성 관리", name: "공정정보 현행화", unit: "월", price: null, kind: "labor", recommended: false, qty: 18, source: "period" },
  { id: 14, code: "SIM-001", cat: categories[4], middle: "공정 시뮬레이션", name: "4D 공정 시뮬레이션", unit: "식", price: 16500000, kind: "labor", recommended: true, qty: 1 },
  { id: 15, code: "SIM-002", cat: categories[4], middle: "간섭 및 시공성 검토", name: "설계 간섭 검토", unit: "식", price: 9800000, kind: "labor", recommended: true, qty: 1 },
  { id: 16, code: "SIM-003", cat: categories[4], middle: "가상 시공", name: "가상 시공 시뮬레이션", unit: "식", price: null, kind: "labor", recommended: false, qty: 1 },
  { id: 17, code: "OUT-001", cat: categories[5], middle: "BIM 성과품", name: "BIM 모델 성과품 작성", unit: "식", price: 8400000, kind: "labor", recommended: true, qty: 1 },
  { id: 18, code: "OUT-002", cat: categories[5], middle: "보고서", name: "월간 BIM 수행보고서", unit: "월", price: 850000, kind: "labor", recommended: true, qty: 18, source: "period" },
  { id: 19, code: "SYS-001", cat: categories[6], middle: "투입 인력", name: "BIM 총괄 관리자", unit: "인월", price: 7800000, kind: "labor", recommended: false, qty: 18, source: "period" },
  { id: 20, code: "SYS-002", cat: categories[6], middle: "시스템 운영", name: "CDE 시스템 운영", unit: "월", price: 950000, kind: "expense", recommended: true, qty: 18, source: "period" },
  { id: 21, code: "EXP-001", cat: categories[7], middle: "직접 경비", name: "BIM 소프트웨어 사용료", unit: "월", price: 620000, kind: "expense", recommended: true, qty: 18, source: "period" },
  { id: 22, code: "EXP-002", cat: categories[7], middle: "직접 경비", name: "출장 및 현장 체재비", unit: "식", price: null, kind: "expense", recommended: false, qty: 1 }
];

const seedProjects = [
  { id: "P-260601", name: "도시철도 ○○선 BIM 용역", client: "○○도시철도공사", type: "철도 · 도시철도", status: "작성중", amount: 289436180, date: "2026-06-09", selectedIds: [1,2,3,6,8,9,10,12,14,15,17,18,20,21] },
  { id: "P-260522", name: "△△고속도로 터널 BIM 구축", client: "△△건설", type: "도로 · 터널", status: "제출완료", amount: 412800000, date: "2026-05-22", selectedIds: [1,2,6,7,8,9,12,14,15,17,18,19,20,21,22] },
  { id: "P-260410", name: "광역철도 정거장 디지털 모델링", client: "한국○○공단", type: "철도 · 도시철도", status: "계약완료", amount: 196450000, date: "2026-04-10", selectedIds: [1,2,3,10,14,15,17,18,20,21] }
];

const seedHistory = [
  { id: "H-260522", project: "△△고속도로 터널 BIM 구축", client: "△△건설", type: "도로 · 터널", supply: 375272727, vat: 37527273, total: 412800000, status: "제출완료", date: "2026-05-22" },
  { id: "H-260410", project: "광역철도 정거장 디지털 모델링", client: "한국○○공단", type: "철도 · 도시철도", supply: 178590909, vat: 17859091, total: 196450000, status: "계약완료", date: "2026-04-10" },
  { id: "H-260318", project: "스마트 건설관리 플랫폼 구축", client: "○○엔지니어링", type: "건축 · 플랜트", supply: 288000000, vat: 28800000, total: 316800000, status: "계약완료", date: "2026-03-18" },
  { id: "H-260205", project: "지하차도 BIM 시공관리", client: "○○시청", type: "도로 · 터널", supply: 142000000, vat: 14200000, total: 156200000, status: "제출완료", date: "2026-02-05" }
];

const initialState = {
  page: "estimate",
  step: 1,
  activeCategory: "전체",
  search: "",
  filter: "all",
  quote: {
    project: "도시철도 ○○선 BIM 용역",
    client: "○○도시철도공사",
    manager: "전략기획팀",
    validity: "견적일로부터 30일",
    type: "철도 · 도시철도",
    stage: "실시설계",
    period: 18,
    length: 2,
    segments: {
      tunnel: 2,
      bridge: 0,
      ground: 0,
      underpass: 0,
      utype: 0
    },
    station: 3,
    shaft: 2,
    ventilation: 1,
    level: "LOD 300 · 실시설계 수준",
    note: "표준 공종표와 사내 기준 단가를 기반으로 산출한 개략 견적입니다."
  },
  rules: { indirect: 5, technical: 8, profit: 10, discount: 0, vat: 10 },
  works: defaultWorks.map(item => ({ ...item, selected: item.recommended })),
  projects: seedProjects,
  history: seedHistory
};

const storageKey = "hanul-standard-estimate-v2";
let state = loadState();
let tradeSearch = "";
let projectSearch = "";
let historySearch = "";

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (!saved) return structuredClone(initialState);
    return {
      ...structuredClone(initialState),
      ...saved,
      quote: {
        ...initialState.quote,
        ...(saved.quote || {}),
        segments: {
          ...initialState.quote.segments,
          ...(saved.quote?.segments || {})
        }
      },
      rules: { ...initialState.rules, ...(saved.rules || {}) },
      works: Array.isArray(saved.works) ? saved.works : structuredClone(initialState.works),
      projects: Array.isArray(saved.projects) ? saved.projects : structuredClone(initialState.projects),
      history: Array.isArray(saved.history) ? saved.history : structuredClone(initialState.history)
    };
  } catch {
    return structuredClone(initialState);
  }
}

function persist(showMessage = false) {
  localStorage.setItem(storageKey, JSON.stringify(state));
  if (showMessage) toast("현재 상태를 로컬 DB에 저장했습니다.");
}

function won(value) {
  return `${Math.round(Number(value) || 0).toLocaleString("ko-KR")}원`;
}

function commaNumber(value) {
  if (value === null || value === undefined || value === "") return "";
  return Math.round(Number(value) || 0).toLocaleString("ko-KR");
}

function parseMoney(value) {
  const cleaned = String(value ?? "").replace(/[^\d-]/g, "");
  return cleaned === "" || cleaned === "-" ? null : Number(cleaned);
}

function workSearchText(work) {
  const base = `${work.code} ${work.name} ${work.middle} ${work.cat}`;
  const aliases = searchKeywords
    .filter(keyword => keyword.tags.some(tag => base.toLowerCase().includes(tag.toLowerCase())))
    .map(keyword => `${keyword.term} ${keyword.tags.join(" ")}`)
    .join(" ");
  return `${base} ${aliases}`.toLowerCase();
}

function workMatchesSearch(work, query) {
  const normalized = String(query || "").trim().toLowerCase();
  if (!normalized) return true;
  const keyword = searchKeywords.find(item => item.term.toLowerCase() === normalized);
  if (keyword) {
    const base = `${work.code} ${work.name} ${work.middle} ${work.cat}`.toLowerCase();
    return keyword.tags.some(tag => base.includes(tag.toLowerCase()));
  }
  return workSearchText(work).includes(normalized);
}

function getSearchSuggestions(query) {
  const normalized = String(query || "").trim().toLowerCase();
  if (!normalized) return [];
  const keywordSuggestions = searchKeywords.filter(item =>
    item.term.toLowerCase().includes(normalized) ||
    item.tags.some(tag => tag.toLowerCase().includes(normalized))
  );
  const workSuggestions = state.works
    .filter(work => workSearchText(work).includes(normalized))
    .slice(0, 5)
    .map(work => ({ term: work.name, description: `${work.code} · ${work.middle}` }));
  return [...keywordSuggestions, ...workSuggestions]
    .filter((item, index, list) => list.findIndex(candidate => candidate.term === item.term) === index)
    .slice(0, 7);
}

function formatMoneyControl(input) {
  const value = parseMoney(input.value);
  input.value = commaNumber(value);
  return value;
}

function suggestionMarkup(query) {
  return getSearchSuggestions(query)
    .map(item => `<button class="suggestion-button" type="button" data-suggestion="${item.term}"><span>${item.term}</span><small>${item.description}</small></button>`)
    .join("");
}

function applyLiveWorkSearch(query) {
  state.search = query;
  let visible = 0;
  document.querySelectorAll("tr[data-work-id]").forEach(row => {
    const work = state.works.find(item => item.id === Number(row.dataset.workId));
    const show = work && workMatchesSearch(work, query);
    row.style.display = show ? "" : "none";
    if (show) visible += 1;
  });
  const count = document.querySelector("#workVisibleCount");
  if (count) count.textContent = visible;
  const suggestions = document.querySelector("#workSuggestions");
  if (suggestions) {
    suggestions.innerHTML = suggestionMarkup(query);
    suggestions.classList.toggle("open", Boolean(query.trim() && suggestions.children.length));
  }
}

function todayText() {
  return new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
}

function dateKey() {
  const d = new Date();
  return `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
}

function syncQuantities() {
  syncMainlineLength();
  const sources = {
    period: Number(state.quote.period) || 0,
    length: Number(state.quote.length) || 0,
    station: Number(state.quote.station) || 0,
    shaft: Number(state.quote.shaft) || 0
  };
  state.works.forEach(work => {
    if (work.source && !work.manualQty) work.qty = sources[work.source];
  });
}

function syncMainlineLength() {
  const segments = state.quote.segments || initialState.quote.segments;
  state.quote.length = Object.values(segments).reduce((sum, value) => sum + (Number(value) || 0), 0);
}

function recommendedLod(stage) {
  return {
    "기본설계": "LOD 200 · 기본설계 수준",
    "실시설계": "LOD 300 · 실시설계 수준",
    "시공단계": "LOD 350 · 시공 수준"
  }[stage] || "LOD 300 · 실시설계 수준";
}

function segmentTotal() {
  return Object.values(state.quote.segments || {}).reduce((sum, value) => sum + (Number(value) || 0), 0);
}

function calculate() {
  syncQuantities();
  const selected = state.works.filter(work => work.selected);
  const labor = selected.filter(work => work.kind === "labor" && work.price !== null)
    .reduce((sum, work) => sum + work.qty * work.price, 0);
  const expense = selected.filter(work => work.kind === "expense" && work.price !== null)
    .reduce((sum, work) => sum + work.qty * work.price, 0);
  const direct = labor + expense;
  const indirect = Math.round(labor * state.rules.indirect / 100);
  const technical = Math.round(labor * state.rules.technical / 100);
  const profit = Math.round((labor + indirect + technical) * state.rules.profit / 100);
  const subtotal = direct + indirect + technical + profit;
  const discount = Math.round(subtotal * state.rules.discount / 100);
  const supply = subtotal - discount;
  const vat = Math.round(supply * state.rules.vat / 100);
  const total = supply + vat;
  const empty = selected.filter(work => work.price === null);
  return { selected, labor, expense, direct, indirect, technical, profit, subtotal, discount, supply, vat, total, empty };
}

const pageMeta = {
  estimate: ["ESTIMATE WORKSPACE", "새 표준 견적 작성"],
  projects: ["PROJECT MANAGEMENT", "견적 프로젝트"],
  trades: ["STANDARD DATA", "표준 공종 관리"],
  prices: ["STANDARD DATA", "기준 단가 관리"],
  rules: ["STANDARD DATA", "산정 규칙 관리"],
  history: ["DATA ARCHIVE", "견적 이력 DB"],
  reports: ["BUSINESS INSIGHT", "분석 리포트"]
};

function setPage(page) {
  state.page = page;
  document.body.classList.remove("mobile-nav-open");
  document.querySelectorAll(".nav-item").forEach(button => {
    button.classList.toggle("active", button.dataset.page === page);
  });
  document.querySelector("#pageEyebrow").textContent = pageMeta[page][0];
  document.querySelector("#pageTitle").textContent = pageMeta[page][1];
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function render() {
  const content = document.querySelector("#content");
  const renderers = {
    estimate: renderEstimate,
    projects: renderProjects,
    trades: renderTrades,
    prices: renderPrices,
    rules: renderRules,
    history: renderHistory,
    reports: renderReports
  };
  content.innerHTML = renderers[state.page]();
  bindPageEvents();
}

function stepper() {
  const labels = [
    ["사업 조건·공종", "기본 조건과 범위 선택"],
    ["수량·단가 검토", "산출 수량과 기준 단가"],
    ["제경비·보정", "요율과 최종 공급가액"],
    ["견적서 출력", "검토·저장·PDF 출력"]
  ];
  return `<div class="stepper">${labels.map((item, index) => {
    const step = index + 1;
    const cls = step === state.step ? "active" : step < state.step ? "done" : "";
    return `<button class="step ${cls}" data-step="${step}">
      <span class="step-number">${step}</span>
      <span><strong>${item[0]}</strong><small>${item[1]}</small></span>
    </button>`;
  }).join("")}</div>`;
}

function renderEstimate() {
  const bodies = {
    1: renderStepOne,
    2: renderStepTwo,
    3: renderStepThree,
    4: renderStepFour
  };
  return `${stepper()}${bodies[state.step]()}`;
}

function quoteForm() {
  syncMainlineLength();
  const segmentLabels = [
    ["tunnel", "터널"],
    ["bridge", "교량"],
    ["ground", "토공·지상"],
    ["underpass", "지하차도"],
    ["utype", "U-Type"]
  ];
  const recommended = recommendedLod(state.quote.stage);
  return `<section class="panel">
    <div class="panel-header"><div><h3>사업 기본 조건</h3><p>표준 수량과 공종 추천에 반영됩니다.</p></div></div>
    <div class="panel-body">
      <div class="field-grid">
        <div class="field full"><label>프로젝트명 <em>필수</em></label><input class="control quote-field" data-key="project" value="${state.quote.project}"></div>
        <div class="field full"><label>발주처 <em>견적서 표시</em></label><input class="control quote-field" data-key="client" value="${state.quote.client}"></div>
        <div class="field"><label>작성 부서</label><input class="control quote-field" data-key="manager" value="${state.quote.manager}"></div>
        <div class="field"><label>유효기간</label><select class="control quote-field" data-key="validity">
          ${["견적일로부터 30일","견적일로부터 60일","별도 협의"].map(v => `<option ${v === state.quote.validity ? "selected" : ""}>${v}</option>`).join("")}
        </select></div>
        <div class="field full"><label>사업 유형</label><select class="control quote-field" data-key="type">
          ${["철도 · 도시철도","도로 · 터널","교량 · 구조물","건축 · 플랜트"].map(v => `<option ${v === state.quote.type ? "selected" : ""}>${v}</option>`).join("")}
        </select></div>
        <div class="field full">
          <label>사업 단계 <em>LOD 자동 추천</em></label>
          <div class="stage-selector">
            ${["기본설계","실시설계","시공단계"].map(stage => `<button type="button" class="stage-option ${state.quote.stage === stage ? "active" : ""}" data-stage="${stage}">${stage}</button>`).join("")}
          </div>
        </div>
        <div class="field full"><label>공기</label><div class="inline-fields"><input type="number" min="1" class="control quote-field" data-key="period" value="${state.quote.period}"><select class="control"><option>개월</option></select></div></div>
        <div class="field full">
          <label>본선 연장 <em>세부 구간 합계</em></label>
          <div class="inline-fields"><input class="control total-length" value="${state.quote.length.toFixed(2)}" readonly><select class="control"><option>km</option></select></div>
        </div>
        <div class="field full">
          <div class="segment-card">
            <div class="segment-head"><strong>본선 km 세부 구성</strong><span>합계 <b id="segmentTotal">${segmentTotal().toFixed(2)} km</b></span></div>
            <div class="segment-grid">
              ${segmentLabels.map(([key, label]) => `<div class="segment-field"><label>${label} (km)</label><input type="number" min="0" step=".1" class="control segment-input" data-segment="${key}" value="${state.quote.segments[key]}"></div>`).join("")}
            </div>
            <div class="segment-status">세부 구간 합계가 본선 연장과 km 연동 공종 수량에 자동 반영됩니다.</div>
          </div>
        </div>
        <div class="field full"><label>정거장</label><div class="inline-fields"><input type="number" min="0" class="control quote-field" data-key="station" value="${state.quote.station}"><select class="control"><option>개소</option></select></div></div>
        <div class="field full"><label>수직구</label><div class="inline-fields"><input type="number" min="0" class="control quote-field" data-key="shaft" value="${state.quote.shaft}"><select class="control"><option>개소</option></select></div></div>
        <div class="field full"><label>환기구</label><div class="inline-fields"><input type="number" min="0" class="control quote-field" data-key="ventilation" value="${state.quote.ventilation}"><select class="control"><option>개소</option></select></div></div>
        <div class="field full"><label>LOD (Level of Development) <em>권장 ${recommended.split(" · ")[0]}</em></label><select class="control quote-field" data-key="level">
          ${["LOD 200 · 기본설계 수준","LOD 300 · 실시설계 수준","LOD 350 · 시공 수준","LOD 400 · 제작·시공 상세"].map(v => `<option ${v === state.quote.level ? "selected" : ""}>${v}</option>`).join("")}
        </select></div>
      </div>
      <div class="lod-guide"><strong>${state.quote.stage} 권장 상세수준: ${recommended}</strong><span>사업 단계에 맞춰 권장값을 제안합니다. 과업 요구사항에 따라 직접 변경할 수 있습니다.</span></div>
    </div>
  </section>`;
}

function summaryPanel(includeVat = false) {
  const c = calculate();
  return `<section class="panel sticky">
    <div class="summary-hero"><span>${includeVat ? "최종 견적금액 · VAT 포함" : "현재 공급가액 · VAT 별도"}</span><strong>${won(includeVat ? c.total : c.supply)}</strong></div>
    <div class="summary-list">
      <div class="summary-row"><span>선택 공종</span><strong>${c.selected.length}개</strong></div>
      <div class="summary-row"><span>직접 인건비</span><strong>${won(c.labor)}</strong></div>
      <div class="summary-row"><span>직접 경비</span><strong>${won(c.expense)}</strong></div>
      <div class="summary-row"><span>제경비·이윤</span><strong>${won(c.indirect + c.technical + c.profit)}</strong></div>
      ${includeVat ? `<div class="summary-row"><span>부가가치세</span><strong>${won(c.vat)}</strong></div>` : ""}
      <div class="summary-row total"><span>${includeVat ? "합계금액" : "공급가액"}</span><strong>${won(includeVat ? c.total : c.supply)}</strong></div>
    </div>
    ${c.empty.length ? `<div class="warning-box">선택된 공종 중 ${c.empty.length}개는 기준 단가가 없습니다. 총액에서 제외되며 별도 협의 항목으로 출력됩니다.</div>` : ""}
  </section>`;
}

function renderStepOne() {
  syncQuantities();
  const baseFiltered = state.works.filter(work => {
    const catMatch = state.activeCategory === "전체" || work.cat === state.activeCategory;
    const filterMatch = state.filter === "all" || (state.filter === "ready" ? work.price !== null : work.price === null);
    return catMatch && filterMatch;
  });
  const visibleCount = baseFiltered.filter(work => workMatchesSearch(work, state.search)).length;
  const suggestions = getSearchSuggestions(state.search);
  return `<div class="estimate-layout">
    ${quoteForm()}
    <section class="panel">
      <div class="panel-header">
        <div><h3>표준 공종 선택</h3><p>공종표 기준으로 적용 범위를 선택합니다.</p></div>
        <button class="button soft small" id="recommendWorks">추천 공종 재선택</button>
      </div>
      <div class="panel-body">
        <div class="toolbar">
          <div class="search-wrap">
            <input class="control search-control" id="workSearch" autocomplete="off" placeholder="공종 또는 키워드 검색 (예: 토목, 토공)" value="${state.search}">
            <div class="search-suggestions ${suggestions.length ? "open" : ""}" id="workSuggestions">
              ${suggestions.map(item => `<button class="suggestion-button" type="button" data-suggestion="${item.term}"><span>${item.term}</span><small>${item.description}</small></button>`).join("")}
            </div>
          </div>
          <select class="control" id="workFilter" style="width:145px">
            <option value="all" ${state.filter === "all" ? "selected" : ""}>전체 상태</option>
            <option value="ready" ${state.filter === "ready" ? "selected" : ""}>단가 등록</option>
            <option value="empty" ${state.filter === "empty" ? "selected" : ""}>기준 미등록</option>
          </select>
        </div>
      </div>
      <div class="category-tabs">
        ${categories.map(cat => `<button class="tab-button ${cat === state.activeCategory ? "active" : ""}" data-category="${cat}">${cat}</button>`).join("")}
      </div>
      <div class="table-wrap tall">
        <table class="data-table">
          <thead><tr><th class="center" style="width:45px">선택</th><th>공종</th><th class="right">수량</th><th>단위</th><th class="right">기준 단가</th><th>상태</th></tr></thead>
          <tbody>${baseFiltered.map(work => `<tr data-work-id="${work.id}" style="${workMatchesSearch(work, state.search) ? "" : "display:none"}">
            <td class="center"><input type="checkbox" class="checkbox work-check" data-id="${work.id}" ${work.selected ? "checked" : ""}></td>
            <td class="item-name"><strong>${work.name}</strong><small>${work.code} · ${work.middle}</small></td>
            <td class="right">${work.qty.toLocaleString("ko-KR")}</td>
            <td>${work.unit}</td>
            <td class="right">${work.price === null ? "-" : work.price.toLocaleString("ko-KR")}</td>
            <td><span class="status-badge ${work.price === null ? "empty" : "ready"}">${work.price === null ? "기준 미등록" : "단가 등록"}</span></td>
          </tr>`).join("")}</tbody>
        </table>
      </div>
      <div class="panel-footer"><span id="workVisibleCount">${visibleCount}</span>개 공종 표시 중 · 전체 표준 공종 155개</div>
    </section>
    ${summaryPanel()}
  </div>
  ${workflowButtons()}`;
}

function renderStepTwo() {
  const c = calculate();
  return `<div class="two-column">
    <section class="panel">
      <div class="panel-header">
        <div><h3>수량·단가 검토</h3><p>자동 산출 수량과 기준 단가를 프로젝트 조건에 맞게 조정합니다.</p></div>
        <button class="button secondary small" id="resetQuantities">조건 기준으로 초기화</button>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead><tr><th>공종</th><th>산정 기준</th><th class="right">수량</th><th>단위</th><th class="right">단가</th><th class="right">금액</th><th>검토</th></tr></thead>
          <tbody>${c.selected.map(work => `<tr>
            <td class="item-name"><strong>${work.name}</strong><small>${work.code} · ${work.cat.replace(/^\d+\.\s/, "")}</small></td>
            <td>${work.source ? {period:"수행기간",length:"본선연장",station:"정거장",shaft:"수직구"}[work.source] : "정액"}</td>
            <td class="right"><input class="table-input qty-edit" type="number" min="0" step=".1" data-id="${work.id}" value="${work.qty}"></td>
            <td>${work.unit}</td>
            <td class="right"><input class="table-input price-input price-edit money-input" type="text" inputmode="numeric" data-id="${work.id}" value="${commaNumber(work.price)}" placeholder="별도 협의"></td>
            <td class="right"><strong>${work.price === null ? "-" : won(work.qty * work.price)}</strong></td>
            <td><span class="status-badge ${work.price === null ? "empty" : "ready"}">${work.manualQty ? "수동 조정" : work.price === null ? "단가 필요" : "검토 완료"}</span></td>
          </tr>`).join("")}</tbody>
        </table>
      </div>
      <div class="panel-footer">수정된 수량과 단가는 이 프로젝트 견적에 즉시 반영됩니다.</div>
    </section>
    ${summaryPanel()}
  </div>
  ${workflowButtons()}`;
}

function renderStepThree() {
  const c = calculate();
  return `<div class="two-column">
    <section class="panel">
      <div class="panel-header"><div><h3>제경비 및 보정</h3><p>회사 표준 요율을 적용하고 프로젝트별 조정값을 검토합니다.</p></div></div>
      <div class="panel-body">
        <div class="rule-grid">
          ${ruleCard("indirect", "간접비", "직접 인건비 기준으로 관리·지원 비용을 반영합니다.", state.rules.indirect)}
          ${ruleCard("technical", "기술료", "전문 기술과 BIM 수행 노하우에 대한 기술료입니다.", state.rules.technical)}
          ${ruleCard("profit", "이윤", "인건비와 제경비 합계 기준의 목표 이윤입니다.", state.rules.profit)}
          ${ruleCard("discount", "견적 조정", "영업 판단에 따른 할인 또는 최종 보정률입니다.", state.rules.discount)}
          ${ruleCard("vat", "부가가치세", "최종 공급가액에 적용되는 부가가치세율입니다.", state.rules.vat)}
        </div>
        <div class="help-box">음수 보정 대신 견적 조정률을 양수로 입력하면 공급가액에서 차감됩니다. 모든 요율 변경은 즉시 계산됩니다.</div>
      </div>
    </section>
    <section class="panel sticky">
      <div class="panel-header"><div><h3>금액 산출 내역</h3><p>요율 반영 결과</p></div></div>
      <div class="summary-list">
        <div class="summary-row"><span>직접 인건비</span><strong>${won(c.labor)}</strong></div>
        <div class="summary-row"><span>직접 경비</span><strong>${won(c.expense)}</strong></div>
        <div class="summary-row"><span>간접비 ${state.rules.indirect}%</span><strong>${won(c.indirect)}</strong></div>
        <div class="summary-row"><span>기술료 ${state.rules.technical}%</span><strong>${won(c.technical)}</strong></div>
        <div class="summary-row"><span>이윤 ${state.rules.profit}%</span><strong>${won(c.profit)}</strong></div>
        <div class="summary-row"><span>견적 조정 ${state.rules.discount}%</span><strong>-${won(c.discount)}</strong></div>
        <div class="summary-row total"><span>공급가액</span><strong>${won(c.supply)}</strong></div>
        <div class="summary-row"><span>VAT ${state.rules.vat}%</span><strong>${won(c.vat)}</strong></div>
        <div class="summary-row total"><span>최종 합계</span><strong>${won(c.total)}</strong></div>
      </div>
    </section>
  </div>
  ${workflowButtons()}`;
}

function ruleCard(key, name, description, value) {
  return `<article class="rule-card"><h4>${name}</h4><p>${description}</p><div class="rate-control"><input class="control rule-edit" type="number" min="0" step=".1" data-key="${key}" value="${value}"><b>%</b></div></article>`;
}

function renderStepFour() {
  const c = calculate();
  return `<div class="two-column">
    <section class="panel">
      <div class="panel-header">
        <div><h3>최종 견적 검토</h3><p>견적 정보를 확인한 후 프로젝트와 이력 DB에 저장합니다.</p></div>
        <span class="status-badge complete">출력 준비 완료</span>
      </div>
      <div class="panel-body">
        <div class="metric-grid">
          <div class="metric-card"><span>선택 공종</span><strong>${c.selected.length}개</strong><small>별도 협의 ${c.empty.length}개</small></div>
          <div class="metric-card"><span>공급가액</span><strong>${won(c.supply)}</strong><small>VAT 별도</small></div>
          <div class="metric-card"><span>부가가치세</span><strong>${won(c.vat)}</strong><small>${state.rules.vat}% 적용</small></div>
          <div class="metric-card"><span>합계금액</span><strong>${won(c.total)}</strong><small>VAT 포함</small></div>
        </div>
        <div class="two-equal">
          <div class="panel" style="box-shadow:none">
            <div class="panel-header"><h3>견적 정보</h3></div>
            <div class="summary-list">
              <div class="summary-row"><span>프로젝트명</span><strong>${state.quote.project}</strong></div>
              <div class="summary-row"><span>발주처</span><strong>${state.quote.client}</strong></div>
              <div class="summary-row"><span>사업 유형</span><strong>${state.quote.type}</strong></div>
              <div class="summary-row"><span>작성 부서</span><strong>${state.quote.manager}</strong></div>
              <div class="summary-row"><span>유효기간</span><strong>${state.quote.validity}</strong></div>
            </div>
          </div>
          <div class="panel" style="box-shadow:none">
            <div class="panel-header"><h3>사업 조건</h3></div>
            <div class="summary-list">
              <div class="summary-row"><span>사업 단계</span><strong>${state.quote.stage}</strong></div>
              <div class="summary-row"><span>수행 기간</span><strong>${state.quote.period}개월</strong></div>
              <div class="summary-row"><span>본선 연장</span><strong>${state.quote.length.toFixed(2)}km</strong></div>
              <div class="summary-row"><span>터널 / 교량 / 토공</span><strong>${state.quote.segments.tunnel} / ${state.quote.segments.bridge} / ${state.quote.segments.ground}km</strong></div>
              <div class="summary-row"><span>정거장 / 수직구 / 환기구</span><strong>${state.quote.station} / ${state.quote.shaft} / ${state.quote.ventilation}개소</strong></div>
              <div class="summary-row"><span>상세수준</span><strong>${state.quote.level}</strong></div>
            </div>
          </div>
        </div>
        <div class="field" style="margin-top:18px"><label>견적 비고</label><textarea class="control quote-field" data-key="note">${state.quote.note}</textarea></div>
      </div>
      <div class="panel-footer page-actions">
        <button class="button secondary" id="saveProject">프로젝트 저장</button>
        <button class="button soft" id="saveHistory">견적 이력 등록</button>
        <button class="button primary" id="openPrint">견적서 미리보기 / 출력</button>
      </div>
    </section>
    ${summaryPanel(true)}
  </div>
  ${workflowButtons()}`;
}

function workflowButtons() {
  return `<div class="workflow-actions">
    <button class="button secondary" id="prevStep" ${state.step === 1 ? "disabled" : ""}>이전 단계</button>
    <div class="page-actions">
      <button class="button secondary" id="saveDraft">임시저장</button>
      ${state.step < 4 ? `<button class="button primary" id="nextStep">다음 단계</button>` : `<button class="button primary" id="openPrintBottom">견적서 출력</button>`}
    </div>
  </div>`;
}

function renderProjects() {
  const list = state.projects.filter(p => `${p.id} ${p.name} ${p.client}`.toLowerCase().includes(projectSearch.toLowerCase()));
  const total = state.projects.reduce((sum, p) => sum + p.amount, 0);
  return `<div class="page-intro"><div><h2>견적 프로젝트 관리</h2><p>작성 중인 견적부터 제출·계약 완료 프로젝트까지 한곳에서 관리합니다.</p></div><button class="button primary" id="newProject">새 프로젝트</button></div>
  <div class="metric-grid">
    <div class="metric-card"><span>전체 프로젝트</span><strong>${state.projects.length}건</strong><small>로컬 DB 누적</small></div>
    <div class="metric-card"><span>작성 중</span><strong>${state.projects.filter(p => p.status === "작성중").length}건</strong><small>검토 필요</small></div>
    <div class="metric-card"><span>제출·계약</span><strong>${state.projects.filter(p => p.status !== "작성중").length}건</strong><small>이력 관리 대상</small></div>
    <div class="metric-card"><span>누적 견적금액</span><strong>${won(total)}</strong><small>VAT 포함 기준</small></div>
  </div>
  <section class="panel">
    <div class="panel-header"><div><h3>프로젝트 목록</h3><p>프로젝트를 열면 해당 조건으로 견적 작성 화면이 복원됩니다.</p></div><input class="control" id="projectSearch" style="width:260px" placeholder="프로젝트 또는 발주처 검색" value="${projectSearch}"></div>
    <div class="table-wrap"><table class="data-table">
      <thead><tr><th>프로젝트 ID</th><th>프로젝트명</th><th>발주처</th><th>유형</th><th>상태</th><th class="right">견적금액</th><th>수정일</th><th>관리</th></tr></thead>
      <tbody>${list.map(p => `<tr>
        <td>${p.id}</td><td class="item-name"><strong>${p.name}</strong><small>선택 공종 ${(p.selectedIds || []).length}개</small></td><td>${p.client}</td><td>${p.type}</td>
        <td><span class="status-badge ${p.status === "작성중" ? "draft" : "complete"}">${p.status}</span></td>
        <td class="right"><strong>${won(p.amount)}</strong></td><td>${p.date}</td>
        <td><div class="page-actions"><button class="button soft small project-open" data-id="${p.id}">열기</button><button class="button secondary small project-copy" data-id="${p.id}">복제</button><button class="button danger small project-delete" data-id="${p.id}">삭제</button></div></td>
      </tr>`).join("")}</tbody>
    </table></div>
  </section>`;
}

function renderTrades() {
  const list = state.works.filter(w => `${w.code} ${w.name} ${w.middle} ${w.cat}`.toLowerCase().includes(tradeSearch.toLowerCase()));
  return `<div class="page-intro"><div><h2>표준 공종 마스터</h2><p>공종 코드, 분류, 단위와 비용 성격을 관리합니다.</p></div><button class="button primary" id="addTrade">공종 추가</button></div>
  <div class="metric-grid">
    <div class="metric-card"><span>표준 공종표</span><strong>155개</strong><small>엑셀 기준 전체 항목</small></div>
    <div class="metric-card"><span>시스템 등록</span><strong>${state.works.length}개</strong><small>현재 프로토타입 활성 항목</small></div>
    <div class="metric-card"><span>단가 등록</span><strong>${state.works.filter(w => w.price !== null).length}개</strong><small>즉시 견적 가능</small></div>
    <div class="metric-card"><span>기준 미등록</span><strong>${state.works.filter(w => w.price === null).length}개</strong><small>보완 필요</small></div>
  </div>
  <section class="panel">
    <div class="panel-header"><div><h3>공종 목록</h3><p>공종을 수정하면 신규 견적부터 바로 적용됩니다.</p></div><input class="control" id="tradeSearch" style="width:280px" placeholder="공종 코드·명칭 검색" value="${tradeSearch}"></div>
    <div class="table-wrap"><table class="data-table">
      <thead><tr><th>공종 코드</th><th>대분류</th><th>중분류</th><th>공종명</th><th>단위</th><th>비용 구분</th><th>관리</th></tr></thead>
      <tbody>${list.map(w => `<tr><td><strong>${w.code}</strong></td><td>${w.cat}</td><td>${w.middle}</td><td>${w.name}</td><td>${w.unit}</td><td>${w.kind === "labor" ? "인건비" : "경비"}</td><td><button class="button secondary small trade-edit" data-id="${w.id}">수정</button></td></tr>`).join("")}</tbody>
    </table></div>
  </section>`;
}

function renderPrices() {
  return `<div class="page-intro"><div><h2>기준 단가 관리</h2><p>표준 공종별 기준 단가와 등록 상태를 편집합니다.</p></div><button class="button secondary" id="exportPrices">단가표 CSV 내보내기</button></div>
  <section class="panel">
    <div class="panel-header"><div><h3>공종별 기준 단가</h3><p>금액 입력 후 변경 저장을 누르면 견적 엔진에 반영됩니다.</p></div><button class="button primary" id="savePrices">변경 저장</button></div>
    <div class="table-wrap"><table class="data-table">
      <thead><tr><th>공종 코드</th><th>공종명</th><th>분류</th><th>단위</th><th>비용 구분</th><th class="right">기준 단가</th><th>적용 기준일</th><th>상태</th></tr></thead>
      <tbody>${state.works.map(w => `<tr><td>${w.code}</td><td class="item-name"><strong>${w.name}</strong><small>${w.middle}</small></td><td>${w.cat.replace(/^\d+\.\s/, "")}</td><td>${w.unit}</td><td>${w.kind === "labor" ? "인건비" : "경비"}</td><td class="right"><input class="table-input price-input master-price-edit money-input" type="text" inputmode="numeric" data-id="${w.id}" value="${commaNumber(w.price)}" placeholder="미등록"></td><td>2026.04.29</td><td><span class="status-badge ${w.price === null ? "empty" : "ready"}">${w.price === null ? "미등록" : "등록"}</span></td></tr>`).join("")}</tbody>
    </table></div>
  </section>`;
}

function renderRules() {
  return `<div class="page-intro"><div><h2>산정 규칙 관리</h2><p>모든 신규 견적에 기본 적용되는 회사 표준 요율입니다.</p></div><button class="button primary" id="saveRules">표준 규칙 저장</button></div>
  <section class="panel"><div class="panel-header"><div><h3>기본 제경비 요율</h3><p>프로젝트별 견적 3단계에서 별도 보정할 수 있습니다.</p></div><span class="status-badge ready">현재 적용 중</span></div>
    <div class="panel-body"><div class="rule-grid">
      ${ruleCard("indirect", "간접비", "직접 인건비를 기준으로 산출합니다.", state.rules.indirect)}
      ${ruleCard("technical", "기술료", "직접 인건비를 기준으로 산출합니다.", state.rules.technical)}
      ${ruleCard("profit", "이윤", "인건비·간접비·기술료 합계를 기준으로 산출합니다.", state.rules.profit)}
      ${ruleCard("discount", "기본 견적 조정", "공급가액 산출 전 차감하는 기본 조정률입니다.", state.rules.discount)}
      ${ruleCard("vat", "부가가치세", "공급가액 기준의 부가가치세율입니다.", state.rules.vat)}
    </div></div>
  </section>
  <section class="panel" style="margin-top:18px"><div class="panel-header"><div><h3>수량 자동 연계 규칙</h3><p>사업 조건과 공종 수량을 연결하는 현재 규칙입니다.</p></div></div>
    <div class="table-wrap"><table class="data-table"><thead><tr><th>기준 변수</th><th>적용 단위</th><th>연계 공종</th><th>계산 방식</th><th>상태</th></tr></thead>
    <tbody>
      <tr><td>수행 기간</td><td>개월</td><td>${state.works.filter(w => w.source === "period").map(w => w.name).join(", ")}</td><td>기간 × 월 단가</td><td><span class="status-badge ready">활성</span></td></tr>
      <tr><td>본선 연장</td><td>km</td><td>${state.works.filter(w => w.source === "length").map(w => w.name).join(", ")}</td><td>세부 구간 합계 × km 단가</td><td><span class="status-badge ready">활성</span></td></tr>
      <tr><td>정거장</td><td>개소</td><td>${state.works.filter(w => w.source === "station").map(w => w.name).join(", ")}</td><td>개소 × 단가</td><td><span class="status-badge ready">활성</span></td></tr>
      <tr><td>수직구</td><td>개소</td><td>${state.works.filter(w => w.source === "shaft").map(w => w.name).join(", ")}</td><td>개소 × 단가</td><td><span class="status-badge ready">활성</span></td></tr>
    </tbody></table></div>
  </section>`;
}

function renderHistory() {
  const list = state.history.filter(h => `${h.id} ${h.project} ${h.client} ${h.type}`.toLowerCase().includes(historySearch.toLowerCase()));
  const total = state.history.reduce((sum, h) => sum + h.total, 0);
  return `<div class="page-intro"><div><h2>견적 이력 데이터베이스</h2><p>제출·계약 견적을 누적해 향후 유사 프로젝트 비교 데이터로 활용합니다.</p></div><button class="button secondary" id="exportHistory">이력 CSV 내보내기</button></div>
  <div class="metric-grid">
    <div class="metric-card"><span>누적 견적</span><strong>${state.history.length}건</strong><small>현재 로컬 DB</small></div>
    <div class="metric-card"><span>누적 금액</span><strong>${won(total)}</strong><small>VAT 포함</small></div>
    <div class="metric-card"><span>평균 견적</span><strong>${won(total / Math.max(state.history.length, 1))}</strong><small>프로젝트당</small></div>
    <div class="metric-card"><span>계약 완료</span><strong>${state.history.filter(h => h.status === "계약완료").length}건</strong><small>성과 분석 가능</small></div>
  </div>
  <section class="panel">
    <div class="panel-header"><div><h3>견적 이력</h3><p>검색 및 프로젝트 비교를 위한 기준 데이터입니다.</p></div><input class="control" id="historySearch" style="width:280px" placeholder="프로젝트·발주처 검색" value="${historySearch}"></div>
    <div class="table-wrap"><table class="data-table">
      <thead><tr><th>이력 ID</th><th>프로젝트</th><th>발주처</th><th>사업 유형</th><th class="right">공급가액</th><th class="right">합계금액</th><th>상태</th><th>등록일</th></tr></thead>
      <tbody>${list.map(h => `<tr><td>${h.id}</td><td class="item-name"><strong>${h.project}</strong><small>${h.type}</small></td><td>${h.client}</td><td>${h.type}</td><td class="right">${won(h.supply)}</td><td class="right"><strong>${won(h.total)}</strong></td><td><span class="status-badge ${h.status === "계약완료" ? "ready" : "complete"}">${h.status}</span></td><td>${h.date}</td></tr>`).join("")}</tbody>
    </table></div>
  </section>`;
}

function renderReports() {
  const total = state.history.reduce((sum, h) => sum + h.total, 0);
  const byType = {};
  state.history.forEach(h => { byType[h.type] = (byType[h.type] || 0) + h.total; });
  const maxType = Math.max(...Object.values(byType), 1);
  const byMonth = {};
  state.history.forEach(h => { const month = h.date.slice(0, 7); byMonth[month] = (byMonth[month] || 0) + h.total; });
  const maxMonth = Math.max(...Object.values(byMonth), 1);
  return `<div class="page-intro"><div><h2>견적 분석 리포트</h2><p>누적 견적 DB를 사업 유형과 기간 기준으로 요약합니다.</p></div><button class="button secondary" id="refreshReport">데이터 새로고침</button></div>
  <div class="metric-grid">
    <div class="metric-card"><span>분석 프로젝트</span><strong>${state.history.length}건</strong><small>견적 이력 기준</small></div>
    <div class="metric-card"><span>총 견적 규모</span><strong>${won(total)}</strong><small>VAT 포함</small></div>
    <div class="metric-card"><span>평균 프로젝트</span><strong>${won(total / Math.max(state.history.length, 1))}</strong><small>건당 평균</small></div>
    <div class="metric-card"><span>계약 전환율</span><strong>${Math.round(state.history.filter(h => h.status === "계약완료").length / Math.max(state.history.length, 1) * 100)}%</strong><small>계약 완료 / 전체</small></div>
  </div>
  <div class="two-equal">
    <section class="panel report-panel"><div class="panel-header"><div><h3>사업 유형별 견적 규모</h3><p>누적 합계금액 기준</p></div></div><div class="panel-body chart-list">
      ${Object.entries(byType).sort((a,b) => b[1]-a[1]).map(([name,value]) => `<div class="chart-row"><span>${name}</span><div class="chart-bar"><i style="width:${value/maxType*100}%"></i></div><strong>${Math.round(value/1000000)}백만</strong></div>`).join("")}
    </div></section>
    <section class="panel report-panel"><div class="panel-header"><div><h3>월별 견적 추이</h3><p>견적 등록일 기준</p></div></div><div class="panel-body chart-list">
      ${Object.entries(byMonth).sort().map(([name,value]) => `<div class="chart-row"><span>${name}</span><div class="chart-bar"><i style="width:${value/maxMonth*100}%"></i></div><strong>${Math.round(value/1000000)}백만</strong></div>`).join("")}
    </div></section>
  </div>
  <section class="panel" style="margin-top:18px"><div class="panel-header"><div><h3>표준 데이터 완성도</h3><p>현재 활성 공종 기준 관리 지표</p></div></div><div class="panel-body">
    ${progressRow("단가 등록률", state.works.filter(w => w.price !== null).length / state.works.length * 100, `${state.works.filter(w => w.price !== null).length} / ${state.works.length}`)}
    ${progressRow("수량 연계 규칙", state.works.filter(w => w.source).length / state.works.length * 100, `${state.works.filter(w => w.source).length}개 공종`)}
    ${progressRow("공종 분류 체계", 100, "7개 대분류 적용")}
  </div></section>`;
}

function progressRow(name, value, label) {
  return `<div class="chart-row"><span>${name}</span><div class="chart-bar"><i style="width:${Math.max(3, value)}%"></i></div><strong>${label}</strong></div>`;
}

function bindPageEvents() {
  document.querySelectorAll("[data-step]").forEach(button => button.addEventListener("click", () => {
    const target = Number(button.dataset.step);
    if (target > 1 && !calculate().selected.length) return toast("먼저 적용 공종을 선택해 주세요.");
    state.step = target;
    render();
  }));

  document.querySelectorAll(".quote-field").forEach(input => input.addEventListener("change", () => {
    const key = input.dataset.key;
    state.quote[key] = input.type === "number" ? Number(input.value) : input.value;
    syncQuantities();
    persist();
    render();
  }));
  document.querySelectorAll(".quote-field").forEach(input => input.addEventListener("input", () => {
    const key = input.dataset.key;
    state.quote[key] = input.type === "number" ? Number(input.value) : input.value;
  }));
  document.querySelectorAll(".stage-option").forEach(button => button.addEventListener("click", () => {
    state.quote.stage = button.dataset.stage;
    state.quote.level = recommendedLod(state.quote.stage);
    persist();
    render();
    toast(`${state.quote.stage} 기준 ${state.quote.level.split(" · ")[0]}를 추천했습니다.`);
  }));
  document.querySelectorAll(".segment-input").forEach(input => input.addEventListener("input", () => {
    state.quote.segments[input.dataset.segment] = Math.max(0, Number(input.value) || 0);
    syncMainlineLength();
    const totalInput = document.querySelector(".total-length");
    const totalLabel = document.querySelector("#segmentTotal");
    if (totalInput) totalInput.value = state.quote.length.toFixed(2);
    if (totalLabel) totalLabel.textContent = `${state.quote.length.toFixed(2)} km`;
    persist();
  }));
  document.querySelectorAll(".segment-input").forEach(input => input.addEventListener("change", () => {
    state.quote.segments[input.dataset.segment] = Math.max(0, Number(input.value) || 0);
    syncMainlineLength();
    persist();
    render();
  }));

  document.querySelector("#prevStep")?.addEventListener("click", () => { state.step = Math.max(1, state.step - 1); render(); });
  document.querySelector("#nextStep")?.addEventListener("click", () => {
    if (!calculate().selected.length) return toast("먼저 적용 공종을 선택해 주세요.");
    state.step = Math.min(4, state.step + 1);
    render();
  });
  document.querySelector("#saveDraft")?.addEventListener("click", () => persist(true));
  document.querySelector("#openPrintBottom")?.addEventListener("click", openPrint);

  if (state.page === "estimate") bindEstimateEvents();
  if (state.page === "projects") bindProjectEvents();
  if (state.page === "trades") bindTradeEvents();
  if (state.page === "prices") bindPriceEvents();
  if (state.page === "rules") bindRuleEvents();
  if (state.page === "history") bindHistoryEvents();
  if (state.page === "reports") document.querySelector("#refreshReport")?.addEventListener("click", () => { render(); toast("최신 이력 데이터로 갱신했습니다."); });
}

function bindEstimateEvents() {
  document.querySelectorAll(".work-check").forEach(input => input.addEventListener("change", () => {
    state.works.find(w => w.id === Number(input.dataset.id)).selected = input.checked;
    persist();
    render();
  }));
  document.querySelectorAll("[data-category]").forEach(button => button.addEventListener("click", () => { state.activeCategory = button.dataset.category; render(); }));
  const workSearch = document.querySelector("#workSearch");
  const workSuggestions = document.querySelector("#workSuggestions");
  workSearch?.addEventListener("input", event => applyLiveWorkSearch(event.target.value));
  workSearch?.addEventListener("focus", event => applyLiveWorkSearch(event.target.value));
  workSearch?.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    const firstSuggestion = document.querySelector(".suggestion-button");
    if (!firstSuggestion) return;
    event.preventDefault();
    workSearch.value = firstSuggestion.dataset.suggestion;
    applyLiveWorkSearch(workSearch.value);
    workSuggestions?.classList.remove("open");
  });
  workSearch?.addEventListener("blur", () => {
    setTimeout(() => workSuggestions?.classList.remove("open"), 150);
  });
  workSuggestions?.addEventListener("mousedown", event => {
    const button = event.target.closest(".suggestion-button");
    if (!button) return;
    event.preventDefault();
    workSearch.value = button.dataset.suggestion;
    applyLiveWorkSearch(workSearch.value);
    workSuggestions.classList.remove("open");
    persist();
  });
  document.querySelector("#workFilter")?.addEventListener("change", event => { state.filter = event.target.value; render(); });
  document.querySelector("#recommendWorks")?.addEventListener("click", () => {
    state.works.forEach(w => w.selected = w.recommended);
    persist();
    render();
    toast("사업 조건 기준 추천 공종을 다시 선택했습니다.");
  });
  document.querySelectorAll(".qty-edit").forEach(input => input.addEventListener("change", () => {
    const work = state.works.find(w => w.id === Number(input.dataset.id));
    work.qty = Number(input.value) || 0;
    work.manualQty = true;
    persist();
    render();
  }));
  document.querySelectorAll(".qty-edit").forEach(input => input.addEventListener("input", () => {
    const work = state.works.find(w => w.id === Number(input.dataset.id));
    work.qty = Number(input.value) || 0;
    work.manualQty = true;
  }));
  document.querySelectorAll(".price-edit").forEach(input => input.addEventListener("change", () => {
    const work = state.works.find(w => w.id === Number(input.dataset.id));
    work.price = formatMoneyControl(input);
    persist();
    render();
  }));
  document.querySelectorAll(".price-edit").forEach(input => input.addEventListener("input", () => {
    state.works.find(w => w.id === Number(input.dataset.id)).price = formatMoneyControl(input);
  }));
  document.querySelector("#resetQuantities")?.addEventListener("click", () => {
    state.works.forEach(w => { w.manualQty = false; });
    syncQuantities();
    persist();
    render();
    toast("사업 조건 기준 수량으로 초기화했습니다.");
  });
  document.querySelectorAll(".rule-edit").forEach(input => input.addEventListener("change", () => {
    state.rules[input.dataset.key] = Math.max(0, Number(input.value) || 0);
    persist();
    render();
  }));
  document.querySelectorAll(".rule-edit").forEach(input => input.addEventListener("input", () => {
    state.rules[input.dataset.key] = Math.max(0, Number(input.value) || 0);
  }));
  document.querySelector("#saveProject")?.addEventListener("click", saveCurrentProject);
  document.querySelector("#saveHistory")?.addEventListener("click", saveCurrentHistory);
  document.querySelector("#openPrint")?.addEventListener("click", openPrint);
}

function bindProjectEvents() {
  document.querySelector("#projectSearch")?.addEventListener("change", event => { projectSearch = event.target.value; render(); });
  document.querySelector("#newProject")?.addEventListener("click", () => {
    state.quote = structuredClone(initialState.quote);
    state.quote.project = "신규 BIM 용역";
    state.quote.client = "";
    state.works.forEach(w => { w.selected = w.recommended; w.manualQty = false; });
    state.step = 1;
    setPage("estimate");
    toast("새 프로젝트 견적을 시작합니다.");
  });
  document.querySelectorAll(".project-open").forEach(button => button.addEventListener("click", () => openProject(button.dataset.id)));
  document.querySelectorAll(".project-copy").forEach(button => button.addEventListener("click", () => {
    const source = state.projects.find(p => p.id === button.dataset.id);
    const copy = { ...source, id: `P-${Date.now().toString().slice(-6)}`, name: `${source.name} 복사본`, status: "작성중", date: new Date().toISOString().slice(0,10) };
    state.projects.unshift(copy);
    persist();
    render();
    toast("프로젝트를 복제했습니다.");
  }));
  document.querySelectorAll(".project-delete").forEach(button => button.addEventListener("click", () => {
    state.projects = state.projects.filter(p => p.id !== button.dataset.id);
    persist();
    render();
    toast("프로젝트를 삭제했습니다.");
  }));
}

function openProject(id) {
  const project = state.projects.find(p => p.id === id);
  if (!project) return;
  state.quote.project = project.name;
  state.quote.client = project.client;
  state.quote.type = project.type;
  if (project.conditions) {
    state.quote = {
      ...state.quote,
      ...project.conditions,
      segments: {
        ...state.quote.segments,
        ...(project.conditions.segments || {})
      }
    };
  }
  state.works.forEach(w => { w.selected = (project.selectedIds || []).includes(w.id); });
  state.step = 1;
  setPage("estimate");
  toast("프로젝트 견적을 불러왔습니다.");
}

function bindTradeEvents() {
  document.querySelector("#tradeSearch")?.addEventListener("change", event => { tradeSearch = event.target.value; render(); });
  document.querySelector("#addTrade")?.addEventListener("click", () => openTradeModal());
  document.querySelectorAll(".trade-edit").forEach(button => button.addEventListener("click", () => openTradeModal(Number(button.dataset.id))));
}

function openTradeModal(id = null) {
  const work = id ? state.works.find(w => w.id === id) : { code: "", cat: categories[1], middle: "", name: "", unit: "식", kind: "labor", price: null };
  const panel = document.querySelector("#modalPanel");
  panel.innerHTML = `<div class="modal-head"><h3>${id ? "표준 공종 수정" : "표준 공종 추가"}</h3><button class="button secondary small modal-close">닫기</button></div>
    <div class="modal-body"><div class="field-grid">
      <div class="field"><label>공종 코드</label><input class="control" id="modalCode" value="${work.code}"></div>
      <div class="field"><label>단위</label><input class="control" id="modalUnit" value="${work.unit}"></div>
      <div class="field full"><label>대분류</label><select class="control" id="modalCat">${categories.slice(1).map(c => `<option ${c === work.cat ? "selected" : ""}>${c}</option>`).join("")}</select></div>
      <div class="field full"><label>중분류</label><input class="control" id="modalMiddle" value="${work.middle}"></div>
      <div class="field full"><label>공종명</label><input class="control" id="modalName" value="${work.name}"></div>
      <div class="field"><label>비용 구분</label><select class="control" id="modalKind"><option value="labor" ${work.kind === "labor" ? "selected" : ""}>인건비</option><option value="expense" ${work.kind === "expense" ? "selected" : ""}>경비</option></select></div>
      <div class="field"><label>기준 단가</label><input type="text" inputmode="numeric" class="control money-input" id="modalPrice" value="${commaNumber(work.price)}" placeholder="미등록"></div>
    </div></div>
    <div class="modal-foot"><button class="button secondary modal-close">취소</button><button class="button primary" id="confirmTrade">${id ? "변경 저장" : "공종 추가"}</button></div>`;
  openModal();
  panel.querySelectorAll(".modal-close").forEach(button => button.addEventListener("click", closeModal));
  panel.querySelector("#modalPrice").addEventListener("input", event => formatMoneyControl(event.target));
  panel.querySelector("#confirmTrade").addEventListener("click", () => {
    const values = {
      code: panel.querySelector("#modalCode").value.trim(),
      unit: panel.querySelector("#modalUnit").value.trim(),
      cat: panel.querySelector("#modalCat").value,
      middle: panel.querySelector("#modalMiddle").value.trim(),
      name: panel.querySelector("#modalName").value.trim(),
      kind: panel.querySelector("#modalKind").value,
      price: parseMoney(panel.querySelector("#modalPrice").value)
    };
    if (!values.code || !values.name) return toast("공종 코드와 공종명을 입력해 주세요.");
    if (id) Object.assign(work, values);
    else state.works.push({ id: Math.max(...state.works.map(w => w.id)) + 1, ...values, qty: 1, selected: false, recommended: false });
    persist();
    closeModal();
    render();
    toast(id ? "표준 공종을 수정했습니다." : "새 표준 공종을 추가했습니다.");
  });
}

function bindPriceEvents() {
  document.querySelectorAll(".master-price-edit").forEach(input => input.addEventListener("change", () => {
    state.works.find(w => w.id === Number(input.dataset.id)).price = formatMoneyControl(input);
  }));
  document.querySelectorAll(".master-price-edit").forEach(input => input.addEventListener("input", () => {
    state.works.find(w => w.id === Number(input.dataset.id)).price = formatMoneyControl(input);
  }));
  document.querySelector("#savePrices")?.addEventListener("click", () => { persist(); render(); toast("기준 단가 변경사항을 저장했습니다."); });
  document.querySelector("#exportPrices")?.addEventListener("click", exportPrices);
}

function bindRuleEvents() {
  document.querySelectorAll(".rule-edit").forEach(input => input.addEventListener("change", () => {
    state.rules[input.dataset.key] = Math.max(0, Number(input.value) || 0);
  }));
  document.querySelectorAll(".rule-edit").forEach(input => input.addEventListener("input", () => {
    state.rules[input.dataset.key] = Math.max(0, Number(input.value) || 0);
  }));
  document.querySelector("#saveRules")?.addEventListener("click", () => { persist(); render(); toast("회사 표준 산정 규칙을 저장했습니다."); });
}

function bindHistoryEvents() {
  document.querySelector("#historySearch")?.addEventListener("change", event => { historySearch = event.target.value; render(); });
  document.querySelector("#exportHistory")?.addEventListener("click", exportHistory);
}

function saveCurrentProject() {
  const c = calculate();
  const existing = state.projects.find(p => p.name === state.quote.project);
  const record = {
    id: existing?.id || `P-${Date.now().toString().slice(-6)}`,
    name: state.quote.project,
    client: state.quote.client,
    type: state.quote.type,
    status: "작성중",
    amount: c.total,
    date: new Date().toISOString().slice(0,10),
    selectedIds: c.selected.map(w => w.id),
    conditions: {
      stage: state.quote.stage,
      period: state.quote.period,
      length: state.quote.length,
      segments: { ...state.quote.segments },
      station: state.quote.station,
      shaft: state.quote.shaft,
      ventilation: state.quote.ventilation,
      level: state.quote.level
    }
  };
  if (existing) Object.assign(existing, record);
  else state.projects.unshift(record);
  persist();
  toast("현재 견적을 프로젝트에 저장했습니다.");
}

function saveCurrentHistory() {
  const c = calculate();
  const id = `H-${Date.now().toString().slice(-6)}`;
  state.history.unshift({
    id,
    project: state.quote.project,
    client: state.quote.client,
    type: state.quote.type,
    supply: c.supply,
    vat: c.vat,
    total: c.total,
    status: "제출완료",
    date: new Date().toISOString().slice(0,10)
  });
  persist();
  toast("견적 이력 DB에 등록했습니다.");
}

function buildQuoteDocument() {
  const c = calculate();
  let lastCategory = "";
  let index = 0;
  const rows = [];
  c.selected.forEach(work => {
    if (work.cat !== lastCategory) {
      rows.push(`<tr class="category-row"><td colspan="7">${work.cat}</td></tr>`);
      lastCategory = work.cat;
    }
    index += 1;
    rows.push(`<tr><td>${index}</td><td>${work.name}</td><td>${work.middle}</td><td class="number">${work.qty.toLocaleString("ko-KR")}</td><td>${work.unit}</td><td class="number">${work.price === null ? "별도 협의" : work.price.toLocaleString("ko-KR")}</td><td class="number">${work.price === null ? "-" : (work.qty * work.price).toLocaleString("ko-KR")}</td></tr>`);
  });
  const quoteNo = `HW-${dateKey()}-${String(state.history.length + 1).padStart(3, "0")}`;
  document.querySelector("#quoteDocument").innerHTML = `
    <div class="quote-head"><div class="quote-brand"><img src="./hanul-logo.png" alt=""><div><strong>주식회사 한울씨앤비</strong><small>HANUL C&amp;B · BIM CONSULTING</small></div></div><h2>견 적 서</h2></div>
    <div class="quote-meta"><div><h3>${state.quote.client || "발주처"} 귀중</h3><p>아래와 같이 BIM 용역 견적을 제출합니다.</p><p><strong>사업명:</strong> ${state.quote.project}</p></div>
      <div class="quote-info"><p><span>견적번호</span><b>${quoteNo}</b></p><p><span>견적일자</span><b>${todayText()}</b></p><p><span>유효기간</span><b>${state.quote.validity}</b></p><p><span>작성부서</span><b>${state.quote.manager}</b></p></div></div>
    <div class="quote-condition">${state.quote.type} · ${state.quote.stage} · 수행기간 ${state.quote.period}개월 · 본선 ${state.quote.length.toFixed(2)}km (터널 ${state.quote.segments.tunnel} / 교량 ${state.quote.segments.bridge} / 토공 ${state.quote.segments.ground}km) · 정거장 ${state.quote.station}개소 · 수직구 ${state.quote.shaft}개소 · 환기구 ${state.quote.ventilation}개소 · ${state.quote.level}</div>
    <table class="quote-table"><thead><tr><th>No.</th><th>공종명</th><th>세부 구분</th><th>수량</th><th>단위</th><th>단가</th><th>금액</th></tr></thead><tbody>${rows.join("")}</tbody></table>
    <div class="quote-bottom"><div class="quote-notes"><strong>견적 조건 및 유의사항</strong>${state.quote.note}<br>1. 기준 단가 미등록 공종은 합계에서 제외되며 별도 협의합니다.<br>2. 과업 범위와 현장 조건 변경 시 금액이 조정될 수 있습니다.<br>3. 본 견적의 유효기간은 ${state.quote.validity}입니다.</div>
      <div class="quote-totals">
        <div class="quote-total"><span>직접 인건비</span><strong>${won(c.labor)}</strong></div>
        <div class="quote-total"><span>직접 경비</span><strong>${won(c.expense)}</strong></div>
        <div class="quote-total"><span>간접비</span><strong>${won(c.indirect)}</strong></div>
        <div class="quote-total"><span>기술료</span><strong>${won(c.technical)}</strong></div>
        <div class="quote-total"><span>이윤</span><strong>${won(c.profit)}</strong></div>
        <div class="quote-total"><span>견적 조정</span><strong>-${won(c.discount)}</strong></div>
        <div class="quote-total"><span>공급가액</span><strong>${won(c.supply)}</strong></div>
        <div class="quote-total"><span>부가가치세</span><strong>${won(c.vat)}</strong></div>
        <div class="quote-total grand"><span>합계금액</span><strong>${won(c.total)}</strong></div>
      </div></div>
    <div class="quote-footer"><span>주식회사 한울씨앤비 · 표준견적 시스템</span><span>${quoteNo}</span></div>`;
}

function openPrint() {
  if (!calculate().selected.length) return toast("출력할 공종이 없습니다.");
  buildQuoteDocument();
  document.querySelector("#printStage").classList.add("open");
  document.querySelector("#printStage").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closePrint() {
  document.querySelector("#printStage").classList.remove("open");
  document.querySelector("#printStage").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function openModal() {
  document.querySelector("#modalBackdrop").classList.add("open");
  document.querySelector("#modalBackdrop").setAttribute("aria-hidden", "false");
}
function closeModal() {
  document.querySelector("#modalBackdrop").classList.remove("open");
  document.querySelector("#modalBackdrop").setAttribute("aria-hidden", "true");
}

function csvDownload(filename, rows) {
  const csv = "\ufeff" + rows.map(row => row.map(value => `"${String(value ?? "").replaceAll('"', '""')}"`).join(",")).join("\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function exportPrices() {
  csvDownload("한울씨앤비_기준단가표.csv", [["공종코드","대분류","중분류","공종명","단위","비용구분","기준단가"], ...state.works.map(w => [w.code,w.cat,w.middle,w.name,w.unit,w.kind === "labor" ? "인건비" : "경비",w.price ?? ""])]);
  toast("기준 단가표 CSV를 생성했습니다.");
}
function exportHistory() {
  csvDownload("한울씨앤비_견적이력.csv", [["이력ID","프로젝트","발주처","사업유형","공급가액","VAT","합계","상태","등록일"], ...state.history.map(h => [h.id,h.project,h.client,h.type,h.supply,h.vat,h.total,h.status,h.date])]);
  toast("견적 이력 CSV를 생성했습니다.");
}

function toast(message) {
  const el = document.querySelector("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => el.classList.remove("show"), 2300);
}

document.querySelectorAll(".nav-item").forEach(button => button.addEventListener("click", () => setPage(button.dataset.page)));
document.querySelector("#mobileMenu").addEventListener("click", () => document.body.classList.toggle("mobile-nav-open"));
document.querySelector("#quickSave").addEventListener("click", () => persist(true));
document.querySelector("#closePrint").addEventListener("click", closePrint);
document.querySelector("#doPrint").addEventListener("click", () => { buildQuoteDocument(); window.print(); });
document.querySelector("#modalBackdrop").addEventListener("click", event => { if (event.target.id === "modalBackdrop") closeModal(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") { closeModal(); closePrint(); } });

setPage(state.page || "estimate");
