const integrations = {
  isSanityEnabled: Boolean(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
      process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE,
  ),
  isStripeEnabled: Boolean(process.env.STRIPE_SECRET_KEY && process.env.SITE_URL),
  isOpenAIEnabled: Boolean(process.env.OPENAI_API_KEY),
  isMailchimpEnabled: Boolean(process.env.MAILCHIMP_API_KEY),
  isAuthEnabled: Boolean(
    process.env.GITHUB_CLIENT_ID &&
      process.env.GITHUB_CLIENT_SECRET &&
      process.env.GOOGLE_CLIENT_ID &&
      process.env.GOOGLE_CLIENT_SECRET &&
      process.env.NEXTAUTH_SECRET,
  ),
};

const messages = {
  sanity: (
    <div style={{ whiteSpace: "pre-wrap" }}>
      Sanity is not enabled. Follow the{" "}
      <a
        href="https://nextjstemplates.com/docs/enableintegration"
        className="text-primary underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        documentation
      </a>{" "}
      to enable it.
    </div>
  ),
  stripe: (
    <div style={{ whiteSpace: "pre-wrap" }}>
      Stripe is not enabled. Follow the{" "}
      <a
        href="https://nextjstemplates.com/docs/enableintegration"
        className="text-primary underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        documentation
      </a>{" "}
      to enable it.
    </div>
  ),
  opanAi: (
    <div style={{ whiteSpace: "pre-wrap" }}>
      OpenAI is not enabled. Follow the{" "}
      <a
        href="https://nextjstemplates.com/docs/enableintegration"
        className="text-primary underline"
      >
        documentation
      </a>{" "}
      to enable it.
    </div>
  ),
  mailchimp: (
    <div style={{ whiteSpace: "pre-wrap" }}>
      Mailchimp is not enabled. Follow the {""}
      <a
        href="https://nextjstemplates.com/docs/enableintegration"
        className="text-primary underline"
      >
        documentation
      </a>{" "}
      to enable it.
    </div>
  ),
  auth: (
    <div style={{ whiteSpace: "pre-wrap" }}>
      Auth is not enabled. Follow the{" "}
      <a
        href="https://nextjstemplates.com/docs/enableintegration"
        className="text-primary underline"
      >
        documentation
      </a>{" "}
      to enable it.
    </div>
  ),

  // Add more messages here
};

export { integrations, messages };
