const disposableDomains = [
  "tempmail.com",
  "throwawaymail.com",
  "mailinator.com",
  "guerrillamail.com",
  "sharklasers.com",
  "spam4.me",
  "yopmail.com",
  // Add more disposable email domains as needed
];

const validateEmail = (email) => {
  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      reason: "Invalid email format",
    };
  }

  // Check for disposable email domains
  const domain = email.split("@")[1].toLowerCase();
  if (disposableDomains.includes(domain)) {
    return {
      isValid: false,
      reason: "Disposable email addresses are not allowed",
    };
  }

  // Additional checks
  if (email.length > 254) {
    // RFC 5321
    return {
      isValid: false,
      reason: "Email is too long",
    };
  }

  return {
    isValid: true,
    reason: null,
  };
};

module.exports = validateEmail;
