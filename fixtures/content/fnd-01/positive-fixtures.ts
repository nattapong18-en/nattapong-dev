/*
 * Synthetic, redacted, non-public fixtures for FND-01 validation only.
 * These records pressure-test semantics from CON-02 without becoming public copy.
 */

export const aboutDirectionEnFixture = {
  recordId: "fixture-about-direction-en",
  slug: "current-engineering-direction",
  family: "about",
  title: "Synthetic current engineering direction",
  summary:
    "A redacted student-direction fixture that distinguishes developing interests from professional expertise.",
  primaryLanguage: "en",
  translationGroup: "fixture-about-direction",
  status: "active",
  maturity: "developing",
  verification: "user-confirmed",
  visibility: "candidate",
  review: {
    state: "needs-factual-review",
    note: "Synthetic fixture; not approved for publication.",
  },
  direction:
    "Developing an engineering direction through study, bounded projects, and research preparation.",
  approvedProfileFacts: [
    "A public student-context fact is represented without private identity details.",
  ],
  interests: [
    "Software engineering as a developing interest",
    "Systems programming as a developing interest",
  ],
  claims: [
    {
      claimId: "fixture-about-student-context",
      statement:
        "The fixture represents a student context rather than professional employment.",
      state: "supported",
      verification: "user-confirmed",
      evidenceRefs: [
        {
          evidenceId: "fixture-about-confirmation",
          requirement: "required",
        },
      ],
    },
  ],
  evidence: [
    {
      evidenceId: "fixture-about-confirmation",
      type: "source-review",
      title: "Redacted owner-confirmation boundary",
      purpose: "Support only the synthetic student-context claim.",
      scope: "Publication choices only; no external identity verification.",
      availability: "available",
      verification: "user-confirmed",
      sourceIds: ["fixture-about-boundary-source"],
    },
  ],
  sources: [
    {
      sourceId: "fixture-about-boundary-source",
      type: "other",
      title: "Redacted internal boundary record",
      availability: "available",
      limitation: "Not public copy and not external identity evidence.",
    },
  ],
  limitations: [
    {
      limitationId: "fixture-about-expertise-limit",
      statement:
        "Interests and study do not establish expertise, employment, or availability.",
      claimIds: ["fixture-about-student-context"],
    },
  ],
} as const;

export const aboutDirectionThFixture = {
  recordId: "fixture-about-direction-th",
  slug: "learning-direction-th",
  family: "about",
  title: "ทิศทางการเรียนรู้แบบข้อมูลสังเคราะห์",
  summary:
    "ข้อมูลทดสอบที่แยกความสนใจซึ่งกำลังพัฒนาออกจากความเชี่ยวชาญทางวิชาชีพ",
  primaryLanguage: "th",
  translationGroup: "fixture-about-direction",
  status: "active",
  maturity: "developing",
  verification: "user-confirmed",
  visibility: "candidate",
  review: {
    state: "candidate",
    note: "เป็น fixture สังเคราะห์และยังไม่ผ่านการตรวจภาษาเพื่อเผยแพร่",
  },
  direction:
    "เรียนรู้ผ่านโครงการที่มีขอบเขตชัดเจนและการเตรียมคำถามสำหรับงานวิจัย",
  approvedProfileFacts: [
    "ใช้บริบทนักศึกษาแบบตัดข้อมูลส่วนตัวออกแล้ว",
  ],
  interests: [
    "สนใจ Software Engineering ในฐานะทิศทางการเรียนรู้",
    "สนใจ Systems Programming ในฐานะทิศทางการเรียนรู้",
  ],
  limitations: [
    {
      limitationId: "fixture-about-th-language-limit",
      statement:
        "เป็นงานเขียนแยกต่างหาก ไม่ได้ยืนยันความเท่าเทียมกับ fixture ภาษาอังกฤษ",
    },
  ],
} as const;

