(function () {
  const state = {
    order: [],
    index: 0,
    revealed: false,
    scores: [], // "nailed" | "close" | "nope" per round
  };

  const el = {
    progressLabel: document.getElementById("progressLabel"),
    progressFill: document.getElementById("progressFill"),
    stage: document.getElementById("stage"),
    scoreLine: document.getElementById("scoreLine"),
  };

  function shuffledIndices(n) {
    const arr = Array.from({ length: n }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function startGame() {
    state.order = shuffledIndices(ROUNDS.length);
    state.index = 0;
    state.revealed = false;
    state.scores = [];
    renderRound();
  }

  function currentRound() {
    return ROUNDS[state.order[state.index]];
  }

  function updateProgress() {
    const total = ROUNDS.length;
    el.progressLabel.textContent = `${Math.min(state.index + 1, total)} / ${total}`;
    el.progressFill.style.width = `${(state.index / total) * 100}%`;
  }

  function updateScoreLine() {
    const nailed = state.scores.filter((s) => s === "nailed").length;
    el.scoreLine.innerHTML = state.scores.length
      ? `Nailed it: <b>${nailed}</b> / ${state.scores.length}`
      : "";
  }

  function renderRound() {
    updateProgress();
    updateScoreLine();
    const r = currentRound();

    el.stage.innerHTML = `
      <div class="card">
        <div class="badge-row">
          <div class="emoji">${r.emoji}</div>
          <div>
            <p class="app-name">${r.name}</p>
            <span class="category">${r.category}</span>
          </div>
        </div>

        <div class="label">The original pitch</div>
        <p class="pitch">${r.pitch}</p>

        <div class="label">Your guess</div>
        <p style="margin:0 0 4px; font-size:0.9rem; color:#6b5f8f;">
          Name a real, documented way ordinary people actually use it &mdash; something that has nothing to do with the pitch above.
        </p>
        <textarea class="guess-input" id="guessInput" placeholder="Type your guess here&hellip;"></textarea>

        <div class="actions">
          <button class="btn-primary" id="revealBtn">Reveal the real answer</button>
        </div>
      </div>
    `;

    document.getElementById("revealBtn").addEventListener("click", showReveal);
  }

  function showReveal() {
    if (state.revealed) return;
    state.revealed = true;
    const r = currentRound();
    const guess = document.getElementById("guessInput").value.trim();
    const isLast = state.index === ROUNDS.length - 1;

    const guessBlock = guess
      ? `<div class="your-guess">Your guess: &ldquo;${escapeHtml(guess)}&rdquo;</div>`
      : "";

    el.stage.querySelector(".card").insertAdjacentHTML(
      "beforeend",
      `
      <div class="reveal">
        <div class="label">What actually happens</div>
        ${guessBlock}
        <p>${r.reveal}</p>
        <p class="source">Source: ${r.source}</p>

        <div class="label" style="margin-top:18px;">Be honest</div>
        <div class="rate-row" id="rateRow">
          <button class="rate-btn" data-rate="nailed">🎯 Nailed it</button>
          <button class="rate-btn" data-rate="close">😏 Kinda close</button>
          <button class="rate-btn" data-rate="nope">🤯 No way</button>
        </div>

        <div class="actions">
          <button class="btn-primary" id="nextBtn">${isLast ? "See my results" : "Next app"}</button>
        </div>
      </div>
      `
    );

    document.querySelectorAll("#rateRow .rate-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#rateRow .rate-btn").forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
        state.scores[state.index] = btn.dataset.rate;
        updateScoreLine();
      });
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
      if (state.scores[state.index] === undefined) state.scores[state.index] = "close";
      if (isLast) {
        renderSummary();
      } else {
        state.index += 1;
        state.revealed = false;
        renderRound();
      }
    });
  }

  function renderSummary() {
    updateProgress();
    const total = state.scores.length;
    const nailed = state.scores.filter((s) => s === "nailed").length;
    const nope = state.scores.filter((s) => s === "nope").length;

    let tier;
    if (nailed >= total * 0.7) {
      tier = { emoji: "🕵️", title: "You already work in trust & safety", text: "Almost nothing about the internet surprises you anymore." };
    } else if (nope >= total * 0.6) {
      tier = { emoji: "😇", title: "Delightfully offline", text: "You had no idea people were this creative &mdash; and honestly, good for you." };
    } else {
      tier = { emoji: "🎭", title: "Cautiously online", text: "You saw a few twists coming and got blindsided by the rest." };
    }

    el.progressFill.style.width = "100%";
    el.scoreLine.innerHTML = "";

    el.stage.innerHTML = `
      <div class="card summary">
        <div class="big-emoji">${tier.emoji}</div>
        <h2>${tier.title}</h2>
        <p>${tier.text}</p>
        <p style="font-weight:700; font-size:1.2rem; color:#1a1030;">You nailed ${nailed} out of ${total}</p>
        <div class="actions">
          <button class="btn-primary" id="replayBtn">Play again</button>
        </div>
      </div>
    `;
    document.getElementById("replayBtn").addEventListener("click", startGame);
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  startGame();
})();
