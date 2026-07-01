/* @ds-bundle: {"format":3,"namespace":"WantedDesignSystem_019e27","components":[],"sourceHashes":{"ui_kits/wanted-jobs/App.jsx":"a870b29d121a","ui_kits/wanted-jobs/FilterBar.jsx":"4d6bd9ff7223","ui_kits/wanted-jobs/Header.jsx":"9f19c650925b","ui_kits/wanted-jobs/Hero.jsx":"ff345cb37a09","ui_kits/wanted-jobs/JobCard.jsx":"eea20610309d","ui_kits/wanted-jobs/JobDetail.jsx":"4472a4f13486","ui_kits/wanted-jobs/JobGrid.jsx":"5a8614a765e3","ui_kits/wanted-jobs/data.js":"6174b23260c0","ui_kits/wanted-jobs/icons.jsx":"352067d31585"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WantedDesignSystem_019e27 = window.WantedDesignSystem_019e27 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/wanted-jobs/App.jsx
try { (() => {
// Main App — orchestrates Hero/Filter/Grid vs. Detail, owns navigation
// state and bookmarks. Also renders a transient toast on apply.

function App() {
  const [view, setView] = React.useState("list"); // "list" | "detail"
  const [openJob, setOpenJob] = React.useState(null);
  const [bookmarks, setBookmarks] = React.useState({
    "j1": true
  });
  const [category, setCategory] = React.useState("all");
  const [sort, setSort] = React.useState("match");
  const [query, setQuery] = React.useState("");
  const [toast, setToast] = React.useState(null);
  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast]);
  const visibleJobs = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return window.JOBS.filter(j => {
      if (!q) return true;
      return (j.title + j.company + j.companyEn + j.stack.join(" ")).toLowerCase().includes(q);
    });
  }, [query]);
  const openDetail = j => {
    setOpenJob(j);
    setView("detail");
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  };
  const goHome = () => {
    setView("list");
    setOpenJob(null);
  };
  const toggleBookmark = id => setBookmarks(b => ({
    ...b,
    [id]: !b[id]
  }));
  const apply = j => setToast(`${j.company} · ${j.title} 지원이 접수되었습니다.`);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    onLogoClick: goHome,
    query: query,
    onQueryChange: setQuery
  }), view === "list" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(FilterBar, {
    category: category,
    onCategory: setCategory,
    sort: sort,
    onSort: setSort
  }), /*#__PURE__*/React.createElement(JobGrid, {
    jobs: visibleJobs,
    bookmarks: bookmarks,
    onBookmark: toggleBookmark,
    onOpen: openDetail
  })) : /*#__PURE__*/React.createElement(JobDetail, {
    job: openJob,
    bookmarked: !!bookmarks[openJob?.id],
    onBookmark: toggleBookmark,
    onBack: goHome,
    onApply: apply
  }), toast && /*#__PURE__*/React.createElement("div", {
    style: appStyles.toast
  }, /*#__PURE__*/React.createElement("span", {
    style: appStyles.toastBadge
  }, /*#__PURE__*/React.createElement(Icon.Check, {
    size: 14
  })), toast));
}
const appStyles = {
  toast: {
    position: "fixed",
    left: "50%",
    bottom: 32,
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 18px",
    borderRadius: 12,
    background: "#17171A",
    color: "#ffffff",
    font: "600 14px/1.429 Pretendard JP, sans-serif",
    letterSpacing: "0.014em",
    boxShadow: "0 8px 32px 0 rgba(23,23,23,0.24)",
    zIndex: 100
  },
  toastBadge: {
    width: 22,
    height: 22,
    borderRadius: 9999,
    background: "#00BF40",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff"
  }
};
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wanted-jobs/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wanted-jobs/FilterBar.jsx
try { (() => {
// FilterBar — selectable category chips + sort dropdown stub.
// Selecting toggles "on" class. No data filtering in this kit.

function FilterBar({
  category,
  onCategory,
  sort,
  onSort
}) {
  const cats = [{
    id: "all",
    label: "전체",
    count: 15432
  }, {
    id: "dev",
    label: "개발",
    count: 6210
  }, {
    id: "design",
    label: "디자인",
    count: 1480
  }, {
    id: "pm",
    label: "기획·PM",
    count: 1120
  }, {
    id: "data",
    label: "데이터·AI",
    count: 880
  }, {
    id: "marketing",
    label: "마케팅",
    count: 1340
  }, {
    id: "sales",
    label: "영업·CS",
    count: 740
  }, {
    id: "ops",
    label: "경영지원",
    count: 620
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: fbStyles.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: fbStyles.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: fbStyles.chips,
    role: "tablist"
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onClick: () => onCategory(c.id),
    style: c.id === category ? fbStyles.chipOn : fbStyles.chip,
    role: "tab",
    "aria-selected": c.id === category
  }, c.label, " ", /*#__PURE__*/React.createElement("span", {
    style: c.id === category ? fbStyles.countOn : fbStyles.count
  }, c.count.toLocaleString())))), /*#__PURE__*/React.createElement("div", {
    style: fbStyles.tools
  }, /*#__PURE__*/React.createElement("button", {
    style: fbStyles.toolBtn
  }, /*#__PURE__*/React.createElement(Icon.Sliders, {
    size: 16
  }), " \uD544\uD130"), /*#__PURE__*/React.createElement("button", {
    style: fbStyles.toolBtn,
    onClick: () => onSort && onSort(sort === "match" ? "new" : "match")
  }, sort === "match" ? "매칭순" : "최신순", " ", /*#__PURE__*/React.createElement(Icon.ChevronDown, {
    size: 16
  })))));
}
const fbStyles = {
  wrap: {
    position: "sticky",
    top: 64,
    zIndex: 20,
    background: "rgba(255,255,255,0.92)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    borderBottom: "1px solid rgba(112,115,124,0.16)"
  },
  inner: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "14px 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24
  },
  chips: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  },
  chip: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "8px 14px",
    borderRadius: 9999,
    background: "#ffffff",
    border: "1px solid rgba(112,115,124,0.22)",
    font: "600 14px/1.429 Pretendard JP, sans-serif",
    letterSpacing: "0.014em",
    color: "#17171A",
    cursor: "pointer"
  },
  chipOn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "8px 14px",
    borderRadius: 9999,
    background: "#17171A",
    border: "1px solid #17171A",
    font: "600 14px/1.429 Pretendard JP, sans-serif",
    letterSpacing: "0.014em",
    color: "#ffffff",
    cursor: "pointer"
  },
  count: {
    font: "500 12px/1.273 'SF Mono', ui-monospace, monospace",
    color: "rgba(55,56,60,0.61)"
  },
  countOn: {
    font: "500 12px/1.273 'SF Mono', ui-monospace, monospace",
    color: "rgba(255,255,255,0.61)"
  },
  tools: {
    display: "flex",
    gap: 8,
    flex: "none"
  },
  toolBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    height: 36,
    padding: "0 12px",
    borderRadius: 10,
    background: "#ffffff",
    border: "1px solid rgba(112,115,124,0.22)",
    font: "600 13px/1.385 Pretendard JP, sans-serif",
    letterSpacing: "0.019em",
    color: "#17171A",
    cursor: "pointer"
  }
};
window.FilterBar = FilterBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wanted-jobs/FilterBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wanted-jobs/Header.jsx
try { (() => {
// Header — top navigation, search, profile.
// Mirrors wanted.co.kr layout: logo · primary nav · search · profile cluster.

function Header({
  onLogoClick,
  query,
  onQueryChange
}) {
  const nav = [{
    id: "recruit",
    label: "채용"
  }, {
    id: "ai-recruiter",
    label: "AI 매칭"
  }, {
    id: "events",
    label: "이벤트"
  }, {
    id: "career",
    label: "커리어"
  }, {
    id: "social",
    label: "소셜"
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: headerStyles.bar
  }, /*#__PURE__*/React.createElement("div", {
    style: headerStyles.left
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onLogoClick,
    style: headerStyles.logoBtn,
    "aria-label": "Wanted home"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "92",
    height: "22",
    viewBox: "0 0 3213 730",
    style: {
      color: "#17171A"
    },
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2964 730 C 3027 730 3080 703 3109 661 L 3109 720 L 3213 720 L 3213 0 L 3109 0 L 3109 274 C 3080 235 3026 210 2963 210 C 2818 210 2707 327 2707 470 C 2707 613 2819 730 2964 730 Z M 2964 630 C 2879 630 2809 557 2809 470 C 2809 383 2879 310 2964 310 C 3049 310 3119 383 3119 470 C 3119 557 3049 630 2964 630 Z M 2269 428 C 2273 364 2336 303 2414 303 C 2492 303 2551 364 2555 428 L 2269 428 Z M 2423 730 C 2524 730 2612 672 2648 592 L 2565 564 C 2541 607 2485 637 2424 637 C 2336 637 2273 583 2269 510 L 2654 510 C 2674 342 2573 210 2423 210 C 2273 210 2167 317 2167 470 C 2167 623 2272 730 2423 730 Z M 2050 729 C 2081 729 2112 722 2132 711 L 2132 620 C 2108 632 2087 637 2073 637 C 2033 637 2013 613 2013 564 L 2013 302 L 2132 302 L 2132 220 L 2013 220 L 2013 120 L 1909 120 L 1909 220 L 1829 220 L 1829 302 L 1909 302 L 1909 568 C 1909 669 1961 729 2050 729 Z M 1337 720 L 1441 720 L 1441 436 C 1441 349 1490 300 1561 300 C 1632 300 1680 349 1680 436 L 1680 720 L 1784 720 L 1784 430 C 1784 289 1719 210 1593 210 C 1526 210 1466 237 1441 284 L 1441 220 L 1337 220 L 1337 720 Z M 998 630 C 913 630 843 557 843 470 C 843 383 913 310 998 310 C 1083 310 1153 383 1153 470 C 1153 557 1083 630 998 630 Z M 998 730 C 1061 730 1114 703 1143 661 L 1143 720 L 1247 720 L 1247 220 L 1143 220 L 1143 274 C 1114 235 1060 210 997 210 C 852 210 741 327 741 470 C 741 613 853 730 998 730 Z M 176 720 L 275 720 L 368 440 L 461 720 L 560 720 L 736 220 L 627 220 L 512 572 L 407 220 L 329 220 L 224 572 L 109 220 L 0 220 L 176 720 Z"
  }))), /*#__PURE__*/React.createElement("nav", {
    style: headerStyles.nav
  }, nav.map((n, i) => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: "#",
    style: i === 0 ? headerStyles.navItemActive : headerStyles.navItem
  }, n.label)))), /*#__PURE__*/React.createElement("div", {
    style: headerStyles.right
  }, /*#__PURE__*/React.createElement("div", {
    style: headerStyles.searchWrap
  }, /*#__PURE__*/React.createElement("span", {
    style: headerStyles.searchIcon
  }, /*#__PURE__*/React.createElement(Icon.Search, {
    size: 18
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "\uD68C\uC0AC\xB7\uD3EC\uC9C0\uC158\xB7\uAE30\uC220 \uC2A4\uD0DD \uAC80\uC0C9",
    value: query || "",
    onChange: e => onQueryChange && onQueryChange(e.target.value),
    style: headerStyles.search
  })), /*#__PURE__*/React.createElement("button", {
    style: headerStyles.iconBtn,
    "aria-label": "\uC54C\uB9BC"
  }, /*#__PURE__*/React.createElement(Icon.Bell, {
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    style: headerStyles.iconBtn,
    "aria-label": "\uC800\uC7A5\uD55C \uACF5\uACE0"
  }, /*#__PURE__*/React.createElement(Icon.Bookmark, {
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: headerStyles.avatar
  }, "\uAE40"), /*#__PURE__*/React.createElement("button", {
    style: headerStyles.cta
  }, "\uAE30\uC5C5 \uC11C\uBE44\uC2A4")));
}
const headerStyles = {
  bar: {
    position: "sticky",
    top: 0,
    zIndex: 30,
    background: "rgba(255,255,255,0.92)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    borderBottom: "1px solid rgba(112,115,124,0.16)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 32px",
    height: 64
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: 28
  },
  logoBtn: {
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    display: "flex",
    alignItems: "center"
  },
  nav: {
    display: "flex",
    gap: 4
  },
  navItem: {
    padding: "8px 12px",
    borderRadius: 8,
    font: "600 14px/1.429 Pretendard JP, sans-serif",
    letterSpacing: "0.014em",
    color: "rgba(46,47,51,0.88)",
    textDecoration: "none"
  },
  navItemActive: {
    padding: "8px 12px",
    borderRadius: 8,
    font: "600 14px/1.429 Pretendard JP, sans-serif",
    letterSpacing: "0.014em",
    color: "#17171A",
    textDecoration: "none"
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: 8
  },
  searchWrap: {
    position: "relative",
    marginRight: 8
  },
  search: {
    width: 280,
    height: 38,
    padding: "0 14px 0 38px",
    borderRadius: 10,
    border: "1px solid rgba(112,115,124,0.22)",
    background: "#FAFAFB",
    font: "500 14px/1.429 Pretendard JP, sans-serif",
    letterSpacing: "0.014em",
    outline: "none",
    color: "#17171A"
  },
  searchIcon: {
    position: "absolute",
    left: 12,
    top: "50%",
    transform: "translateY(-50%)",
    color: "rgba(112,115,124,0.74)",
    display: "flex"
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    border: "none",
    background: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "rgba(46,47,51,0.88)"
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 999,
    background: "#EAF2FE",
    color: "#0066FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: "700 13px/1 Pretendard JP, sans-serif",
    marginLeft: 4,
    marginRight: 4
  },
  cta: {
    height: 36,
    padding: "0 14px",
    borderRadius: 10,
    border: "1px solid rgba(112,115,124,0.22)",
    background: "#ffffff",
    color: "#17171A",
    font: "700 13px/1.385 Pretendard JP, sans-serif",
    letterSpacing: "0.019em",
    cursor: "pointer"
  }
};
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wanted-jobs/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wanted-jobs/Hero.jsx
try { (() => {
// Hero — search-anchored intro block.
// Korean copy uses the formal -습니다 ending as in the Wanted brand voice.

function Hero() {
  const tags = ["프로덕트 디자이너", "프론트엔드", "AI/ML", "PM", "iOS", "백엔드"];
  return /*#__PURE__*/React.createElement("section", {
    style: heroStyles.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: heroStyles.inner
  }, /*#__PURE__*/React.createElement("h1", {
    style: heroStyles.eyebrow
  }, "WANTED"), /*#__PURE__*/React.createElement("h2", {
    style: heroStyles.title
  }, "\uC0C8\uB85C\uC6B4 \uAC00\uB2A5\uC131\uC744", /*#__PURE__*/React.createElement("br", null), "\uB9CC\uB098\uB294 \uACF3."), /*#__PURE__*/React.createElement("p", {
    style: heroStyles.sub
  }, "\uB098\uC5D0\uAC8C \uB9DE\uB294 \uD68C\uC0AC\uC640 \uC9C1\uBB34\uB97C \uB9E4\uCE6D\uC73C\uB85C \uB9CC\uB098\uBCF4\uC138\uC694. \uC9C0\uAE08 \uD65C\uB3D9 \uC911\uC778 \uD68C\uC0AC ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "#17171A"
    }
  }, "2,847\uAC1C"), ", \uACF5\uACE0 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "#17171A"
    }
  }, "15,432\uAC74"), "."), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.tags
  }, /*#__PURE__*/React.createElement("span", {
    style: heroStyles.tagsLabel
  }, "\uC9C0\uAE08 \uB9CE\uC774 \uAC80\uC0C9\uD574\uC694"), tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: heroStyles.tag
  }, "#", t)))));
}
const heroStyles = {
  wrap: {
    padding: "64px 32px 48px",
    background: "linear-gradient(180deg, #ffffff 0%, #F7F7F8 100%)"
  },
  inner: {
    maxWidth: 1200,
    margin: "0 auto"
  },
  eyebrow: {
    font: "700 14px/1.273 'Wanted Sans Variable', 'Wanted Sans', 'Pretendard JP', sans-serif",
    letterSpacing: "0.18em",
    color: "#0066FF",
    margin: 0
  },
  title: {
    font: "700 56px/1.286 'Wanted Sans Variable', 'Wanted Sans', 'Pretendard JP', sans-serif",
    letterSpacing: "-0.032em",
    color: "#17171A",
    margin: "12px 0 16px"
  },
  sub: {
    font: "500 17px/1.412 Pretendard JP, sans-serif",
    letterSpacing: "0em",
    color: "rgba(46,47,51,0.88)",
    margin: 0,
    maxWidth: 560
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 8,
    marginTop: 32
  },
  tagsLabel: {
    font: "600 13px/1.385 Pretendard JP, sans-serif",
    letterSpacing: "0.019em",
    color: "rgba(55,56,60,0.61)",
    marginRight: 4
  },
  tag: {
    padding: "8px 14px",
    borderRadius: 9999,
    background: "#ffffff",
    border: "1px solid rgba(112,115,124,0.22)",
    font: "600 14px/1.429 Pretendard JP, sans-serif",
    letterSpacing: "0.014em",
    color: "#17171A",
    cursor: "pointer"
  }
};
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wanted-jobs/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wanted-jobs/JobCard.jsx
try { (() => {
// JobCard — the unit card. 1px border at rest, shadow on hover.
// Composed of a media slab on top (with company logo / bookmark) and
// a textual stack below.

function JobCard({
  job,
  bookmarked,
  onBookmark,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: jcStyles.card,
    onClick: () => onOpen(job),
    role: "link",
    tabIndex: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...jcStyles.media,
      background: `linear-gradient(135deg, ${job.logo.from}, ${job.logo.to})`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: jcStyles.initial
  }, job.logo.initial), job.pinned && /*#__PURE__*/React.createElement("span", {
    style: jcStyles.pinned
  }, /*#__PURE__*/React.createElement(Icon.Sparkles, {
    size: 12
  }), " Wanted PICK"), /*#__PURE__*/React.createElement("button", {
    style: jcStyles.bookmark,
    onClick: e => {
      e.stopPropagation();
      onBookmark(job.id);
    },
    "aria-label": bookmarked ? "북마크 해제" : "북마크"
  }, bookmarked ? /*#__PURE__*/React.createElement(Icon.BookmarkFilled, {
    size: 18
  }) : /*#__PURE__*/React.createElement(Icon.Bookmark, {
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: jcStyles.body
  }, /*#__PURE__*/React.createElement("div", {
    style: jcStyles.companyRow
  }, /*#__PURE__*/React.createElement("span", {
    style: jcStyles.company
  }, job.company), /*#__PURE__*/React.createElement("span", {
    style: jcStyles.location
  }, /*#__PURE__*/React.createElement(Icon.Pin, {
    size: 12
  }), " ", job.location)), /*#__PURE__*/React.createElement("h3", {
    style: jcStyles.title
  }, job.title), /*#__PURE__*/React.createElement("div", {
    style: jcStyles.meta
  }, /*#__PURE__*/React.createElement("span", {
    style: jcStyles.metaItem
  }, job.experience), /*#__PURE__*/React.createElement("span", {
    style: jcStyles.metaSep
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: jcStyles.metaItem
  }, "\uC5F0\uBD09 \u20A9", job.salaryMin, "\uB9CC+")), /*#__PURE__*/React.createElement("div", {
    style: jcStyles.foot
  }, job.badges.slice(0, 2).map(b => /*#__PURE__*/React.createElement("span", {
    key: b,
    style: b === "Wanted PICK" ? jcStyles.badgePick : b === "매칭됨" ? jcStyles.badgeMatch : jcStyles.badgeNeutral
  }, b)), /*#__PURE__*/React.createElement("span", {
    style: jcStyles.reward
  }, "\uCC44\uC6A9\uBCF4\uC0C1\uAE08 ", job.reward.toLocaleString(), ",000\uC6D0"))));
}
const jcStyles = {
  card: {
    background: "#ffffff",
    border: "1px solid rgba(112,115,124,0.22)",
    borderRadius: 16,
    overflow: "hidden",
    cursor: "pointer",
    transition: "box-shadow 150ms cubic-bezier(0.4,0,0.2,1), transform 150ms, border-color 150ms",
    display: "flex",
    flexDirection: "column"
  },
  media: {
    position: "relative",
    height: 160,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff"
  },
  initial: {
    font: "700 56px/1 'Wanted Sans Variable', 'Wanted Sans', sans-serif",
    letterSpacing: "-0.02em",
    opacity: 0.96
  },
  pinned: {
    position: "absolute",
    top: 12,
    left: 12,
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    padding: "4px 10px",
    borderRadius: 9999,
    background: "rgba(255,255,255,0.16)",
    color: "#ffffff",
    font: "600 11px/1.273 Pretendard JP, sans-serif",
    letterSpacing: "0.031em",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)"
  },
  bookmark: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 36,
    height: 36,
    borderRadius: 9999,
    border: "none",
    background: "rgba(0,0,0,0.32)",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)"
  },
  body: {
    padding: 16,
    display: "flex",
    flexDirection: "column",
    gap: 8
  },
  companyRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8
  },
  company: {
    font: "600 13px/1.385 Pretendard JP, sans-serif",
    letterSpacing: "0.019em",
    color: "rgba(46,47,51,0.88)"
  },
  location: {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    font: "500 12px/1.273 Pretendard JP, sans-serif",
    letterSpacing: "0.025em",
    color: "rgba(55,56,60,0.61)"
  },
  title: {
    font: "700 17px/1.412 Pretendard JP, sans-serif",
    letterSpacing: "0em",
    color: "#17171A",
    margin: 0,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  },
  meta: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    marginTop: 2
  },
  metaItem: {
    font: "500 13px/1.385 Pretendard JP, sans-serif",
    letterSpacing: "0.019em",
    color: "rgba(55,56,60,0.74)"
  },
  metaSep: {
    color: "rgba(112,115,124,0.43)"
  },
  foot: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
    alignItems: "center",
    marginTop: 6
  },
  badgePick: {
    padding: "3px 8px",
    borderRadius: 9999,
    background: "#F0ECFE",
    color: "#4F29E5",
    font: "600 11px/1.273 Pretendard JP, sans-serif",
    letterSpacing: "0.031em"
  },
  badgeMatch: {
    padding: "3px 8px",
    borderRadius: 9999,
    background: "#D9FFE6",
    color: "#006E25",
    font: "600 11px/1.273 Pretendard JP, sans-serif",
    letterSpacing: "0.031em"
  },
  badgeNeutral: {
    padding: "3px 8px",
    borderRadius: 9999,
    background: "rgba(112,115,124,0.08)",
    color: "rgba(46,47,51,0.88)",
    font: "600 11px/1.273 Pretendard JP, sans-serif",
    letterSpacing: "0.031em"
  },
  reward: {
    marginLeft: "auto",
    font: "700 11px/1.273 Pretendard JP, sans-serif",
    letterSpacing: "0.031em",
    color: "#0066FF"
  }
};
window.JobCard = JobCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wanted-jobs/JobCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wanted-jobs/JobDetail.jsx
try { (() => {
// JobDetail — full-page detail view with sticky sidebar containing
// company info, salary, benefits, apply button.

function JobDetail({
  job,
  bookmarked,
  onBookmark,
  onBack,
  onApply
}) {
  if (!job) return null;
  return /*#__PURE__*/React.createElement("section", {
    style: jdStyles.wrap
  }, /*#__PURE__*/React.createElement("button", {
    style: jdStyles.back,
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon.ChevronLeft, {
    size: 16
  }), " \uC804\uCCB4 \uACF5\uACE0\uB85C"), /*#__PURE__*/React.createElement("div", {
    style: jdStyles.main
  }, /*#__PURE__*/React.createElement("article", {
    style: jdStyles.content
  }, /*#__PURE__*/React.createElement("header", {
    style: jdStyles.header
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...jdStyles.banner,
      background: `linear-gradient(135deg, ${job.logo.from}, ${job.logo.to})`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: jdStyles.bigInitial
  }, job.logo.initial)), /*#__PURE__*/React.createElement("div", {
    style: jdStyles.headInfo
  }, /*#__PURE__*/React.createElement("span", {
    style: jdStyles.headCompany
  }, job.company, " ", /*#__PURE__*/React.createElement("span", {
    style: jdStyles.headCompanyEn
  }, "\xB7 ", job.companyEn)), /*#__PURE__*/React.createElement("h1", {
    style: jdStyles.headTitle
  }, job.title), /*#__PURE__*/React.createElement("div", {
    style: jdStyles.badges
  }, job.badges.map(b => /*#__PURE__*/React.createElement("span", {
    key: b,
    style: b === "Wanted PICK" ? jdStyles.badgePick : b === "매칭됨" ? jdStyles.badgeMatch : jdStyles.badgeNeutral
  }, b))))), /*#__PURE__*/React.createElement("section", {
    style: jdStyles.section
  }, /*#__PURE__*/React.createElement("h3", {
    style: jdStyles.h3
  }, "\uD3EC\uC9C0\uC158 \uC0C1\uC138"), /*#__PURE__*/React.createElement("p", {
    style: jdStyles.body
  }, job.summary)), /*#__PURE__*/React.createElement("section", {
    style: jdStyles.section
  }, /*#__PURE__*/React.createElement("h3", {
    style: jdStyles.h3
  }, "\uC8FC\uC694 \uC5C5\uBB34"), /*#__PURE__*/React.createElement("ul", {
    style: jdStyles.list
  }, job.responsibilities.map((r, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: jdStyles.li
  }, r)))), /*#__PURE__*/React.createElement("section", {
    style: jdStyles.section
  }, /*#__PURE__*/React.createElement("h3", {
    style: jdStyles.h3
  }, "\uC790\uACA9 \uC694\uAC74"), /*#__PURE__*/React.createElement("ul", {
    style: jdStyles.list
  }, job.requirements.map((r, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: jdStyles.li
  }, r)))), /*#__PURE__*/React.createElement("section", {
    style: jdStyles.section
  }, /*#__PURE__*/React.createElement("h3", {
    style: jdStyles.h3
  }, "\uD61C\uD0DD\uACFC \uBCF5\uC9C0"), /*#__PURE__*/React.createElement("div", {
    style: jdStyles.bens
  }, job.benefits.map(b => /*#__PURE__*/React.createElement("span", {
    key: b,
    style: jdStyles.benItem
  }, /*#__PURE__*/React.createElement(Icon.Check, {
    size: 14
  }), " ", b)))), /*#__PURE__*/React.createElement("section", {
    style: jdStyles.section
  }, /*#__PURE__*/React.createElement("h3", {
    style: jdStyles.h3
  }, "\uAE30\uC220 \uC2A4\uD0DD"), /*#__PURE__*/React.createElement("div", {
    style: jdStyles.stack
  }, job.stack.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: jdStyles.stackItem
  }, s))))), /*#__PURE__*/React.createElement("aside", {
    style: jdStyles.aside
  }, /*#__PURE__*/React.createElement("div", {
    style: jdStyles.asideCard
  }, /*#__PURE__*/React.createElement("div", {
    style: jdStyles.asideRow
  }, /*#__PURE__*/React.createElement("span", {
    style: jdStyles.asideLabel
  }, "\uB9C8\uAC10"), /*#__PURE__*/React.createElement("span", {
    style: jdStyles.asideValue
  }, "\uC0C1\uC2DC \uCC44\uC6A9")), /*#__PURE__*/React.createElement("div", {
    style: jdStyles.asideRow
  }, /*#__PURE__*/React.createElement("span", {
    style: jdStyles.asideLabel
  }, "\uACBD\uB825"), /*#__PURE__*/React.createElement("span", {
    style: jdStyles.asideValue
  }, job.experience)), /*#__PURE__*/React.createElement("div", {
    style: jdStyles.asideRow
  }, /*#__PURE__*/React.createElement("span", {
    style: jdStyles.asideLabel
  }, "\uADFC\uBB34\uC9C0"), /*#__PURE__*/React.createElement("span", {
    style: jdStyles.asideValue
  }, job.location)), /*#__PURE__*/React.createElement("div", {
    style: {
      ...jdStyles.asideRow,
      borderBottom: "none",
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: jdStyles.asideLabel
  }, "\uCC44\uC6A9\uBCF4\uC0C1\uAE08"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...jdStyles.asideValue,
      color: "#0066FF"
    }
  }, job.reward.toLocaleString(), ",000\uC6D0"))), /*#__PURE__*/React.createElement("button", {
    style: jdStyles.applyBtn,
    onClick: () => onApply(job)
  }, "\uC9C0\uC6D0\uD558\uAE30 ", /*#__PURE__*/React.createElement(Icon.ArrowRight, {
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    style: bookmarked ? jdStyles.bookmarkBtnOn : jdStyles.bookmarkBtn,
    onClick: () => onBookmark(job.id)
  }, bookmarked ? /*#__PURE__*/React.createElement(Icon.BookmarkFilled, {
    size: 16
  }) : /*#__PURE__*/React.createElement(Icon.Bookmark, {
    size: 16
  }), bookmarked ? "저장됨" : "공고 저장"), /*#__PURE__*/React.createElement("button", {
    style: jdStyles.shareBtn
  }, /*#__PURE__*/React.createElement(Icon.Share, {
    size: 16
  }), " \uACF5\uC720"), /*#__PURE__*/React.createElement("div", {
    style: jdStyles.tip
  }, /*#__PURE__*/React.createElement("span", {
    style: jdStyles.tipBadge
  }, /*#__PURE__*/React.createElement(Icon.Sparkles, {
    size: 14
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: jdStyles.tipTitle
  }, "AI \uB9E4\uCE6D \uC810\uC218"), /*#__PURE__*/React.createElement("div", {
    style: jdStyles.tipBody
  }, "\uC774 \uD3EC\uC9C0\uC158\uACFC\uC758 \uC801\uD569\uB3C4\uB294 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "#0066FF"
    }
  }, "92\uC810"), "\uC785\uB2C8\uB2E4. \uD3C9\uADE0\uBCF4\uB2E4 28\uC810 \uB192\uC2B5\uB2C8\uB2E4."))))));
}
const jdStyles = {
  wrap: {
    padding: "24px 32px 96px",
    background: "#F7F7F8",
    minHeight: "calc(100vh - 64px)"
  },
  back: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "8px 12px 8px 6px",
    borderRadius: 8,
    border: "none",
    background: "transparent",
    font: "600 14px/1.429 Pretendard JP, sans-serif",
    letterSpacing: "0.014em",
    color: "rgba(46,47,51,0.88)",
    cursor: "pointer",
    marginBottom: 16
  },
  main: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) 340px",
    gap: 24,
    alignItems: "start"
  },
  content: {
    background: "#ffffff",
    border: "1px solid rgba(112,115,124,0.22)",
    borderRadius: 24,
    overflow: "hidden"
  },
  header: {
    display: "flex",
    flexDirection: "column"
  },
  banner: {
    height: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  bigInitial: {
    font: "700 96px/1 'Wanted Sans Variable', 'Wanted Sans', sans-serif",
    letterSpacing: "-0.03em",
    color: "#ffffff",
    opacity: 0.94
  },
  headInfo: {
    padding: "24px 32px 8px"
  },
  headCompany: {
    font: "600 14px/1.429 Pretendard JP, sans-serif",
    letterSpacing: "0.014em",
    color: "rgba(46,47,51,0.88)"
  },
  headCompanyEn: {
    color: "rgba(112,115,124,0.74)",
    fontWeight: 500
  },
  headTitle: {
    font: "700 32px/1.375 Pretendard JP, sans-serif",
    letterSpacing: "-0.025em",
    color: "#17171A",
    margin: "8px 0 12px"
  },
  badges: {
    display: "flex",
    gap: 6,
    flexWrap: "wrap"
  },
  badgePick: {
    padding: "4px 10px",
    borderRadius: 9999,
    background: "#F0ECFE",
    color: "#4F29E5",
    font: "600 12px/1.334 Pretendard JP, sans-serif",
    letterSpacing: "0.025em"
  },
  badgeMatch: {
    padding: "4px 10px",
    borderRadius: 9999,
    background: "#D9FFE6",
    color: "#006E25",
    font: "600 12px/1.334 Pretendard JP, sans-serif",
    letterSpacing: "0.025em"
  },
  badgeNeutral: {
    padding: "4px 10px",
    borderRadius: 9999,
    background: "rgba(112,115,124,0.08)",
    color: "rgba(46,47,51,0.88)",
    font: "600 12px/1.334 Pretendard JP, sans-serif",
    letterSpacing: "0.025em"
  },
  section: {
    padding: "20px 32px",
    borderTop: "1px solid rgba(112,115,124,0.16)"
  },
  h3: {
    font: "700 18px/1.445 Pretendard JP, sans-serif",
    letterSpacing: "-0.002em",
    color: "#17171A",
    margin: "0 0 10px"
  },
  body: {
    font: "500 16px/1.625 Pretendard JP, sans-serif",
    letterSpacing: "0.006em",
    color: "rgba(46,47,51,0.88)",
    margin: 0
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: 8
  },
  li: {
    paddingLeft: 18,
    position: "relative",
    font: "500 16px/1.625 Pretendard JP, sans-serif",
    letterSpacing: "0.006em",
    color: "rgba(46,47,51,0.88)"
  },
  bens: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8
  },
  benItem: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "8px 14px",
    borderRadius: 9999,
    background: "rgba(112,115,124,0.05)",
    border: "1px solid rgba(112,115,124,0.16)",
    font: "600 14px/1.429 Pretendard JP, sans-serif",
    letterSpacing: "0.014em",
    color: "#17171A"
  },
  stack: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6
  },
  stackItem: {
    padding: "6px 12px",
    borderRadius: 8,
    background: "#17171A",
    color: "#ffffff",
    font: "600 13px/1.385 Pretendard JP, sans-serif",
    letterSpacing: "0.019em"
  },
  aside: {
    position: "sticky",
    top: 130,
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  asideCard: {
    background: "#ffffff",
    border: "1px solid rgba(112,115,124,0.22)",
    borderRadius: 16,
    padding: "8px 16px",
    display: "flex",
    flexDirection: "column"
  },
  asideRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 0",
    borderBottom: "1px solid rgba(112,115,124,0.16)",
    gap: 12
  },
  asideLabel: {
    font: "600 13px/1.385 Pretendard JP, sans-serif",
    letterSpacing: "0.019em",
    color: "rgba(55,56,60,0.61)"
  },
  asideValue: {
    font: "600 13px/1.385 Pretendard JP, sans-serif",
    letterSpacing: "0.019em",
    color: "#17171A",
    textAlign: "right"
  },
  applyBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    height: 52,
    padding: "0 24px",
    borderRadius: 12,
    border: "none",
    background: "#0066FF",
    color: "#ffffff",
    font: "700 17px/1.412 Pretendard JP, sans-serif",
    letterSpacing: "0em",
    cursor: "pointer",
    boxShadow: "0 1px 4px 0 rgba(0,102,255,0.16)"
  },
  bookmarkBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    height: 44,
    padding: "0 16px",
    borderRadius: 10,
    background: "#ffffff",
    border: "1px solid rgba(112,115,124,0.22)",
    font: "700 14px/1.429 Pretendard JP, sans-serif",
    letterSpacing: "0.014em",
    color: "#17171A",
    cursor: "pointer"
  },
  bookmarkBtnOn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    height: 44,
    padding: "0 16px",
    borderRadius: 10,
    background: "#EAF2FE",
    border: "1px solid #0066FF",
    font: "700 14px/1.429 Pretendard JP, sans-serif",
    letterSpacing: "0.014em",
    color: "#0066FF",
    cursor: "pointer"
  },
  shareBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    height: 40,
    padding: "0 16px",
    borderRadius: 10,
    background: "transparent",
    border: "none",
    font: "600 13px/1.385 Pretendard JP, sans-serif",
    letterSpacing: "0.019em",
    color: "rgba(46,47,51,0.88)",
    cursor: "pointer"
  },
  tip: {
    display: "flex",
    gap: 10,
    padding: 14,
    borderRadius: 12,
    background: "#EAF2FE",
    border: "1px solid #C9DEFE",
    marginTop: 6
  },
  tipBadge: {
    width: 24,
    height: 24,
    borderRadius: 8,
    background: "#0066FF",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "none"
  },
  tipTitle: {
    font: "700 13px/1.385 Pretendard JP, sans-serif",
    letterSpacing: "0.019em",
    color: "#001536",
    marginBottom: 2
  },
  tipBody: {
    font: "500 12px/1.5 Pretendard JP, sans-serif",
    letterSpacing: "0.025em",
    color: "rgba(0,21,54,0.74)"
  }
};
window.JobDetail = JobDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wanted-jobs/JobDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wanted-jobs/JobGrid.jsx
try { (() => {
// JobGrid — responsive 3-column grid of JobCards.
// Layout breaks to 2-col under 1024px (via inline media via grid-template-columns:repeat(auto-fill, ...))

function JobGrid({
  jobs,
  bookmarks,
  onBookmark,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: gridStyles.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: gridStyles.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: gridStyles.head
  }, /*#__PURE__*/React.createElement("h2", {
    style: gridStyles.h2
  }, "\uB098\uC5D0\uAC8C \uB9DE\uB294 \uD3EC\uC9C0\uC158"), /*#__PURE__*/React.createElement("span", {
    style: gridStyles.meta
  }, jobs.length, "\uAC1C \uB9E4\uCE6D\uB428 \xB7 AI \uB9E4\uCE6D \uC810\uC218\uC21C")), /*#__PURE__*/React.createElement("div", {
    style: gridStyles.grid
  }, jobs.map(j => /*#__PURE__*/React.createElement(JobCard, {
    key: j.id,
    job: j,
    bookmarked: !!bookmarks[j.id],
    onBookmark: onBookmark,
    onOpen: onOpen
  })))));
}
const gridStyles = {
  wrap: {
    padding: "32px 32px 96px",
    background: "#ffffff"
  },
  inner: {
    maxWidth: 1200,
    margin: "0 auto"
  },
  head: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingBottom: 4
  },
  h2: {
    font: "700 24px/1.334 Pretendard JP, sans-serif",
    letterSpacing: "-0.023em",
    color: "#17171A",
    margin: 0
  },
  meta: {
    font: "500 13px/1.385 Pretendard JP, sans-serif",
    letterSpacing: "0.019em",
    color: "rgba(55,56,60,0.61)"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: 16
  }
};
window.JobGrid = JobGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wanted-jobs/JobGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wanted-jobs/data.js
try { (() => {
// Fake job listings. Company logos are letter monograms with a gradient
// — matching Wanted's fallback when no real logo has been uploaded.

const JOBS = [{
  id: "j1",
  company: "우아한형제들",
  companyEn: "Woowa Brothers",
  logo: {
    initial: "우",
    from: "#0066FF",
    to: "#001536"
  },
  title: "시니어 프로덕트 디자이너",
  location: "서울 송파구",
  experience: "5~9년차",
  salaryMin: "8,500",
  badges: ["Wanted PICK", "정규직"],
  reward: 1500,
  pinned: true,
  benefits: ["식대 지원", "재택 가능", "스톡옵션", "건강검진"],
  stack: ["Figma", "FigJam", "Notion"],
  summary: "배달의민족·B마트 등 서비스 전반의 프로덕트 디자인을 리드하실 시니어 디자이너를 모십니다.",
  responsibilities: ["프로덕트 전반의 UX/UI 디자인 리드", "디자인 시스템 컴포넌트 정의와 운영", "PM·개발자와의 협업으로 출시까지 책임"],
  requirements: ["5년 이상 모바일/웹 프로덕트 디자인 경력", "Figma·디자인 시스템 운영 경험", "데이터 기반 의사결정에 익숙하신 분"]
}, {
  id: "j2",
  company: "토스",
  companyEn: "Toss",
  logo: {
    initial: "T",
    from: "#005EEB",
    to: "#0054D1"
  },
  title: "프론트엔드 엔지니어",
  location: "서울 강남구",
  experience: "3~7년차",
  salaryMin: "7,200",
  badges: ["매칭됨"],
  reward: 1000,
  benefits: ["사내식당", "전 직원 스톡", "맥북 지급"],
  stack: ["TypeScript", "React", "Next.js"],
  summary: "토스 코어 팀에서 결제·송금 흐름의 프론트엔드를 만드실 분을 찾습니다.",
  responsibilities: ["사용자 흐름의 성능·접근성·일관성 책임", "디자인 시스템 컴포넌트 기여", "주요 지표 개선 실험 운영"],
  requirements: ["3년 이상 React 실무 경험", "TypeScript에 능숙", "성능 최적화 경험"]
}, {
  id: "j3",
  company: "당근",
  companyEn: "Daangn",
  logo: {
    initial: "당",
    from: "#FF7B2E",
    to: "#943600"
  },
  title: "iOS Engineer",
  location: "서울 강남구",
  experience: "신입~경력",
  salaryMin: "6,500",
  badges: ["신입 가능"],
  reward: 1000,
  benefits: ["반려동물 출퇴근", "사내 카페", "유연근무"],
  stack: ["Swift", "SwiftUI", "Combine"],
  summary: "동네 커뮤니티 iOS 앱을 함께 만드실 엔지니어를 모십니다.",
  responsibilities: ["iOS 앱 기능 개발", "성능과 UX 개선", "코드 리뷰와 멘토링"],
  requirements: ["Swift에 능숙", "SwiftUI 또는 UIKit 실무 경험"]
}, {
  id: "j4",
  company: "네이버",
  companyEn: "NAVER",
  logo: {
    initial: "N",
    from: "#00BF40",
    to: "#006E25"
  },
  title: "AI 리서치 엔지니어 (LLM)",
  location: "성남 분당구",
  experience: "5~10년차",
  salaryMin: "9,000",
  badges: ["Wanted PICK", "정규직"],
  reward: 2000,
  benefits: ["연구비 지원", "컨퍼런스 지원", "사내 GPU 클러스터"],
  stack: ["PyTorch", "JAX", "Python"],
  summary: "HyperCLOVA 후속 모델 학습·정렬을 책임지실 리서치 엔지니어를 모십니다.",
  responsibilities: ["LLM 사전학습 및 RLHF 파이프라인 운영", "평가셋 설계와 모델 분석", "프로덕트 팀과의 협업"],
  requirements: ["딥러닝 실무 5년+", "대규모 분산 학습 경험", "공인 학회 발표 경험 우대"]
}, {
  id: "j5",
  company: "카카오",
  companyEn: "Kakao",
  logo: {
    initial: "k",
    from: "#FFD49C",
    to: "#9C5800"
  },
  title: "백엔드 엔지니어 — 카카오톡 메시징",
  location: "제주 / 판교",
  experience: "3~10년차",
  salaryMin: "7,800",
  badges: ["정규직"],
  reward: 1000,
  benefits: ["사옥 무료식사", "통신비 지원", "재택 혼합"],
  stack: ["Kotlin", "Spring", "Kafka"],
  summary: "전 국민이 매일 쓰는 메시징 코어를 만드는 팀에 합류하실 분을 찾습니다.",
  responsibilities: ["메시징 백엔드 설계와 운영", "장애 대응과 성능 개선", "주요 트래픽 시나리오 리뷰"],
  requirements: ["JVM 기반 대규모 서비스 운영 경험", "메시징 또는 실시간 시스템 경험"]
}, {
  id: "j6",
  company: "라인",
  companyEn: "LINE",
  logo: {
    initial: "L",
    from: "#48AD00",
    to: "#225200"
  },
  title: "Data Scientist — Growth",
  location: "서울 / 도쿄 hybrid",
  experience: "3~8년차",
  salaryMin: "8,200",
  badges: ["글로벌"],
  reward: 1500,
  benefits: ["해외 출장", "랜덤 식대", "노트북 자유"],
  stack: ["Python", "SQL", "Looker"],
  summary: "LINE 메신저의 사용자 성장 실험을 설계·분석하실 데이터 사이언티스트를 찾습니다.",
  responsibilities: ["대규모 A/B 실험 설계", "성장 가설 검증", "BI 대시보드 운영"],
  requirements: ["인과추론 또는 실험 분석 경험", "SQL·Python에 능숙"]
}, {
  id: "j7",
  company: "쿠팡",
  companyEn: "Coupang",
  logo: {
    initial: "C",
    from: "#FF4242",
    to: "#750404"
  },
  title: "Senior Product Manager — Logistics",
  location: "서울 / Seattle",
  experience: "7~12년차",
  salaryMin: "11,000",
  badges: ["글로벌", "정규직"],
  reward: 2500,
  benefits: ["주식 보상", "이주 지원", "프리미엄 보험"],
  stack: ["Jira", "Looker", "Excel"],
  summary: "쿠팡 풀필먼트 전 과정에서 신규 product line을 그리실 시니어 PM을 모십니다.",
  responsibilities: ["로지스틱스 신규 제품 기획", "Ops와의 협업 운영", "글로벌 팀과의 커뮤니케이션"],
  requirements: ["B2C 또는 logistics PM 경험 7년+", "영어 비즈니스 가능"]
}, {
  id: "j8",
  company: "리디",
  companyEn: "RIDI",
  logo: {
    initial: "R",
    from: "#6541F2",
    to: "#23098F"
  },
  title: "콘텐츠 마케터",
  location: "서울 강남구",
  experience: "3~5년차",
  salaryMin: "5,200",
  badges: [],
  reward: 800,
  benefits: ["북테크 패키지", "유연근무", "리디셀렉트 무료"],
  stack: ["GA4", "Mixpanel", "Notion"],
  summary: "RIDI의 콘텐츠·도서 마케팅 캠페인을 설계하실 마케터를 찾습니다.",
  responsibilities: ["디지털 마케팅 캠페인 운영", "성과 분석과 인사이트 도출", "에디토리얼 협업"],
  requirements: ["B2C 마케팅 3년+", "GA·SQL 기본"]
}, {
  id: "j9",
  company: "당근페이",
  companyEn: "Daangn Pay",
  logo: {
    initial: "₩",
    from: "#FFC06E",
    to: "#9C5800"
  },
  title: "Compliance Manager",
  location: "서울",
  experience: "5~10년차",
  salaryMin: "8,000",
  badges: ["전문직"],
  reward: 1000,
  benefits: ["연간 교육비", "주 4.5일 옵션"],
  stack: ["—"],
  summary: "결제·송금 서비스 컴플라이언스 운영을 책임지실 분을 찾습니다.",
  responsibilities: ["AML/KYC 정책 설계", "감독기관 보고서 작성", "내부 리스크 리뷰"],
  requirements: ["핀테크 컴플라이언스 5년+", "FIU/금감원 응대 경험"]
}];
window.JOBS = JOBS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wanted-jobs/data.js", error: String((e && e.message) || e) }); }

// ui_kits/wanted-jobs/icons.jsx
try { (() => {
// Inline SVG icons — Lucide-style 24px grid, 1.5px stroke. Substituted
// for Wanted's own (unextractable) icon set. Each icon takes `size` and
// inherits color via `currentColor`. Drop them in like:
//   <Icon.Search size={20} />
const sw = 1.5;
const I = ({
  size = 24,
  children,
  viewBox = "0 0 24 24"
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: viewBox,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: sw,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, children);
const Icon = {
  Search: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20 20-3.5-3.5"
  })),
  Bell: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
  })),
  Bookmark: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
  })),
  BookmarkFilled: p => /*#__PURE__*/React.createElement("svg", {
    width: p.size || 24,
    height: p.size || 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
  })),
  ChevronDown: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })),
  ChevronRight: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "m9 6 6 6-6 6"
  })),
  ChevronLeft: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "m15 6-6 6 6 6"
  })),
  ArrowRight: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 5 7 7-7 7"
  })),
  Pin: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-7 8-13a8 8 0 0 0-16 0c0 6 8 13 8 13Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "3"
  })),
  Briefcase: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "7",
    width: "20",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
  })),
  Building: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "2",
    width: "16",
    height: "20",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 22v-4h6v4M8 6h.01M8 10h.01M8 14h.01M16 6h.01M16 10h.01M16 14h.01"
  })),
  Gift: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "8",
    width: "18",
    height: "4",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 8a2.5 2.5 0 0 1 0-5C9 3 12 8 12 8M16.5 8a2.5 2.5 0 0 0 0-5C15 3 12 8 12 8"
  })),
  Check: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "m5 12 5 5L20 7"
  })),
  Share: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "5",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "19",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"
  })),
  Plus: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })),
  Sparkles: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v4M5 9l3 3-3 3M19 9l-3 3 3 3M12 17v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m8 6 4 6-4 6M16 6l-4 6 4 6"
  })),
  Sliders: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M4 21V14M4 10V3M12 21V12M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"
  })),
  Globe: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
  }))
};
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wanted-jobs/icons.jsx", error: String((e && e.message) || e) }); }

})();
