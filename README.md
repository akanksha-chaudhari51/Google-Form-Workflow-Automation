# Google Form Workflow Automation

## 🧾 Project Overview

A serverless, no-code automation system built on Google Workspace, transforming Google Form submissions into dynamic workflows with real-time PDF generation, email delivery, and WhatsApp integration. Ideal for support ticketing, HR onboarding, certificate distribution, and more.

## 🔧 Tech Stack

| Tool               | Purpose                                  |
|--------------------|------------------------------------------|
| **Google Forms**   | Input collection interface               |
| **Google Sheets**  | Real-time data log and monitoring        |
| **Apps Script**    | Backend logic, decision tree & triggers  |
| **Google Docs**    | Templated dynamic PDF generation         |
| **Gmail API**      | Personalized PDF email delivery          |
| **WhatsApp Link**  | Batch-specific group chat integration    |

## 📂 Key Features

- No-code, serverless automation
- Dynamic PDF generation from form data
- Instant Gmail delivery with tailored messages
- Batch-specific WhatsApp group links
- Conditional logic for custom workflows
- Live, audit-ready activity logs in Sheets
- Scalable and reusable across teams

## 📸 Screenshots

###  Google Form Preview

<img src="assets/Google%20Form.png" alt="Google Form Screenshot" height="800" width="500"/>

###  Sample Output

- [View Sample Output1 (PDF)](assets/Sample%20Output1.pdf)

- [View Sample Output2 (PDF)](assets/Sample%20Output2.pdf)

## 📊 Workflow Diagram

```mermaid
graph TD
A[User submits Google Form] --> B[Data recorded in Google Sheet]
B --> C[Apps Script Trigger Fires]
C --> D[Generate PDF from Google Doc]
C --> E[Get WhatsApp Link based on Batch]
C --> F[Send Email with PDF and WhatsApp Link]
F --> G[Log Email Sent Status in Sheet]
