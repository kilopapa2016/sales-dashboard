# 월별 매출 대시보드

_Started 2026-06-30 22:39 UTC_

---

## User

무엇을 만드는지:월별 매출을 보여주는 대시보드
어떻게 배치할지:상단에는 지표와 아래는 도식화 차트
어떤 정보를 보여줄지: 월별, 주별, 일별 매출 데이터
누가 사용할지:나(대표)

## Assistant

월별 매출 대시보드를 만들겠습니다. 먼저 디자인 시스템을 확인하겠습니다.

_[tool: list_files]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

디자인 시스템은 채용(jobs) UI 키트라 대시보드용 컴포넌트는 없지만, 토큰(색/타이포/간격)은 완비돼 있습니다. 이 토큰으로 Wanted 비주얼 언어에 맞춰 대표용 매출 대시보드를 만들겠습니다.

_[tool: update_todos]_

_[tool: update_todos]_

_[tool: dc_write]_

_[tool: show_html]_

_[tool: show_html]_

차트는 잘 렌더되는데 두 가지 문제가 보입니다: KPI 카드가 진입 애니메이션 때문에 캡처 시점에 안 보이고, 토글 버튼 텍스트가 세로로 줄바꿈됩니다. 수정하겠습니다.

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: show_html]_

KPI/범례 라벨이 좁아서 줄바꿈됩니다. nowrap 처리하고 목표 달성률 배지를 다른 지표와 통일하겠습니다.

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: update_todos]_

_[tool: multi_screenshot]_

html-to-image 캡처는 flex 너비를 부정확하게 그립니다. 실제 iframe으로 확인하겠습니다.

_[tool: show_html]_

실제 렌더는 깔끔합니다 — 줄바꿈은 캡처 도구 아티팩트였습니다. 이제 코드로만 가능한 트윅 3가지(차트 색상·목표선 표시·차트 형태)를 추가하겠습니다.

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_set_props]_

_[tool: set_project_title]_

_[tool: show_html]_

완성했습니다. 검증으로 넘기겠습니다.

_[tool: update_todos]_

_[tool: ready_for_verification]_

`colors_and_type.css` 링크가 로드에 실패(외부 폰트 @import 체인 타임아웃으로 추정)했습니다. 토큰을 인라인으로 넣어 의존성을 제거하고 폰트는 안정적인 CDN 링크로 직접 로드하겠습니다.

_[tool: dc_html_str_replace]_

폰트가 적용되는지 확인 후 검증으로 넘기겠습니다.

_[tool: show_html]_

깔끔하게 렌더됩니다. 검증 재실행합니다.

_[tool: ready_for_verification]_

Wanted Sans CDN 링크가 실패합니다 — 이 폰트는 로고 "W" 한 글자에만 쓰여서, 링크를 제거하고 Pretendard로 폴백시키겠습니다.

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Clean. 디자인 시스템 번들을 다시 로드해 adherence 경고도 해소하겠습니다(토큰은 인라인 유지 — 안정성).

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

완성했습니다. 대표용 **월별 매출 대시보드**입니다.

- **상단 지표 4종**: 이번 달 매출(₩2.38억), 주문 건수, 평균 객단가, 목표 달성률 — 각각 직전 기간 대비 증감 배지
- **아래 도식화 차트**: 매출 추이(목표선 포함 영역 차트) · 채널별 매출(도넛) · 상품별 매출(막대) · 주간 매출 상세(표)
- **일별/주별/월별 토글**: 상단 우측에서 전환하면 추이 차트와 지표가 해당 단위 데이터로 바뀝니다
- Wanted 디자인 시스템 색·타이포·카드 스타일(1px 보더 + 16px 라운드) 적용

트윅 패널에서 **차트 색상·목표선 표시·차트 형태(영역/막대)** 를 바꿀 수 있고, 지표 텍스트나 카드 색은 미리보기에서 직접 클릭해 편집할 수 있습니다.

데이터는 예시 수치입니다 — 실제 매출 숫자(엑셀/시트 등)를 주시면 그대로 반영하겠습니다.

