#!/usr/bin/env bash
#MISE description="Run Vitest on staged files"

set -euo pipefail

mise exec -- vitest related --bail=1 --reporter=github-actions "$@"
