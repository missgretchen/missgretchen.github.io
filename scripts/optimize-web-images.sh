#!/usr/bin/env bash
# Resize large JPEGs in src/assets/projects for web (macOS sips).
# Run from repo root: bash scripts/optimize-web-images.sh
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PROJECTS="$ROOT/src/assets/projects"

echo "== Max dimension 1920px (longest edge) for JPG/JPEG wider than 1920px =="
while IFS= read -r -d '' f; do
  w=$(sips -g pixelWidth "$f" 2>/dev/null | awk '/pixelWidth/ {print $2}')
  if [ -n "${w:-}" ] && [ "${w:-0}" -gt 1920 ] 2>/dev/null; then
    echo "  $f"
    sips -Z 1920 "$f" --out "${f}.sips-tmp" >/dev/null && mv "${f}.sips-tmp" "$f"
  fi
done < <(find "$PROJECTS" -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) -print0)

echo "== Re-encode JPEGs over 800KB (sips formatOptions high) =="
while IFS= read -r -d '' f; do
  size=$(stat -f%z "$f")
  if [ "$size" -gt 800000 ]; then
    echo "  $f"
    sips -s format jpeg -s formatOptions high "$f" --out "${f}.jq" >/dev/null && mv "${f}.jq" "$f"
  fi
done < <(find "$PROJECTS" -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) -size +800k -print0)

echo "Done."
