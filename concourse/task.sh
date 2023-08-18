#!/bin/bash

# if [-z "${SOURCE_FOLDER}"];then
# echo "Missing source folder variable in resource configuration"
# exit 1
# fi

# if [-z "${DESTINATION_FOLDER}"];then
# echo "Missing DESTINATION_FOLDER folder variable in resource configuration"
# exit 1
# fi

# if [-z "${S3_BUCKET}"];then
# echo "Missing S3_BUCKET folder variable in resource configuration"
# exit 1
# fi
echo "The file name: $0."
echo "The first argument is $1."
echo "The second argument is $2."
echo "The third argument is $3."

echo "seems all goood lets see"

aws --version
ls task-app-repo