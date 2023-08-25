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
echo "The Fourth argument is $4."
echo "The Fivth argument is $5."

echo "seems all goood lets see"

export AWS_ACCESS_KEY_ID="$3"
export AWS_SECRET_ACCESS_KEY="$4"

aws --version
ls task-app-repo
# aws s3api list-buckets 

aws s3 sync task-app-repo/dist/ s3://"$1"
