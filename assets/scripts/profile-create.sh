#!/bin/bash

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/profiles"
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
      "profile": {
        "user_name":  "'"${NAME}"'",
        "about_me": "'"${ABOUT}"'"
      }
  }'

  # data output from curl doesn't have a trailing newline
  echo

  # allowed updates
  # --data '{
  #     "recipe": {
  #       "location": "",
  #       "comment": ""
  #     }
  # }'
