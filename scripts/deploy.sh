#!/bin/sh
set -eu
cd "$(dirname "$0")/.."
node --check protocol-page/dist/app.js
python3 scripts/check_site.py
if [ -n "$(git status --porcelain)" ]; then
  echo '먼저 변경 사항을 커밋해 주세요.' >&2
  exit 1
fi
git push origin main
git subtree push --prefix protocol-page/dist origin gh-pages
