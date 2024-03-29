// utils/auth.js
export function isAuthenticated() {
  try {
    // Attempt to retrieve the auth token from localStorage
    const token = localStorage.getItem("authToken");

    // If the token exists, consider the user authenticated
    return !!token;
  } catch (error) {
    // Handle any errors that occur during token retrieval or validation
    console.error("Error checking authentication:", error);
    return false; // Treat errors as a sign of non-authentication
  }
}

// Placeholder function, always returns true
function isValidToken(token) {
  return true;
}