export const bookingApiEnFixture = {
  recordId: "fixture-booking-api-en",
  slug: "booking-api-source-review",
  family: "projects",
  title: "Synthetic booking API source review",
  summary:
    "A redacted educational backend fixture with source-level evidence and explicit runtime limits.",
  primaryLanguage: "en",
  status: "functional-mvp",
  maturity: "functional-mvp-candidate",
  verification: "static-source-verified",
  visibility: "candidate",
  review: {
    state: "needs-privacy-review",
    note: "Synthetic fixture retains a sensitive-history blocker without values.",
  },
  purpose:
    "Exercise a backend project record without implying production or runtime readiness.",
  role: "Individual educational project in the source context.",
  contributions: [
    "Implemented bounded API and persistence responsibilities represented by the redacted source review.",
  ],
  technologies: [
    {
      name: "Rust",
      role: "Represent the backend implementation language.",
    },
    {
      name: "PostgreSQL",
      role: "Represent relational persistence in the inspected source.",
    },
    {
      name: "Redis",
      role: "Represent a narrowly scoped availability-response cache.",
    },
  ],
  currentResult:
    "A coherent source-level functional-MVP candidate whose runtime behavior remains unverified.",
  verificationScope:
    "Static source review at one redacted fixed revision; no build, test, migration, runtime, deployment, or security verification.",
  auditedRevision: {
    repository: "redacted-booking-repository",
    branch: "main",
    revision: "redacted-fixed-revision",
    scope: "Static source only.",
  },
  repositorySourceId: "fixture-booking-repository-source",
  relationships: [
    {
      kind: "project-informed-learning",
      targetId: "fixture-rust-http-threadpool-en",
      requirement: "required",
      reason:
        "The synthetic relationship records a reviewed project-to-learning connection.",
    },
  ],
  claims: [
    {
      claimId: "fixture-booking-source-structure",
      statement:
        "The redacted fixed revision contains a bounded backend route and persistence structure.",
      state: "supported",
      verification: "static-source-verified",
      evidenceRefs: [
        {
          evidenceId: "fixture-booking-static-review",
          requirement: "required",
        },
      ],
    },
    {
      claimId: "fixture-booking-runtime",
      statement: "Runtime behavior is established.",
      state: "not-verified",
      verification: "not-verified",
      evidenceRefs: [
        {
          evidenceId: "fixture-booking-runtime-evidence",
          requirement: "optional",
        },
      ],
    },
  ],
  evidence: [
    {
      evidenceId: "fixture-booking-static-review",
      type: "repository-review",
      title: "Redacted static review",
      purpose: "Support only source-structure claims.",
      scope: "One fixed revision; runtime behavior excluded.",
      availability: "available",
      verification: "static-source-verified",
      sourceIds: ["fixture-booking-repository-source"],
    },
    {
      evidenceId: "fixture-booking-runtime-evidence",
      type: "manual-test",
      title: "Runtime evidence not supplied",
      purpose: "Represent the missing runtime check honestly.",
      scope: "No runtime environment or result exists in this fixture.",
      availability: "unavailable",
      verification: "not-evaluated",
    },
  ],
  sources: [
    {
      sourceId: "fixture-booking-repository-source",
      type: "repository",
      title: "Redacted fixed repository revision",
      availability: "available",
      limitation: "Repository presence does not establish runtime correctness.",
    },
  ],
  limitations: [
    {
      limitationId: "fixture-booking-runtime-limit",
      statement:
        "Build, tests, migrations, concurrency behavior, cache correctness, deployment, and production readiness are not verified.",
      claimIds: [
        "fixture-booking-source-structure",
        "fixture-booking-runtime",
      ],
    },
    {
      limitationId: "fixture-booking-history-limit",
      statement:
        "A redacted sensitive-history concern remains blocked for private owner review.",
    },
  ],
} as const;

