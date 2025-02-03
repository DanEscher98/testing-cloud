#!/usr/bin/bash

#set -e  # Exit on error
#trap 'rm -f ga_key.json' EXIT  # Delete key after script

PROJECT_ID=$1
SERVICE_ACCOUNT="github-action-sa"


declare -a SERVICES=("cloudbuild.googleapis.com" "run.googleapis.com" "containerregistry.googleapis.com")
for service in ${SERVICES[@]}; do
  gcloud services enable "$service"
done
 
gcloud iam service-accounts create $SERVICE_ACCOUNT

declare -a ROLES=(
  "run.admin"
  "storage.admin"
  "iam.serviceAccountUser"
  "artifactregistry.admin"
  "cloudbuild.builds.builder"
  "cloudbuild.builds.editor"   # Required for Cloud Build
  "logging.logWriter"
  "logging.viewer"
  "cloudbuild.builds.viewer"
)

for role in "${ROLES[@]}"; do
  gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$SERVICE_ACCOUNT@$PROJECT_ID.iam.gserviceaccount.com" \
    --role="roles/$role"
done

gcloud iam service-accounts keys create ga_key.json \
  --iam-account="$SERVICE_ACCOUNT@$PROJECT_ID.iam.gserviceaccount.com"

gh variable set GCP_PROJECT_ID -b $PROJECT_ID
gh secret set GCP_SA_KEY -a actions < ga_key.json
