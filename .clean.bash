#!/usr/bin/env bash

# set options
# fail on any failed command and undefined variables
set -eu
# pipes fail if any command in that pipeline fails
set -o pipefail

# save global ARGS
ARGS="$@"

# display usage and help information for this script
display_help() {
  cat <<EOF
Usage: clean [-hf]
Delete build files

  -h display this help
  -f full clean up including 'node_modules'
EOF
}

# check if current PWD is a project root
is_project_root() {
  [ -f "package.json" -a -f ".gitignore" ]
}


# performs the cleanup
cleanup() {
  if ! is_project_root; then
    echo "ERROR: $PWD is not a project root"
    exit 3
  fi
  for dir in $@; do
    echo "deleting: $dir"
    rm -rf "$dir"
  done
}

# main loop
run() {
  targets=(
    "build"
  )
  while getopts :hf opt; do
    echo "opt: $opt"
    case $opt in
    h)
      display_help
      return 0 ;;
    f)
      targets+=("node_modules")
      cleanup "${targets[@]}"
      return 0 ;;
    ?)
      echo "ERROR: Unknown option -$OPTARG"
      return 1 
    esac
  done
}

run "${ARGS[@]}"