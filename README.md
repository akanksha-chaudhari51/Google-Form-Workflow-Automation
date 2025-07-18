# Google Form Workflow Automation

## 🧾 Project Overview

This project delivers a fully automated, serverless communication and reporting system built on Google Workspace. It transforms Google Form submissions into actionable workflows with real-time document generation, multi-channel communication, and traceable activity logs — without any external server or code deployment.

> Perfect for: Support ticketing, academic workflows, HR onboarding, certificate distribution, or internal admin operations.

---

## 🔧 Tech Stack

| Tool               | Purpose                                  |
|--------------------|------------------------------------------|
| **Google Forms**   | Input collection interface               |
| **Google Sheets**  | Real-time data log and monitoring        |
| **Apps Script**    | Backend logic, decision tree & triggers  |
| **Google Docs**    | Templated dynamic PDF generation         |
| **Gmail API**      | Personalized PDF email delivery          |
| **WhatsApp Link**  | Batch-specific group chat integration    |

---

## 📂 Key Features

- **End-to-End No-Code Automation** — Fully functional with just Google Workspace  
- **Smart PDF Creation** — Dynamic documents from form fields using Google Docs  
- **Automated Gmail Integration** — Instant delivery of PDFs with tailored messages  
- **Batch-Specific WhatsApp Linking** — Context-aware group assignment  
- **Conditional Branching** — Logic-driven flows based on input like "Issue Type"  
- **Live Activity Logging** — Transparent, audit-ready records in Sheets  
- **100% Serverless & Secure** — No external servers, APIs, or deployments  
- **Scalable & Deployable** — Easily reused across teams or organizations

---

## 📸 Screenshots

###  Google Form Preview
<img src="assets/Google%20Form.png" alt="Google Form Screenshot" height="1000" width="500"/>

###  Sample Output
📄 [View Sample Output1 (PDF)](assets/Sample%20Output1.pdf)

📄 [View Sample Output2 (PDF)](assets/Sample%20Output2.pdf)

---

## 📊 Workflow Diagram

```mermaid
graph TD
A[User submits Google Form] --> B[Data recorded in Google Sheet]
B --> C[Apps Script Trigger Fires]
C --> D[Generate PDF from Google Doc]
C --> E[Get WhatsApp Link based on Batch]
C --> F[Send Email with PDF and WhatsApp Link]
F --> G[Log Email Sent Status in Sheet]