export const courtfitThFixture = {
  recordId: "fixture-courtfit-th",
  slug: "courtfit-redacted-prototype",
  family: "projects",
  title: "CourtFit fixture แบบตัดข้อมูลส่วนตัว",
  summary:
    "ต้นแบบข้อมูลสังเคราะห์สำหรับ chatbot เชิงการศึกษา โดยไม่อ้างว่าเป็นร้านค้าหรือระบบ production",
  primaryLanguage: "th",
  status: "experimental",
  maturity: "educational-project",
  verification: "static-source-verified",
  visibility: "candidate",
  review: {
    state: "needs-privacy-review",
    note: "ยังไม่มีการตรวจ runtime, provider, browser หรือ deployment",
  },
  purpose:
    "ทดสอบการแยกขอบเขต browser, server และ provider โดยไม่ใช้ key หรือบทสนทนาจริง",
  role: "โครงการรายบุคคลในบริบทการศึกษา",
  contributions: [
    "พัฒนาโครงสร้างการสนทนาและ adapter ตาม source ที่ตรวจแบบจำกัดขอบเขต",
  ],
  technologies: [
    {
      name: "Next.js",
      role: "แทนโครงสร้าง page และ server route ใน source",
    },
    {
      name: "React",
      role: "แทน state ฝั่ง browser ใน source",
    },
  ],
  currentResult:
    "เป็น source-level functional-MVP candidate ที่ยังไม่มีหลักฐาน runtime และความถูกต้องของคำแนะนำ",
  verificationScope:
    "ตรวจเฉพาะ source ที่ revision สังเคราะห์หนึ่งจุด ไม่ครอบคลุม provider, privacy เชิงปฏิบัติการ, accessibility หรือ deployment",
  auditedRevision: {
    repository: "redacted-chatbot-repository",
    branch: "main",
    revision: "redacted-fixed-revision",
    scope: "Static source only.",
  },
  repositorySourceId: "fixture-courtfit-repository-source",
  claims: [
    {
      claimId: "fixture-courtfit-server-boundary",
      statement:
        "Source แสดงเส้นทาง browser ไป server ก่อนเลือก provider",
      state: "qualified",
      verification: "static-source-verified",
      evidenceRefs: [
        {
          evidenceId: "fixture-courtfit-static-review",
          requirement: "required",
        },
      ],
    },
    {
      claimId: "fixture-courtfit-recommendation",
      statement: "ความถูกต้องของคำแนะนำยังไม่ผ่านการประเมิน",
      state: "not-verified",
      verification: "not-evaluated",
    },
  ],
  evidence: [
    {
      evidenceId: "fixture-courtfit-static-review",
      type: "repository-review",
      title: "การตรวจ source แบบตัดข้อมูลส่วนตัว",
      purpose: "รองรับเฉพาะขอบเขตโครงสร้างใน source",
      scope: "ไม่รองรับข้อสรุปเรื่อง runtime, privacy หรือ recommendation accuracy",
      availability: "available",
      verification: "static-source-verified",
      sourceIds: ["fixture-courtfit-repository-source"],
    },
  ],
  sources: [
    {
      sourceId: "fixture-courtfit-repository-source",
      type: "repository",
      title: "Redacted fixed repository revision",
      availability: "available",
      limitation:
        "ไม่มี key, request capture, บทสนทนาจริง หรือข้อมูลผู้ใช้ใน fixture",
    },
  ],
  limitations: [
    {
      limitationId: "fixture-courtfit-runtime-limit",
      statement:
        "Provider compatibility, Stop/Retry, browser behavior, accessibility, privacy และ deployment ยังไม่ได้ตรวจ",
      claimIds: ["fixture-courtfit-server-boundary"],
    },
    {
      limitationId: "fixture-courtfit-commerce-limit",
      statement:
        "ไม่มี catalog, ราคา, stock, cart หรือ checkout ที่ตรวจสอบแล้ว",
      claimIds: ["fixture-courtfit-recommendation"],
    },
  ],
} as const;

