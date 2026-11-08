import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — SRVN",
  description: "Terms of Use — SRVN Digital Inc.",
};

// The mobile app's Terms of Use links open this page — keep the /terms path
// stable. Section numbers come from the .legal CSS counter, so they stay in step
// with the "Section N" references in the text as long as sections keep their order.
export default function Terms() {
  return (
    <div className="container">
      <nav>
        <Link className="nav-logo" href="/">
          SRVN
        </Link>
        <Link className="back-link" href="/">
          ← Back
        </Link>
      </nav>

      <article className="legal">
        <header className="legal-header">
          <h1>SRVN Terms of Use</h1>
          <p className="legal-meta">
            Effective date: 1 November 2026 · SRVN Digital Inc. · <Link href="/terms/fr" lang="fr-CA">Français</Link>
          </p>
        </header>

        <section className="legal-intro">
          <p>Welcome to SRVN, also known as Srvnapp. These Terms of Use (“Terms”) govern your access to and use of the SRVN mobile application, <Link href="/">srvnapp.com</Link>, and associated content and services (collectively, the “Services”). The Services are provided by SRVN Digital Inc., a federally incorporated Canadian corporation (“SRVN,” “we,” “us,” or “our”).</p>
          <p>Please read these Terms carefully. By creating an account, accepting these Terms in the app, or using an account-based feature, you agree to be bound by them. If you do not agree, do not create an account or use those features. These Terms operate alongside our <Link href="/privacy">Privacy Policy</Link>.</p>
        </section>

        <section>
          <h2>Eligibility: users must be 18 or older</h2>
          <p>You must be at least 18 years old to create an account and use SRVN’s account-based Services. You must provide truthful account and date-of-birth information and must have the legal capacity required to enter into these Terms under applicable law. You may not use another person’s identity or a third-party sign-in service to evade SRVN’s age requirements. We may suspend or close accounts that do not meet our eligibility rules.</p>
        </section>

        <section>
          <h2>Your account</h2>
          <p>You may register using supported email, phone or third-party sign-in options, including Google or Apple where available. You are responsible for accurate account information, maintaining the confidentiality of credentials, and activities occurring through your account, except where the law provides otherwise. You must not share credentials, impersonate another person or access an account without authorization.</p>
          <p>Notify us promptly at <a href="mailto:support@srvnapp.com">support@srvnapp.com</a> if you suspect unauthorized account access. We may use reasonable verification measures to help protect your account and comply with legal requirements.</p>
        </section>

        <section>
          <h2>What SRVN provides</h2>
          <p>SRVN helps users explore restaurants, discover dishes and share dining experiences. Features include restaurant search, AI-assisted discovery, ratings and reviews, photographs and videos of dishes, social profiles, follows, likes, comments, saved restaurants, notifications and content sharing. Features can vary by device, location, account state and availability.</p>
          <p>SRVN is a discovery and community service. It does not confirm that a reviewer actually visited a restaurant, and reviews reflect contributors’ opinions. Restaurant details, opening hours, menus, prices, dietary information and availability may change. Check important details directly with the restaurant before visiting or relying on them.</p>
          <p>Unless SRVN clearly states otherwise in a separate offer, SRVN does not act as the restaurant, take restaurant reservations, sell meals or provide food delivery through these Services.</p>
        </section>

        <section>
          <h2>Public profiles and social interactions</h2>
          <p>SRVN is a social platform. Your name, username, profile photo, reviews and other contributions may be visible to other users. Instagram or TikTok handles that you choose to add can also be visible. Content shared through SRVN may be accessible to recipients of shared links, subject to Service access requirements and link validity.</p>
          <p>You are responsible for deciding what to publish. Do not share personal contact details, someone else’s private information, confidential material or information you are not authorized to disclose. We cannot prevent other users from screenshotting, copying or circulating information they can legitimately view.</p>
          <p>Following another account does not imply endorsement, friendship, identity verification or a professional relationship. You may block accounts using the available controls; blocking does not erase copies of content already obtained by others.</p>
        </section>

        <section>
          <h2>Your reviews, photos, videos and other contributions</h2>
          <p>You may submit written reviews, ratings, dish names and prices, photographs, videos, comments, profile information and other material (“User Content”). You are responsible for your User Content and must have all rights, permissions and consents necessary to publish it. For example, do not upload media that infringes another person’s copyright, discloses confidential information or depicts identifiable people in a manner that violates their rights.</p>
          <p>Reviews should reflect genuine opinions and be truthful about your experience or basis for the review. You must not claim to have visited a restaurant if you have not done so, fabricate experiences, or accept undisclosed compensation to influence reviews. Contributor-supplied dish prices, ratings and descriptions are not guaranteed to match a restaurant’s current menu or offerings.</p>
          <p>You retain ownership of the original content you create, subject to any third-party rights. SRVN does not acquire ownership simply because you upload it.</p>
        </section>

        <section>
          <h2>Licence to operate the Services</h2>
          <p>By submitting User Content, you grant SRVN a non-exclusive, worldwide, royalty-free licence to store, host, reproduce, adapt for technical display, format, distribute, display and make available that content for the purpose of operating, providing, protecting and promoting the Services. This includes displaying reviews and media in feeds, restaurant pages, search results, notifications and shared links. You also authorize SRVN to permit service providers to carry out those functions on our behalf.</p>
          <p>This licence continues while your content is available through the Services and ends when the relevant content is removed, except for content and rights that survive as described below, technical copies being removed through normal processes, and use permitted or required by law.</p>
          <p>Dish-content retention: When you contribute a dish name and photograph of a dish, you additionally authorize SRVN to retain, host, reproduce and display that dish name and dish photograph as standalone restaurant or dish-reference content indefinitely, including after you delete your account. That continuing licence does not authorize us to retain your deleted account as an active profile or to represent that you continue to endorse the content. It remains subject to applicable privacy, copyright and other laws and to requests we are legally required to honor. If your photograph includes another identifiable individual, you must have a lawful basis to submit and share it.</p>
          <p>You may remove your own reviews and other content through available controls, subject to the standalone dish-content exception and legal requirements explained here and in our Privacy Policy.</p>
        </section>

        <section>
          <h2>Community conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Threaten, harass, bully, stalk, intimidate or discriminate against other people, or publish hateful or sexually exploitative material.</li>
            <li>Share illegal content, violent threats, sexual content involving minors or material that endangers another person.</li>
            <li>Impersonate others, publish another person’s private information without authorization, or misrepresent an affiliation with a restaurant, company or individual.</li>
            <li>Post fabricated, spam, misleading, manipulated or undisclosed paid reviews, or use automated means to distort ratings and engagement.</li>
            <li>Infringe copyright, trademarks, privacy, publicity or other rights.</li>
            <li>Upload malware, attempt unauthorized access, circumvent technical safeguards, or disrupt the Services.</li>
            <li>Scrape, harvest or systematically extract user information or platform data without SRVN’s permission or other lawful authorization.</li>
            <li>Use the Services to send unsolicited promotions, scams, phishing messages or other abusive communications.</li>
            <li>Misuse reporting tools, including knowingly submitting false reports to silence other users.</li>
          </ul>
          <p>These rules apply to profiles, reviews, photographs, videos, comments and other activity. We may apply additional contextual rules where necessary to protect users and comply with law.</p>
        </section>

        <section>
          <h2>Reporting and moderation</h2>
          <p>You can report reviews or comments that you believe violate our rules. When a report is accepted by the reporting system, the reported content is immediately hidden from public view while the report remains open. This interim action is not a finding that the content violates our rules.</p>
          <p>A moderator reviews the report and may restore the content, remove it, restrict its visibility, or take an appropriate account-level action. We may assess abuse of the reporting system, including coordinated or malicious reporting. Decisions may consider context, safety, applicable law, repeat violations and other relevant factors. We may remove unlawful or harmful material without waiting for a user report.</p>
          <p>To ask about a decision, report a problem with content or submit a complaint, use <Link href="/support">srvnapp.com/support</Link> or email <a href="mailto:support@srvnapp.com">support@srvnapp.com</a>. Submitting a report does not guarantee a particular outcome or a particular response time. Where feasible and appropriate, we may notify affected users about material moderation outcomes.</p>
        </section>

        <section>
          <h2>AI-assisted recommendations</h2>
          <p>AI Discovery can produce restaurant suggestions and explanations based on information available to SRVN and the request you submit. These outputs may be incomplete, inaccurate, outdated or unsuitable for a particular situation. They are not guarantees concerning a restaurant’s opening hours, availability, food safety, ingredients, allergies, accessibility or pricing.</p>
          <p>You are responsible for verifying information that matters to you, particularly allergen, dietary, medical and safety information, directly with the restaurant or another reliable source. Do not enter sensitive personal information into discovery prompts. You must not use AI-generated information to misrepresent that SRVN or a restaurant has verified a claim.</p>
        </section>

        <section>
          <h2>Third-party information and links</h2>
          <p>SRVN may display information from restaurants, mapping services and other third-party sources alongside community content. These sources can contain errors or omissions. Links may take you to third-party sites, navigation apps or social-media profiles. Those services are not controlled by SRVN and have their own terms, privacy practices and policies.</p>
          <p>Unless expressly stated, an appearance on SRVN does not mean a restaurant sponsors or endorses us or that we have verified all information about it. External reviews and AI-generated summaries are distinct from SRVN community contributions.</p>
        </section>

        <section>
          <h2>Location, permissions and notifications</h2>
          <p>Location access is optional: you may choose a city when you do not grant access to your device location. Features requiring location, photo-library or notification permission may work differently when permission is declined or withdrawn. Device settings generally control permission to receive push notifications. SRVN may send account, security, support and selected activity notifications as described in our Privacy Policy.</p>
        </section>

        <section>
          <h2>SRVN intellectual property</h2>
          <p>Except for User Content and third-party material, SRVN and its licensors own the Services, including their software, design, branding, trademarks, interface and original content. We grant you a limited, personal, non-exclusive, non-transferable and revocable licence to use the Services for their intended purpose, subject to these Terms.</p>
          <p>You may not copy, modify, resell, reverse-engineer or redistribute SRVN software or proprietary content except as permitted by applicable law or with our prior authorization.</p>
        </section>

        <section>
          <h2>Service availability and changes</h2>
          <p>We may improve, change, suspend or discontinue features to maintain security, functionality, legal compliance and service quality. We do not guarantee that every restaurant, dish or feature will be available at all times or in every location. You are responsible for your own internet and mobile-data charges.</p>
        </section>

        <section>
          <h2>Suspension and termination</h2>
          <p>We may restrict, suspend or close an account when reasonably necessary because of suspected security threats, fraudulent activity, repeated rule violations, ineligibility, unlawful conduct or a serious risk to users or the Services. Where appropriate, we may take proportionate measures and offer an avenue to raise concerns through support. Nothing in these Terms prevents us from acting promptly to protect people or comply with law.</p>
          <p>You may stop using SRVN at any time and request deletion of your account through the in-app deletion process. Deleting your account ends your permission to access it. The treatment of account-linked information and retained dish names and photographs is described in our <Link href="/privacy">Privacy Policy</Link> and Section 6 of these Terms.</p>
        </section>

        <section>
          <h2>Disclaimers</h2>
          <p>We aim to make SRVN useful and reliable, but the Services are provided on an “as available” basis. To the maximum extent permitted by applicable law, we do not promise uninterrupted operation, error-free information, or that User Content, third-party restaurant information or AI-generated suggestions will always be accurate, complete or suitable for a specific purpose.</p>
          <p>Nothing in these Terms excludes warranties, guarantees, remedies or other rights that cannot lawfully be excluded under applicable consumer protection or other laws.</p>
        </section>

        <section>
          <h2>Limits on liability</h2>
          <p>To the extent permitted by applicable law, SRVN Digital Inc. is not responsible for indirect or consequential losses arising from use of the Services, such as lost opportunities or lost profits, where such exclusions are legally permitted. Nothing in these Terms limits liability for fraud, intentional wrongdoing, liability that cannot lawfully be limited, or your non-waivable rights under privacy, consumer protection and other applicable laws.</p>
          <p>The Services do not replace advice from restaurants or relevant professionals concerning food safety, allergies, medical needs or other matters involving health and safety.</p>
        </section>

        <section>
          <h2>Your responsibility for claims arising from your conduct</h2>
          <p>To the extent permitted by law, you are responsible for losses or third-party claims caused by your unlawful User Content, deliberate misuse of the Services or infringement of another person’s rights. This section does not require you to indemnify SRVN for its own unlawful conduct or negligence, and does not override applicable consumer protections.</p>
        </section>

        <section>
          <h2>Privacy</h2>
          <p>Our <Link href="/privacy">Privacy Policy</Link> explains how we handle personal information, where it is processed, the public nature of contributions, the account-deletion process and the continuing treatment of dish names and dish photographs. Please review it before publishing personal information or media.</p>
        </section>

        <section>
          <h2>Updates to these Terms</h2>
          <p>We may revise these Terms as the Services or legal requirements change. We will publish the new effective date and provide further notice where required. If a change materially affects your rights, we will follow the notice and consent requirements that apply. Continuing to use the Services after revised Terms become effective constitutes acceptance only where permitted by applicable law.</p>
        </section>

        <section>
          <h2>Governing law and disputes</h2>
          <p>These Terms are generally governed by the laws of Ontario and the federal laws of Canada applicable there, without applying conflict-of-law rules that would defeat mandatory legal rights. Courts in Ontario may hear disputes concerning these Terms, except where mandatory consumer protection, privacy or procedural laws give you the right to bring a claim elsewhere or prohibit that restriction. In particular, these Terms do not remove mandatory rights available to people in Quebec, other Canadian provinces or Nigeria.</p>
          <p>Before beginning legal proceedings, we encourage you to contact <a href="mailto:support@srvnapp.com">support@srvnapp.com</a> so we can attempt to resolve the concern. This does not prevent you from contacting regulators or using any remedy available under law.</p>
        </section>

        <section>
          <h2>General provisions</h2>
          <p>If any term is found unenforceable, the remaining terms continue to apply to the extent lawful. Our failure to enforce a provision immediately does not waive our right to enforce it later. You may not transfer your account or rights under these Terms without our consent. We may transfer our rights and obligations in connection with a genuine corporate reorganization or transfer of the Services, subject to applicable law. These Terms and the policies expressly incorporated into them form the agreement concerning your use of the Services.</p>
        </section>

        <section>
          <h2>Contact details</h2>
          <p>
            SRVN Digital Inc.<br />
            108 Peter St, Suite 1020<br />
            Toronto, Ontario M5V 0W2<br />
            Canada<br />
            Email: <a href="mailto:support@srvnapp.com">support@srvnapp.com</a><br />
            Support and complaints: <Link href="/support">https://srvnapp.com/support</Link>
          </p>
        </section>
      </article>

      <footer>
        &copy; 2026 SRVN Digital Inc. &nbsp;&middot;&nbsp;
        <Link href="/privacy">Privacy Policy</Link> &nbsp;&middot;&nbsp;
        <Link href="/support">Support</Link>
      </footer>
    </div>
  );
}
