const chapterMap = [
  {
    range: "Ch. 1-3",
    title: "The Clinic, the Home, and the Pressure Machine",
    summary:
      "Ethan Carter is introduced as gifted, respected, useful, and increasingly hollow. The clinic is real good, but it becomes a furnace when stewardship turns into identity."
  },
  {
    range: "Ch. 4-7",
    title: "The First Pour and the Living Room Warning",
    summary:
      "The story shows compromise arriving through pressure, secrecy, fatigue, and refusal to tell the truth at home. Lauren sees the distance before the crash makes it public."
  },
  {
    range: "Ch. 8-10",
    title: "Rachel's Last Errand, Driftwood, and Headlights",
    summary:
      "Rachel, Sophia, and Jackson are rendered as ordinary image-bearers with names, plans, humor, and love. Their deaths must never become only a plot device for Ethan's redemption."
  },
  {
    range: "Ch. 12-14",
    title: "Arraignment, Glass, and Statements",
    summary:
      "The law names what happened, Lauren names what was already broken, and Ethan finally says the clean sentence: he was drunk, he drove, and a family is dead because of him."
  },
  {
    range: "Ch. 15-20",
    title: "Intake, Rulebook, Violence, Needle, Cot",
    summary:
      "Prison strips Ethan of status and safety. Heroin becomes a false mercy, lowering the volume on reality without forgiving or healing anything."
  },
  {
    range: "Ch. 21-22",
    title: "The Voice in the Yard and a Crack in the Concrete",
    summary:
      "Ezra's preaching confronts guilt as a false god, self-destruction as counterfeit repentance, and control as one more chain Ethan welded himself."
  },
  {
    range: "Ch. 23-25",
    title: "Ashes, Embers, Four Days, No Magic Here",
    summary:
      "Grace does not bypass withdrawal, trauma, memory, or consequence. Redemption begins in truth and continues in ordinary endurance."
  },
  {
    range: "Ch. 26-30",
    title: "The Weight Shared, the Prison PT, and David Matthews",
    summary:
      "Ethan becomes useful again without using service to purchase innocence. The letter and meeting with David keep repentance exposed, costly, and non-manipulative."
  },
  {
    range: "Ch. 31-34",
    title: "The Water, Grace That Stays, Visiting Day, the Lighthouse",
    summary:
      "Baptism, chapel service, family visits, and Lily's lighthouse image resolve the book with durable hope rather than easy reversal."
  }
];