export const researchPreparationMixedFixture = {
  recordId: "fixture-research-preparation-mixed",
  slug: "research-preparation-open-questions",
  family: "research",
  title: "การเตรียม research question แบบ synthetic",
  summary:
    "บันทึก mixed-language สำหรับช่วง preparation ซึ่งยังไม่มี final topic หรือ research result",
  primaryLanguage: "mixed",
  status: "researching",
  maturity: "research-preparation",
  verification: "to-be-verified",
  visibility: "candidate",
  review: {
    state: "needs-factual-review",
    note: "ไม่มี final topic และยังไม่ใช่ public wording",
  },
  researchArea:
    "สำรวจ AI สำหรับ embedded หรือ resource-constrained systems โดยยังไม่เลือกทิศทางสุดท้าย",
  question:
    "ขอบเขตใดเหมาะกับโครงการระดับปริญญาตรีเมื่อ hardware และ baseline ยังไม่ยืนยัน",
  motivation:
    "ใช้คำถามเพื่อจำกัด scope ที่ทำได้จริง โดยไม่สร้าง research gap หรือผลลัพธ์ขึ้นมา",
  researchStage: "preparation",
  resultState: "none",
  currentScope:
    "การอ่าน การตั้งคำถาม และการเปรียบเทียบเงื่อนไขเบื้องต้นเท่านั้น",
  openQuestions: [
    "มี hardware ใดพร้อมใช้งานจริง",
    "ควรประเมิน accuracy, latency, energy, memory หรือ system behavior ใด",
  ],
  nextInvestigation:
    "ตรวจ paper list, hardware availability และเกณฑ์ประเมินก่อนเลือกหัวข้อ",
  claims: [
    {
      claimId: "fixture-research-no-final-topic",
      statement: "ยังไม่มี final topic ที่เลือกแล้ว",
      state: "qualified",
      verification: "user-confirmed",
    },
  ],
  evidence: [
    {
      evidenceId: "fixture-research-paper-set",
      type: "source-review",
      title: "Verified paper set not supplied",
      purpose: "Represent missing research sources without inventing citations.",
      scope: "No paper, method, baseline, hardware, or result is established.",
      availability: "unavailable",
      verification: "not-evaluated",
      sourceIds: ["fixture-research-source-register"],
    },
  ],
  sources: [
    {
      sourceId: "fixture-research-source-register",
      type: "paper",
      title: "Synthetic unavailable paper register",
      availability: "unavailable",
      limitation: "No citation or paper finding is asserted.",
    },
  ],
  limitations: [
    {
      limitationId: "fixture-research-preparation-limit",
      statement:
        "No selected topic, verified sources, confirmed hardware, method, baseline, adviser approval, or result exists.",
      claimIds: ["fixture-research-no-final-topic"],
    },
  ],
} as const;

export const rustHttpThreadpoolEnFixture = {
  recordId: "fixture-rust-http-threadpool-en",
  slug: "guided-rust-http-threadpool-learning",
  family: "learning",
  title: "Synthetic guided Rust HTTP and thread-pool learning",
  summary:
    "A guided-learning fixture focused on changed understanding and remaining gaps rather than mastery.",
  primaryLanguage: "en",
  status: "completed",
  maturity: "guided-implementation",
  verification: "self-reported",
  visibility: "candidate",
  review: {
    state: "needs-rights-review",
    note: "Guidance attribution and source excerpts require review.",
  },
  learningKind: "learning-progress",
  learningProgress: {
    startingPoint:
      "HTTP and worker behavior were initially understood mainly through framework abstractions.",
    guidance:
      "A redacted book-guided exercise substantially shaped the implementation.",
    changedUnderstanding:
      "The exercise connected request parsing, responses, workers, message passing, and ownership.",
    currentGaps: [
      "Exact personal extensions remain to be verified",
      "No benchmark or production-server claim is supported",
    ],
  },
  claims: [
    {
      claimId: "fixture-rust-learning-change",
      statement:
        "The guided exercise changed the learner's understanding of request handling.",
      state: "self-reported",
      verification: "self-reported",
      evidenceRefs: [
        {
          evidenceId: "fixture-rust-learning-reflection",
          requirement: "optional",
        },
      ],
    },
  ],
  evidence: [
    {
      evidenceId: "fixture-rust-learning-reflection",
      type: "reflection",
      title: "Synthetic guided-learning reflection",
      purpose: "Represent a bounded change in understanding.",
      scope: "Self-reported learning only; no runtime or mastery evidence.",
      availability: "available",
      verification: "self-reported",
      sourceIds: ["fixture-rust-guidance-source"],
    },
  ],
  sources: [
    {
      sourceId: "fixture-rust-guidance-source",
      type: "book",
      title: "Redacted guided-learning source",
      availability: "available",
      limitation: "No excerpt or independent extension is claimed.",
    },
  ],
  limitations: [
    {
      limitationId: "fixture-rust-guidance-limit",
      statement:
        "This is guided learning, not independent production-server work or evidence of mastery.",
      claimIds: ["fixture-rust-learning-change"],
    },
  ],
} as const;

