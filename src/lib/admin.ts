/** True when the admin panel can run: always in development, and in
 *  production once the GitHub App credentials are set (see ADMIN.md). */
export function isAdminConfigured() {
  if (process.env.NODE_ENV === "development") return true;
  return Boolean(
    process.env.KEYSTATIC_GITHUB_CLIENT_ID &&
      process.env.KEYSTATIC_GITHUB_CLIENT_SECRET &&
      process.env.KEYSTATIC_SECRET,
  );
}
