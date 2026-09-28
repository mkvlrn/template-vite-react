#!/usr/bin/env bash
#MISE description="Sync package manager dependencies"

mise install
mise prune -y
mise exec -- pnpm install --frozen-lockfile "$@"
