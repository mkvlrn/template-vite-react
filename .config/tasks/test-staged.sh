#!/usr/bin/env bash
#MISE description="Run Vitest on staged files"

mise exec -- vitest related --bail=1 --reporter=github-actions "$@"