export const linuxTerminalWorkflowMixedFixture = {
  recordId: "fixture-linux-terminal-workflow-mixed",
  slug: "linux-terminal-workflow-note",
  family: "learning",
  title: "บันทึก workflow แบบ terminal-centered",
  summary:
    "Technical Note fixture ที่บันทึก assisted troubleshooting โดยไม่อ้างความเชี่ยวชาญด้าน operations",
  primaryLanguage: "mixed",
  status: "active",
  maturity: "developing",
  verification: "self-reported",
  visibility: "candidate",
  review: {
    state: "needs-privacy-review",
    note: "Configuration, paths, versions และ reproducibility ยังไม่ผ่านการตรวจ",
  },
  learningKind: "technical-note",
  technicalNote: {
    audience:
      "ผู้เรียนที่ต้องการประเมินว่า terminal workflow สนับสนุนงานจริงหรือเพิ่มภาระ",
    scope:
      "Reflection สังเคราะห์เกี่ยวกับ workflow และ troubleshooting เท่านั้น",
    prerequisites: [
      "ความเข้าใจพื้นฐานเกี่ยวกับ shell และ Git",
    ],
    examples: [
      "ประเมิน configuration จากผลต่อ workflow แทนความสวยงาม",
    ],
    caveats: [
      "Exact configuration และ version ยังไม่ผ่านการตรวจ",
      "บางขั้นตอนได้รับความช่วยเหลือจาก AI tools และ documentation",
    ],
  },
  claims: [
    {
      claimId: "fixture-linux-assisted-workflow",
      statement:
        "The workflow reflection includes assisted troubleshooting rather than independent system administration.",
      state: "self-reported",
      verification: "self-reported",
    },
  ],
  evidence: [
    {
      evidenceId: "fixture-linux-configuration",
      type: "artifact",
      title: "Sanitized configuration not yet selected",
      purpose: "Represent a future reproducibility artifact.",
      scope: "No command, version, host, path, account, or token is included.",
      availability: "unavailable",
      verification: "to-be-verified",
    },
  ],
  sources: [
    {
      sourceId: "fixture-linux-self-report",
      type: "self-report",
      title: "Synthetic workflow reflection",
      availability: "available",
      limitation: "Configuration and reproduction remain unverified.",
    },
  ],
  limitations: [
    {
      limitationId: "fixture-linux-reproducibility-limit",
      statement:
        "Configuration, versions, commands, screenshots, and reproducibility are not verified.",
      claimIds: ["fixture-linux-assisted-workflow"],
    },
  ],
} as const;

export const courseworkSelectionUnavailableFixture = {
  recordId: "fixture-coursework-selection-unavailable",
  slug: "coursework-selection-unavailable",
  family: "learning",
  title: "Synthetic coursework selection unavailable",
  summary:
    "An honest unavailable state where no assignment, contribution boundary, rights decision, or artifact is selected.",
  primaryLanguage: "mixed",
  status: "unavailable",
  maturity: "not-selected",
  verification: "not-evaluated",
  visibility: "withheld",
  review: {
    state: "needs-rights-review",
    note: "Selection and rights review are blocked until a real item is nominated.",
  },
  learningKind: "coursework",
  coursework: {
    academicContext:
      "Broad synthetic university coursework context; no exact course item is selected.",
    constraints: [
      "Assignment constraints are unavailable",
      "Individual or group boundaries are unknown",
    ],
    role: "Student; entry-specific role is unknown.",
    contribution: "Unavailable because no assignment is selected.",
    rightsState: "not-evaluated",
    result: "No result or artifact is available.",
  },
  evidence: [
    {
      evidenceId: "fixture-coursework-artifact",
      type: "artifact",
      title: "Coursework artifact unavailable",
      purpose: "Exercise a safe unavailable evidence state.",
      scope: "No assignment, code, report, peer data, or institutional identifier is included.",
      availability: "blocked",
      verification: "not-evaluated",
      sourceIds: ["fixture-coursework-source"],
    },
  ],
  sources: [
    {
      sourceId: "fixture-coursework-source",
      type: "course-material",
      title: "Coursework source not selected",
      availability: "not-evaluated",
      limitation: "Rights, attribution, role, and supplied material are unknown.",
    },
  ],
  limitations: [
    {
      limitationId: "fixture-coursework-selection-limit",
      statement:
        "No exact item, constraints, role, contribution, result, artifact, or publication right is established.",
    },
  ],
} as const;

export const positiveFixtures = [
  aboutDirectionEnFixture,
  aboutDirectionThFixture,
  bookingApiEnFixture,
  courtfitThFixture,
  researchPreparationMixedFixture,
  rustHttpThreadpoolEnFixture,
  linuxTerminalWorkflowMixedFixture,
  courseworkSelectionUnavailableFixture,
] as const;