const modules = [
  {
    id: "stewardship-identity",
    title: "Stewardship Is Not Identity",
    chapters: "Ch. 1-3",
    focus: "The clinic is meaningful work, but Ethan lets provision and performance become the shape of his soul.",
    bookConnection:
      "The opening chapters make Carter Physical Therapy & Wellness feel genuinely useful. Ethan helps people heal, leads staff, and carries responsibility. The danger is not that the work is fake. The danger is that good work becomes a functional savior.",
    doctrine:
      "A conservative reading of Scripture treats work as stewardship under God, not as self-salvation. Success must remain submitted to the Lord rather than becoming a substitute for Him.",
    references: ["Psalm 127:1", "Deuteronomy 8:17-18", "Mark 8:36", "James 4:13-17"],
    leaderGuardrail:
      "Do not teach ambition as inherently sinful. Teach disordered ambition: the moment a calling becomes identity, control, and fear.",
    questions: [
      "Where does Ethan's provision for his family begin to look like absence from his family?",
      "What makes success spiritually dangerous when it is attached to fear?",
      "How can Christian work remain worship instead of becoming self-justification?"
    ],
    practices: ["Name one good responsibility that has become too central", "Pray Psalm 127:1 over work and family", "Ask what obedience would look like if reputation were not at stake"]
  },
  {
    id: "hidden-compromise",
    title: "Hidden Compromise Has a Direction",
    chapters: "Ch. 4-7",
    focus: "The first pour is not isolated. It is the fruit of pressure, secrecy, and refusing honest confession.",
    bookConnection:
      "Ethan's drinking begins as a private release. Lauren sees the emotional absence, the bottle, the missed bedtime, and the living room lie before the world sees the crash.",
    doctrine:
      "Scripture does not treat temptation as harmless because it starts quietly. Desire conceives, sin grows, and hidden compromise hardens through repetition.",
    references: ["James 1:14-15", "Proverbs 20:1", "Ephesians 5:18", "Hebrews 3:12-13"],
    leaderGuardrail:
      "Avoid making the bottle the only issue. The deeper issue is a heart refusing truth, accountability, and dependence on God.",
    questions: [
      "Why is the first private compromise often easier to defend than later sin?",
      "How does Ethan use pressure to make disobedience sound reasonable?",
      "What does Lauren's warning reveal about the mercy of early confrontation?"
    ],
    practices: ["Identify one hidden escape pattern", "Tell the truth to a mature believer before exposure forces it", "Replace vague stress language with specific confession"]
  },
  {
    id: "victims-image-bearers",
    title: "Victims Are Image-Bearers, Not Plot Devices",
    chapters: "Ch. 8-10",
    focus: "Rachel, Sophia, and Jackson are ordinary, named, beloved people before they are victims.",
    bookConnection:
      "Rachel's last errand gives the Matthews family humor, routine, marriage, children, dinosaurs, errands, and home. The crash is devastating because the reader has seen ordinary life made precious.",
    doctrine:
      "Every person is made in the image of God. A biblical study must honor victims as persons, not as instruments in an offender's growth story.",
    references: ["Genesis 1:27", "Psalm 139:13-16", "Matthew 18:10", "Proverbs 31:8-9"],
    leaderGuardrail:
      "Keep the Matthews family visible throughout the study. Redemption for Ethan cannot require minimizing Rachel, Sophia, Jackson, or David.",
    questions: [
      "What details make Rachel's family feel morally weighty before the crash?",
      "Why does biblical justice require names rather than categories?",
      "How can a testimony center Christ without using victims as scenery?"
    ],
    practices: ["Pray for victims before discussing offenders", "Name harms plainly", "Refuse language that turns tragedy into mere backstory"]
  },
  {
    id: "guilt-named",
    title: "Guilt Must Be Named Without Shelter",
    chapters: "Ch. 10, 12-14",
    focus: "The courtroom forces moral clarity: drunk, drove, crossed the line, killed a family.",
    bookConnection:
      "Arraignment, Lauren's visit through glass, and the sentencing statements strip away vague language. Ethan's strongest courtroom moment is not eloquence but honest guilt without excuse.",
    doctrine:
      "Biblical confession agrees with God about sin. It does not hide behind passive phrases, emotional explanations, or sorrow that avoids responsibility.",
    references: ["Psalm 51:3-4", "Numbers 32:23", "Proverbs 28:13", "2 Corinthians 7:10"],
    leaderGuardrail:
      "Distinguish godly sorrow from image collapse. Sorrow can be real and still not yet repentance if it is mainly grief over consequences.",
    questions: [
      "What phrases in ordinary speech can hide moral responsibility?",
      "Why does Ethan's statement refuse to ask David's family for forgiveness?",
      "What is the difference between guilt that tells the truth and guilt that tries to control the room?"
    ],
    practices: ["Write one confession without the words but or because", "Separate sorrow from repair", "Pray Psalm 51 with specific sins named"]
  },
  {
    id: "justice-consequence",
    title: "Justice and Consequence Are Not Enemies of Grace",
    chapters: "Ch. 12-16",
    focus: "Chains, sentencing, and prison are not treated as a failure of grace but as real consequence in a moral world.",
    bookConnection:
      "The court, victim statements, intake, and prison rulebook keep the book from cheap redemption. The law cannot save Ethan, but it can still rightly name and punish evil.",
    doctrine:
      "Civil authority is a servant of God for order and justice. Forgiveness before God does not automatically erase earthly consequence.",
    references: ["Romans 13:1-4", "Galatians 6:7-8", "Nahum 1:3", "Psalm 130:3-4"],
    leaderGuardrail:
      "Do not make prison sound redemptive in itself. God redeems sinners in prison, but the institution remains consequence, not sacrament.",
    questions: [
      "What can the court do that Ethan spiritually needs? What can it not do?",
      "Why does consequence sometimes protect truth from sentimentality?",
      "How does Psalm 130 hold guilt and hope together?"
    ],
    practices: ["List consequences that should not be rushed away", "Pray for justice and mercy without collapsing them", "Discuss how churches can support both victims and offenders truthfully"]
  },
  {
    id: "false-saviors",
    title: "False Saviors Only Lower the Volume",
    chapters: "Ch. 17-20",
    focus: "Heroin does not forgive Ethan. It only moves reality into the fog.",
    bookConnection:
      "After prison violence and trauma, Ethan uses heroin first to forget and then to remain bearable to himself. The cot, ceiling, and needle show bondage as counterfeit mercy.",
    doctrine:
      "Sin often promises relief before it reveals slavery. Only Christ can free a person from guilt, condemnation, and the dominion of sin.",
    references: ["John 8:34-36", "Romans 6:16", "Titus 2:11-14", "1 Peter 5:8-10"],
    leaderGuardrail:
      "Speak with compassion about addiction and trauma without removing moral agency. Bondage explains suffering, but it does not become righteousness.",
    questions: [
      "Why is temporary quiet so tempting when guilt is loud?",
      "How does the book distinguish numbness from peace?",
      "What makes false saviors spiritually cruel even when they feel merciful at first?"
    ],
    practices: ["Name one false savior honestly", "Identify the truth it helps avoid", "Build a no-secrecy help plan with mature believers and appropriate care"]
  },
  {
    id: "conviction-condemnation",
    title: "Conviction Is Not Condemnation",
    chapters: "Ch. 21-22",
    focus: "Ezra confronts guilt as a poor god and self-destruction as counterfeit repentance.",
    bookConnection:
      "The yard sermon is the theological hinge of the manuscript. Ezra's words expose Ethan's need to control his punishment and call him to come to God empty-handed.",
    doctrine:
      "The Spirit convicts sinners and drives them to Christ. Condemnation drives them into hiding, despair, and self-atonement.",
    references: ["Romans 8:1", "John 3:17-18", "1 John 1:9", "2 Corinthians 5:21"],
    leaderGuardrail:
      "Do not confuse despair with holiness. Hating oneself thoroughly is not the same thing as repentance toward God.",
    questions: [
      "Why does guilt become a false god for Ethan?",
      "What does it mean to prefer controlling punishment over receiving forgiveness?",
      "How does Romans 8:1 answer a guilty person without minimizing guilt?"
    ],
    practices: ["Compare conviction and condemnation in a two-column list", "Pray a confession that ends at Christ's sufficiency", "Memorize Romans 8:1"]
  },
  {
    id: "grace-stays-withdrawal",
    title: "Grace Stays When Healing Hurts",
    chapters: "Ch. 23-25",
    focus: "Grace meets Ethan in the yard, but withdrawal meets him in the dark.",
    bookConnection:
      "Ashes and Embers, Four Days, and No Magic Here keep redemption from becoming fantasy. Ethan is not instantly fixed. He is held through trembling, nausea, memory, and the next ten minutes.",
    doctrine:
      "Sanctification is real and often painful. God begins good work and continues it through ordinary endurance, confession, help, and obedience.",
    references: ["Philippians 1:6", "James 1:2-4", "2 Corinthians 12:9", "1 Peter 5:10"],
    leaderGuardrail:
      "Do not promise instant emotional relief. Promise what Scripture promises: God's presence, sufficient grace, and persevering work.",
    questions: [
      "Why is 'No Magic Here' important to a biblical redemption story?",
      "How does Ezra's presence show grace without religious performance?",
      "What does faithfulness look like when progress can only be measured in ten minutes?"
    ],
    practices: ["Create a next-ten-minutes obedience plan", "Ask for embodied help, not just ideas", "Thank God for grace that remains after the emotional moment fades"]
  },
  {
    id: "usefulness-after-wreckage",
    title: "Usefulness After Wreckage",
    chapters: "Ch. 26, 28",
    focus: "Ethan's hands become useful again, but not as payment for the past.",
    bookConnection:
      "The prison PT scenes are powerful because they recover Ethan's vocation without pretending his service purchases innocence. He helps backs, knees, shoulders, and men who are still hard to love.",
    doctrine:
      "Believers are saved by grace for good works. Good works do not atone, but they do bear witness to new life and humble service.",
    references: ["Ephesians 2:8-10", "Galatians 6:2", "1 Peter 4:10", "Philippians 2:3-4"],
    leaderGuardrail:
      "Do not let service become moral bookkeeping. The question is obedience, not earning the right to be less guilty.",
    questions: [
      "Why is it important that Ethan's useful hands are still the hands that held the steering wheel?",
      "How can service be both meaningful and unable to erase the past?",
      "What does faithful usefulness look like in a confined place?"
    ],
    practices: ["Identify a gift that can serve others now", "Serve without narrating yourself as the hero", "Pray for humility before and after usefulness"]
  },
  {
    id: "truth-restitution",
    title: "Truth, Restitution, and Non-Manipulative Repentance",
    chapters: "Ch. 27, 29-30",
    focus: "The letter to David and the later meeting keep repentance from becoming private rehearsal.",
    bookConnection:
      "Ethan's hidden letter names Rachel, Sophia, and Jackson. Ezra's hard counsel exposes silence as another form of control. David's response is allowed to be grief, not a prop for Ethan's closure.",
    doctrine:
      "Repentance bears fruit, seeks repair where possible, and refuses to force reconciliation. Restitution is obedience, not atonement.",
    references: ["Luke 19:8-10", "Matthew 5:23-24", "Romans 12:18", "Acts 26:20"],
    leaderGuardrail:
      "Do not pressure victims or wounded family members to provide closure. Repentance must tell the truth without demanding comfort.",
    questions: [
      "Why does Ezra call hidden honesty rehearsal rather than repentance?",
      "What can Ethan ask of David? What must he not ask?",
      "How does Zacchaeus help define fruit without pretending restitution saves?"
    ],
    practices: ["Write an apology that asks for nothing", "Name possible repair and impossible repair", "Discuss boundaries as wisdom rather than bitterness"]
  },
  {
    id: "baptism-family-hope",
    title: "Baptism, Family, and Hope That Does Not Erase",
    chapters: "Ch. 31-34",
    focus: "The ending gives baptism, visiting day, and the lighthouse without undoing consequence.",
    bookConnection:
      "The Water and the Sheet, Grace That Stays, Visiting Day, and The Lighthouse make the final hope durable. Ethan's life is reordered, not magically restored to what it was.",
    doctrine:
      "Baptism visibly confesses union with Christ. New life is real, but it does not require amnesia about sin or automatic repair of every earthly relationship.",
    references: ["Romans 6:3-4", "2 Corinthians 5:17", "Hebrews 10:23", "Matthew 5:14-16"],
    leaderGuardrail:
      "If your group discusses baptism, keep the emphasis evangelical and Christ-centered: the water does not save by itself, but it publicly marks allegiance to the crucified and risen Christ.",
    questions: [
      "Why does the book's hope work better because the prison sentence remains?",
      "How does Lily's lighthouse image speak without making grief tidy?",
      "What does grace that stays look like after the emotional climax?"
    ],
    practices: ["Write a hope statement that does not erase consequence", "Pray for family healing without demanding a timetable", "Name one way to shine light from a constrained place"]
  }
];

