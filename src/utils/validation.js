/**
 * Email validator
 * @param {string} email 
 * @returns {boolean}
 */
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Password validator (min 6 chars, at least one number and one letter)
 * @param {string} password 
 * @returns {boolean}
 */
const isValidPassword = (password) => {
  if (password.length < 6) return false;
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  return hasLetter && hasNumber;
};

module.exports = {
  isValidEmail,
  isValidPassword
};
