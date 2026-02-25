# Backend

This directory contains all backend code for the HWS project.

## Structure

- `lambda/` - AWS Lambda functions
  - Contact form handler (AWS SES integration)
  - Add your Lambda functions here

- `api/` - API utilities and shared code
  - Shared types, interfaces
  - API helpers and utilities

## Deployment

Backend services are deployed to AWS. Each Lambda function should include:
- Handler code
- Dependencies (package.json or requirements.txt)
- IAM role configuration
- Environment variables documentation
