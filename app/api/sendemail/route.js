const nodemailer = require("nodemailer");

export async function POST(request) {
  // Setup nodemailer
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.PUBLIC_NEXT_EMAIL_USER,
      pass: process.env.PUBLIC_NEXT_EMAIL_PASS,
    },
  });

  // Get the formData object
  const formData = await request.formData();

  // Extract the values from the formData object
  const webDesign = formData.get("web-design");
  const webDevelopment = formData.get("web-development");
  const domainAndHostingSetup = formData.get("domain-and-hosting-setup");
  const analyticsIntegration = formData.get("analytics-integration");
  const ecommerceIntegration = formData.get("ecommerce-integration");
  const maintenanceSupport = formData.get("maintenance-support");
  const budget = formData.get("budget-option");
  const customerName = formData.get("name");
  const customerEmail = formData.get("email");
  const emailMessage = formData.get("email-message");

  // The body of the email
  const message =
    "<b>Customer Name:</b> " +
    customerName +
    "</br><b>Customer Email:</b> " +
    customerEmail +
    "</br><b>Email Message:</b> " +
    emailMessage +
    "</br>\n<b>Services:</b> " +
    webDesign +
    " " +
    webDevelopment +
    " " +
    domainAndHostingSetup +
    " " +
    analyticsIntegration +
    " " +
    ecommerceIntegration +
    " " +
    maintenanceSupport +
    " " +
    budget;

  // send mail with defined transport object
  await transporter.sendMail({
    from: process.env.PUBLIC_NEXT_EMAIL_USER, // sender address
    to: process.env.PUBLIC_NEXT_EMAIL_USER, // list of receivers
    subject: "Website Proposal", // Subject line
    html: message, // html body
  });

  return Response.json({ message: "Email sent." });
}
