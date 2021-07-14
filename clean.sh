#!/usr/bin/env sh

# set options
# fail on any failed command and undefined variables
set -eu

# check if current PWD is a project root
is_project_root() {
  [ -f "package.json" -a -f ".gitignore" ]
}

# display usage and help information for this script
display_help() {
  cat <<EOF
Usage: clean [-hf]
Delete build files

  -h display this help
  -f full clean up including 'node_modules'
EOF
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
  node_flag=
  command="clean"
  while getopts :hf opt; do
    case $opt in
    h)
      command="help" ;;
    f)
      if [ ! "$command" = "help" ]; then
        command="clean"
        node_flag=1
      fi ;;
    ?)
      echo -e "ERROR: Unvalid option -${opt}\n"
      display_help
      exit 1
    esac
  done

  case $command in
  help)
    display_help ;;
  clean)
    # use @ as array of deletion targets
    if [ -n "$node_flag" ]; then
      set -- "build/"
    else
      set -- "build/ node_modules/"
    fi
    cleanup "$@" ;;
  ?)
    echo "ERROR: Unvalid command '$command'"
    exit 2
  esac
}

run