const referenceLibrary = [
  {
    label: "Authority",
    title: "Scripture Interprets the Story",
    summary:
      "The novel supplies scenes and questions; Scripture supplies final authority. Read the Bible in context before turning a scene into application.",
    references: ["2 Timothy 3:16-17", "2 Peter 1:20-21", "Psalm 119:105"]
  },
  {
    label: "Sin",
    title: "Sin Is Guilt, Not Only Brokenness",
    summary:
      "The manuscript is compassionate toward pressure, trauma, and addiction, but it still names guilt plainly. Keep both pastoral care and moral clarity.",
    references: ["Romans 3:23", "Jeremiah 17:9", "James 1:14-15"]
  },
  {
    label: "Atonement",
    title: "Only Christ Can Bear Sin",
    summary:
      "Self-hatred, prison time, service, and sorrow cannot atone. The study must keep the cross at the center of redemption.",
    references: ["Isaiah 53:5-6", "Romans 3:23-26", "1 Peter 2:24"]
  },
  {
    label: "Repentance",
    title: "Repentance Tells the Truth and Bears Fruit",
    summary:
      "Repentance is not performance, self-punishment, or a bid for sympathy. It turns to God and produces concrete fruit over time.",
    references: ["Luke 3:8", "Acts 3:19", "Acts 26:20"]
  },
  {
    label: "Justice",
    title: "Grace Does Not Mock Justice",
    summary:
      "A faithful study must honor Rachel, Sophia, Jackson, David, Lauren, Noah, and Lily as real sufferers. Grace for Ethan cannot flatten them.",
    references: ["Micah 6:8", "Romans 13:1-4", "Proverbs 31:8-9"]
  },
  {
    label: "Hope",
    title: "New Life Is Real but Not Sentimental",
    summary:
      "The ending is hopeful because grace stays amid consequence. It is not a return to innocence; it is a new life under Christ.",
    references: ["2 Corinthians 5:17", "Philippians 1:6", "Hebrews 10:23"]
  }
];

