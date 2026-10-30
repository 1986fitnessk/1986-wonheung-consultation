# 1986 FITNESS 원흥점 상담 안내

센터 직원과 회원이 함께 보는 상담 페이지입니다.
회원권 관리 → 선택형 PT 5회 교육 → 웰니스 교육 주제 → 상담 정리 순서로 안내합니다.

## 구성
- `protocol-page/dist/index.html`: 상담 안내 내용
- `protocol-page/dist/style.css`: 반응형 화면
- `protocol-page/dist/app.js`: 교육 주제 전환
- `protocol-page/dist/assets/`: 설명용 캡처 및 AI 이미지

개인정보 입력·저장, 결제, 예약 연동은 없습니다. 가격과 실제 서비스 제공 조건은 상담 시 직원이 확인합니다. AI 이미지는 실제 센터나 회원 사진이 아닙니다.

## 로컬 확인
```sh
python3 -m http.server 4186 --bind 127.0.0.1 --directory protocol-page/dist
```

## 검증 및 배포
```sh
node --check protocol-page/dist/app.js
python3 scripts/check_site.py
# 변경 사항을 main에 커밋한 뒤 실행
sh scripts/deploy.sh
```
GitHub Pages는 `gh-pages` 브랜치 루트를 서비스합니다. 배포 명령은 소스를 main에 올리고 dist만 gh-pages에 게시합니다. GitHub CLI 인증과 저장소 쓰기 권한이 필요합니다.

검수용 캡처와 내부 기획서는 Git에서 제외합니다. 최종 브라우저 렌더링은 로컬 파일 접근 제한으로 재검증하지 못했으며 배포 시 파일 참조, JavaScript 구문, HTTP 응답을 확인합니다.
