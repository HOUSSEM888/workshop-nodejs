function generateRandomPassword(length=8) {
  // Defining all characters that can be used
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]<>?";

  let password = "";

  for (let i = 0; i < length; i++) {
    // Generating a random index
    const randomIndex = Math.floor(Math.random() * charset.length);
    // Getting the character at that index
    const randomChar = charset.charAt(randomIndex);
    // Appending the character to the password string
    password += randomChar;
  }

  return password;
}


module.exports = {generateRandomPassword}
