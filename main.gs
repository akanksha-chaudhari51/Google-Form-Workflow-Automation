function onFormSubmit() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Form Responses 1");
  const data = sheet.getDataRange().getValues();
  const lastRowIndex = data.length - 1;
  const lastRow = data[lastRowIndex];

  const [timestamp, name, email, domain, batchname, issuetype, status] = lastRow;

  if (status === "Sent") return;

  if (!email || !name || !issuetype) return;

  const batchKey = (batchname || "").toLowerCase().trim();

  const whatsappLinks = {
    "batch 1": "https://chat.whatsapp.com/HNhmNkB7U0KH5xTCXtjRNo",
    "batch 2": "https://chat.whatsapp.com/KZIGqR1tzEPBAWm2WWFdJt"
  };

  const templates = {
    "Name Correction": "1FQr7NEOyBmWWIiJqu7xnhgGOJDdC8MEUFGXIXUN8hQs",
    "Offer Letter Not Received": "1CY7dKn6yCJC8vAjMk8zCUS8RDLf9ZYz6sS-CM1fAdEc",
    "Domain Change": "1FQr7NEOyBmWWIiJqu7xnhgGOJDdC8MEUFGXIXUN8hQs"
  };

  const folderId = "1gGO_eyaKOl6EP0ZAMKWbwsnr3AN40HWT";
  const folder = DriveApp.getFolderById(folderId);

  const templateId = templates[issuetype];
  const templateFile = DriveApp.getFileById(templateId);
  const copy = templateFile.makeCopy(`Generated-${issuetype}-${name}`, folder);
  const doc = DocumentApp.openById(copy.getId());
  const body = doc.getBody();

  body.replaceText("<<name>>", name);
  body.replaceText("<<domain>>", domain);
  doc.saveAndClose();

  const pdf = copy.getAs(MimeType.PDF);
  const whatsappLink = whatsappLinks[batchKey] || "#";

  const subject = `Technohacks Internship - ${issuetype}`;
  const htmlMessage = `
    Hi ${name},<br><br>
    We have attached your document for the issue: <strong>${issuetype}</strong>.<br><br>
    <a href="${whatsappLink}" target="_blank" style="
      display: inline-block;
      padding: 10px 20px;
      background-color: #25D366;
      color: white;
      text-decoration: none;
      border-radius: 5px;">
      Join WhatsApp Group
    </a><br><br>
    Regards,<br>
    <strong>Technohacks Solutions Pvt. Ltd.</strong>
  `;

  GmailApp.sendEmail(email, subject, "", {
    htmlBody: htmlMessage,
    attachments: [pdf],
    name: "Technohacks Solutions"
  });

  sheet.getRange(lastRowIndex + 1, 7).setValue("Sent"); 
}