let selectedModuleId = modules[0].id;
let selectedWeeks = 4;

const chapterGrid = document.querySelector("#chapter-grid");
const moduleList = document.querySelector("#module-list");
const moduleDetail = document.querySelector("#module-detail");
const moduleSearch = document.querySelector("#module-search");
const referenceGrid = document.querySelector("#reference-grid");
const planGrid = document.querySelector("#plan-grid");
const copyStatus = document.querySelector("#copy-status");
const bookNotes = document.querySelector("#book-notes");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setView(view) {
  document.querySelectorAll(".app-view").forEach((panel) => {
    panel.classList.toggle("is-hidden", panel.dataset.panel !== view);
  });
  document.querySelectorAll(".nav-tab").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === view);
  });
}

function getFilteredModules() {
  const query = moduleSearch.value.trim().toLowerCase();
  if (!query) return modules;
  return modules.filter((module) => {
    const haystack = [
      module.title,
      module.chapters,
      module.focus,
      module.bookConnection,
      module.doctrine,
      module.references.join(" "),
      module.questions.join(" ")
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  });
}

function renderChapterMap() {
  chapterGrid.innerHTML = chapterMap
    .map(
      (chapter) => `
        <article class="chapter-card">
          <p class="chapter-range">${escapeHtml(chapter.range)}</p>
          <h3>${escapeHtml(chapter.title)}</h3>
          <p>${escapeHtml(chapter.summary)}</p>
        </article>
      `
    )
    .join("");
}

function renderModuleList() {
  const filtered = getFilteredModules();
  if (!filtered.some((module) => module.id === selectedModuleId) && filtered.length) {
    selectedModuleId = filtered[0].id;
  }
  moduleList.innerHTML = filtered
    .map(
      (module) => `
        <button class="module-card ${module.id === selectedModuleId ? "is-active" : ""}" type="button" data-module="${module.id}">
          <strong>${escapeHtml(module.title)}</strong>
          <span>${escapeHtml(module.chapters)} | ${escapeHtml(module.references.slice(0, 2).join(" | "))}</span>
        </button>
      `
    )
    .join("");

  if (!filtered.length) {
    moduleList.innerHTML = '<p class="module-summary">No modules match that search.</p>';
  }
}

function renderModuleDetail() {
  const module = modules.find((item) => item.id === selectedModuleId) || modules[0];
  const savedNote = localStorage.getItem(`redeemedStudyNote:${module.id}`) || "";
  moduleDetail.innerHTML = `
    <p class="kicker">${escapeHtml(module.chapters)}</p>
    <h2>${escapeHtml(module.title)}</h2>
    <p class="module-summary">${escapeHtml(module.focus)}</p>
    <ul class="module-meta">
      <li>Manuscript-grounded</li>
      <li>Conservative evangelical</li>
      <li>Literal interpretation</li>
    </ul>
    <div class="detail-grid">
      <section class="study-block full">
        <h3>Book Connection</h3>
        <p>${escapeHtml(module.bookConnection)}</p>
      </section>
      <section class="study-block">
        <h3>Doctrine Anchor</h3>
        <p>${escapeHtml(module.doctrine)}</p>
      </section>
      <section class="study-block">
        <h3>Leader Guardrail</h3>
        <p>${escapeHtml(module.leaderGuardrail)}</p>
      </section>
      <section class="study-block full">
        <h3>Scripture References</h3>
        <ul class="scripture-list">
          ${module.references.map((reference) => `<li>${escapeHtml(reference)}</li>`).join("")}
        </ul>
      </section>
      <section class="study-block">
        <h3>Discussion Questions</h3>
        <ol>
          ${module.questions.map((question) => `<li>${escapeHtml(question)}</li>`).join("")}
        </ol>
      </section>
      <section class="study-block">
        <h3>Practice Steps</h3>
        <ul>
          ${module.practices.map((practice) => `<li>${escapeHtml(practice)}</li>`).join("")}
        </ul>
      </section>
    </div>
    <label class="module-note">
      <span class="kicker">Your notes for this module</span>
      <textarea data-note-for="${module.id}" placeholder="Add leader notes, direct chapter observations, group cautions, or prayer prompts.">${escapeHtml(savedNote)}</textarea>
    </label>
  `;
}

function renderReferences() {
  referenceGrid.innerHTML = referenceLibrary
    .map(
      (item) => `
        <article class="reference-card">
          <p class="ref-label">${escapeHtml(item.label)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.summary)}</p>
          <ul>
            ${item.references.map((reference) => `<li>${escapeHtml(reference)}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function buildPlanText() {
  const weeks = Array.from({ length: selectedWeeks }, (_, index) => ({
    week: index + 1,
    modules: []
  }));
  modules.forEach((module, index) => {
    weeks[index % selectedWeeks].modules.push(module);
  });
  return weeks
    .map(
      (week) =>
        `Week ${week.week}: ${week.modules.map((module) => `${module.chapters} - ${module.title}`).join("; ")}\nReferences: ${[
          ...new Set(week.modules.flatMap((module) => module.references))
        ].join(", ")}`
    )
    .join("\n\n");
}

function renderPlan() {
  const weeks = Array.from({ length: selectedWeeks }, (_, index) => ({
    week: index + 1,
    modules: []
  }));
  modules.forEach((module, index) => {
    weeks[index % selectedWeeks].modules.push(module);
  });
  planGrid.innerHTML = weeks
    .map(
      (week) => `
        <article class="week-card">
          <p class="kicker">Week ${week.week}</p>
          <h3>${escapeHtml(week.modules.map((module) => module.title).join(" + "))}</h3>
          <p>${escapeHtml(week.modules.map((module) => module.chapters).join(", "))}</p>
          <ul>
            ${week.modules.map((module) => `<li>${escapeHtml(module.focus)}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function loadBookNotes() {
  bookNotes.value = localStorage.getItem("redeemedBookNotes") || "";
}

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view], [data-view-trigger]");
  if (viewButton) {
    setView(viewButton.dataset.view || viewButton.dataset.viewTrigger);
  }

  const moduleButton = event.target.closest("[data-module]");
  if (moduleButton) {
    selectedModuleId = moduleButton.dataset.module;
    renderModuleList();
    renderModuleDetail();
  }

  const planButton = event.target.closest("[data-weeks]");
  if (planButton) {
    selectedWeeks = Number(planButton.dataset.weeks);
    document.querySelectorAll(".plan-button").forEach((button) => {
      button.classList.toggle("is-active", Number(button.dataset.weeks) === selectedWeeks);
    });
    renderPlan();
    copyStatus.textContent = "";
  }
});

moduleSearch.addEventListener("input", () => {
  renderModuleList();
  renderModuleDetail();
});

moduleDetail.addEventListener("input", (event) => {
  const noteField = event.target.closest("[data-note-for]");
  if (!noteField) return;
  localStorage.setItem(`redeemedStudyNote:${noteField.dataset.noteFor}`, noteField.value);
});

document.querySelector("#book-notes-form").addEventListener("submit", (event) => {
  event.preventDefault();
  localStorage.setItem("redeemedBookNotes", bookNotes.value);
});

document.querySelector("#copy-plan").addEventListener("click", async () => {
  const text = buildPlanText();
  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "Plan copied to clipboard.";
  } catch {
    copyStatus.textContent = text;
  }
});

renderChapterMap();
renderModuleList();
renderModuleDetail();
renderReferences();
renderPlan();
loadBookNotes();
