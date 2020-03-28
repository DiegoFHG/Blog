#!/usr/bin/sh
current_date=$(date +"%Y-%m-%d")
current_date_alternative=$(date +"%Y/%m/%d")
echo -e "---\ntitle: $1\ndate: ${current_date_alternative}\n---" > "_posts/${current_date}-$1.md"
