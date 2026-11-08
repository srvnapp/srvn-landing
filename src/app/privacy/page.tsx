import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — SRVN",
  description: "How SRVN collects, uses, and protects your information.",
};

// This is the page App Store Connect's Privacy Policy URL points at, and the
// page the mobile app's in-app "View full Privacy Policy" link opens — keep the
// /privacy path stable. Section numbers come from the .legal CSS counter, so they
// stay in step with the "Section N" references in the text.
export default function Privacy() {
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
          <h1>SRVN Privacy Policy</h1>
          <p className="legal-meta">
            Effective date: 1 November 2026 · SRVN Digital Inc. · <Link href="/privacy/fr" lang="fr-CA">Français</Link>
          </p>
        </header>

        <section className="legal-intro">
          <p>SRVN (“SRVN,” “Srvnapp,” “we,” “us,” or “our”) is a restaurant and dining-discovery service operated by SRVN Digital Inc. This Privacy Policy explains how we collect, use, disclose, retain, and protect personal information when you use the SRVN mobile application, our website at <Link href="/">srvnapp.com</Link>, our support services, and related features (collectively, the “Services”).</p>
          <p>At a glance: SRVN is for people aged 18 or older. Profiles and reviews are part of a social community and are visible to other users. You can choose whether to add external social-media handles and whether to allow device location access. Our core backend and database are hosted in the United States. When you delete your account, we remove account-linked information from active systems, but dish names and photographs of dishes may continue to be available as standalone restaurant content. Please read the details below.</p>
        </section>

        <section>
          <h2>Who is responsible for your information</h2>
          <p>SRVN Digital Inc. is responsible for personal information processed for the Services. SRVN Digital Inc. is a federally incorporated Canadian corporation with its registered office at 108 Peter St, Suite 1020, Toronto, Ontario M5V 0W2, Canada.</p>
          <p>For privacy questions, requests, or complaints, contact <a href="mailto:support@srvnapp.com">support@srvnapp.com</a> or use our <Link href="/support">support form</Link>. Privacy-related messages submitted through these channels are directed to SRVN for handling.</p>
        </section>

        <section>
          <h2>Information we collect</h2>
          <p>We collect information that you provide, information generated through your use of the Services, and limited information from connected services.</p>
          <h3>Account and identity information</h3>
          <p>This may include your name, username, email address, telephone number, date of birth, profile photograph, account preferences, selected cuisines, chosen city, authentication details, account identifiers, and records of your acceptance of our Terms and Privacy Policy. Your date of birth is used to assess eligibility and is not displayed on your public profile.</p>
          <p>If you sign in with Google or Apple, we receive the account information and authentication identifiers made available through that sign-in method, according to the choices and settings provided by the identity provider. We do not receive your Google or Apple account password.</p>
          <h3>Content you create and social activity</h3>
          <p>We process the restaurant and dish reviews you post; any ratings, written descriptions, dish names or prices you supply; photographs and videos you upload; comments and replies; likes; follows, followers and blocks; saved restaurants; shared-content activity; and content reports. If you add Instagram or TikTok handles or links to your profile, we process and display them as explained below.</p>
          <p>Your posts may reveal preferences, dining experiences, or other information about you. Please do not include private information about yourself or someone else that you do not want disclosed.</p>
          <h3>Location and search information</h3>
          <p>When you allow location access, we use device location information to show relevant restaurants, map context, directions and location-based discovery. Device location may be precise, depending on the permission you grant and your device settings. You may instead select a city and use the location-based features without giving SRVN access to your device’s location. We also process restaurant searches, explicitly submitted AI Discovery requests and search preferences.</p>
          <h3>Device, security and diagnostic information</h3>
          <p>We may process IP addresses, device and operating-system information, app version, error and crash information, timestamps, session and authentication information, approximate location inferred from network information, notification tokens and related technical records. These help us operate the Services, detect abuse, troubleshoot issues and deliver notifications where enabled.</p>
          <h3>Support and reporting information</h3>
          <p>When you contact us through the support page or by email, we receive the information you submit, such as your contact details, description of an issue, content-report information and any attachments. We use it to answer you, investigate complaints, address safety concerns and maintain necessary records of the resolution.</p>
        </section>

        <section>
          <h2>How we use personal information</h2>
          <p>We use personal information to:</p>
          <ul>
            <li>Create and secure accounts; verify eligibility; authenticate users; and maintain account preferences.</li>
            <li>Provide restaurant and dish discovery, location-aware search, maps, saved restaurants, feeds, profiles and social interactions.</li>
            <li>Publish reviews, ratings, comments and media that you choose to contribute, and enable other users to discover and interact with those contributions.</li>
            <li>Personalize feeds and restaurant recommendations based on your interactions, preferences, chosen location and submitted requests.</li>
            <li>Process AI Discovery queries to generate restaurant suggestions and explanations.</li>
            <li>Provide account, activity and security notifications according to your settings and device permissions.</li>
            <li>Receive and act on reports, enforce our community rules, investigate suspected misuse and protect users.</li>
            <li>Respond to support messages and privacy requests.</li>
            <li>Monitor performance, diagnose errors, improve reliability and understand aggregate use of the website.</li>
            <li>Meet legal obligations, protect our rights, resolve disputes and maintain the integrity of the Services.</li>
          </ul>
          <p>We do not use the restaurant-recommendation features to make decisions that produce legal or similarly significant effects about your eligibility, employment, credit or access to essential services.</p>
        </section>

        <section>
          <h2>Consent and other legal grounds</h2>
          <p>The legal grounds for processing depend on the purpose and applicable law. In Canada, we seek meaningful consent where required and provide choices for optional uses of information. In Nigeria, processing may be based, as applicable, on your consent, performance of our agreement with you, compliance with a legal obligation, legitimate interests that are not overridden by your rights, or another ground permitted by law.</p>
          <p>Optional permissions, such as access to device location or delivery of push notifications, are requested through appropriate app and device controls. You may change those permissions later. Where we rely on consent, you may withdraw it, subject to applicable law and the consequences for features that require that information. We do not treat acceptance of our Terms as consent to every optional processing activity.</p>
        </section>

        <section>
          <h2>What other people can see</h2>
          <p>SRVN is designed around public contributions and community discovery. Other users can see your name, username, public profile photograph, published reviews and their associated photographs or videos, and social activity made visible through the Services. Your optional Instagram or TikTok handle or profile link is visible when you add it. Your public activity may include review ratings, comments, likes and follower or following relationships as displayed by the app.</p>
          <p>SRVN allows users to share links to certain profiles, reviews, restaurants and dish content. People receiving those links may be able to view the content through the Services, subject to access requirements and link availability. Other users may save, copy, capture or redistribute information they can see; we cannot control copies made outside our Services.</p>
          <p>We do not display your account email address, telephone number, date of birth, authentication credentials or precise device coordinates as public profile fields. Saved restaurants and account settings are not intended as public profile information.</p>
          <p>Deleting content from SRVN does not automatically remove copies someone else has independently captured or distributed.</p>
        </section>

        <section>
          <h2>AI Discovery and personalization</h2>
          <p>When you submit a natural-language restaurant request through AI Discovery, we process the request, your selected or permitted location context, and relevant restaurant information to return candidates and explanations. Technology providers assisting with AI generation may process the information required to provide that feature on our behalf.</p>
          <p>AI-generated explanations are suggestions, not independently verified statements about a restaurant. Do not submit sensitive personal information in discovery prompts. We use activity within SRVN, such as followed accounts, interactions and saved restaurants, to organize and personalize parts of the experience.</p>
        </section>

        <section>
          <h2>When we share information</h2>
          <p>We disclose information when necessary to provide the Services, including:</p>
          <ul>
            <li>Hosting and infrastructure: Render (application backend), DigitalOcean (database), Redis Cloud, and Vercel (website and related infrastructure).</li>
            <li>Media and app operations: Cloudinary for media handling, Expo EAS and associated delivery infrastructure for app build and notification-related services, and Sentry for application monitoring and diagnostics.</li>
            <li>Account sign-in: Google and Apple, when you choose their respective sign-in options.</li>
            <li>Service functionality: providers of restaurant information, mapping, geocoding, AI-assisted discovery, email, SMS or push-delivery services to the extent these are used to perform the feature you request.</li>
            <li>Other users and the public-facing service: when you intentionally publish or share profile information, reviews, media and other social contributions.</li>
            <li>Legal and safety purposes: competent authorities, advisers or other recipients where required by law, necessary to protect rights or safety, or reasonably needed to investigate fraud, abuse or security incidents.</li>
            <li>Business transactions: parties involved in a genuine merger, financing, restructuring or transfer of assets, subject to appropriate confidentiality and legal safeguards.</li>
          </ul>
          <p>Providers receive information appropriate to their functions; this does not mean that every provider receives all of the information described in this Policy. Third-party websites and services you choose to open, including restaurant websites and Instagram or TikTok, operate under their own terms and privacy practices.</p>
        </section>

        <section>
          <h2>Website analytics, diagnostics and device technologies</h2>
          <p>We use Vercel Web Analytics to understand visits and website performance through privacy-oriented, aggregated web measurement. Vercel Web Analytics is designed to operate without third-party tracking cookies. We use Sentry to identify crashes, errors and performance issues; diagnostic records may include device, network and technical context relevant to an issue.</p>
          <p>Our website and app may also use essential session information, locally stored preferences, authentication tokens, notification identifiers, and similar technologies required to keep the Services working and secure. The choices available for cookies and other non-essential technologies depend on the feature and applicable law. You can manage device permissions and certain preferences through your device or SRVN settings.</p>
        </section>

        <section>
          <h2>International processing and data storage</h2>
          <p>SRVN is operated by a Canadian company, but our infrastructure is international. Our application backend is hosted by Render in Virginia (US East), United States, and the production database is hosted with DigitalOcean in its New York NYC2 region, United States. Information originating from Canada, including Quebec, and Nigeria is therefore processed outside those jurisdictions for these services.</p>
          <p>Other providers may process or transmit information in additional countries depending on the service and its infrastructure. Different countries may have different privacy laws, and information processed abroad can be subject to lawful access requests by authorities in those countries. We take steps to protect international processing and use contractual, organizational and technical safeguards appropriate to the information and applicable legal requirements.</p>
        </section>

        <section>
          <h2>How long we keep information and account deletion</h2>
          <p>We retain personal information for the time needed to provide the Services and for legitimate legal, security, operational and dispute-resolution purposes, subject to applicable law.</p>
          <p>Deleting your account: You can request account deletion through the account-deletion feature in SRVN. After a successful deletion, account and profile information and the records directly associated with your account are removed from active account systems. Device associations and account access are ended as part of that process.</p>
          <p>Dish content exception: SRVN may continue to retain and display dish names and photographs of dishes as standalone restaurant and dish-reference content indefinitely, including after the account that originally contributed them has been deleted. This content is not presented as an active user profile or as a continuing endorsement by the former account holder. The exception concerns dish names, not the name of the person who posted the dish. If retained photographs contain identifiable people or other personal information, we will consider applicable deletion, objection and privacy rights and remove or adapt content where required by law.</p>
          <p>Other records: Limited records may be retained where reasonably necessary for legal compliance, security, fraud prevention, dispute handling or the resolution of complaints. Technical copies, backups and third-party caches may not disappear at the same instant as a live account record; they are handled through applicable backup, retention and deletion processes. Public copies independently saved by other people are outside SRVN’s control.</p>
          <p>You can request information about a specific record or ask us to consider the removal of retained media by contacting <a href="mailto:support@srvnapp.com">support@srvnapp.com</a>.</p>
        </section>

        <section>
          <h2>Your privacy rights and choices</h2>
          <p>Depending on the law that applies to your information, you may have the right to:</p>
          <ul>
            <li>Request access to personal information we hold about you and information about how it is used.</li>
            <li>Request correction of inaccurate or incomplete information.</li>
            <li>Request deletion or de-identification of information, subject to applicable exceptions.</li>
            <li>Withdraw consent for processing based on consent, and object to or restrict certain other processing.</li>
            <li>Request a copy of qualifying information in a portable format where applicable.</li>
            <li>Challenge certain automated decisions or seek explanations where the law provides that right.</li>
            <li>Complain to an appropriate privacy authority.</li>
          </ul>
          <p>You may edit certain profile information, manage device permissions and notifications, delete your own reviews or comments, block other users, and delete your account using the controls offered within the Services. Where a right is not available through a self-service control, contact us at <a href="mailto:support@srvnapp.com">support@srvnapp.com</a> or <Link href="/support">srvnapp.com/support</Link>.</p>
          <p>For your protection, we may verify your identity before providing access to, changing or deleting personal information. We respond in accordance with the deadlines and other requirements of the applicable law and explain when a lawful exception applies.</p>
        </section>

        <section>
          <h2>Marketing and service communications</h2>
          <p>We may send messages needed to maintain your account, confirm security activity, deliver notifications you have enabled, respond to requests and communicate important Service changes. Where we send promotional electronic messages, we do so in accordance with applicable consent and marketing laws, including Canada’s Anti-Spam Legislation when relevant. You may use unsubscribe instructions in a promotional message or contact us to stop promotional communications. Unsubscribing from marketing does not prevent essential account or security communications.</p>
        </section>

        <section>
          <h2>Information security</h2>
          <p>We use technical and organizational safeguards appropriate to the nature of the information and risks involved, including controls for access to account information, security monitoring and processes for responding to suspected incidents. No online service can guarantee absolute security. Protect your account credentials, keep your devices updated and notify us at <a href="mailto:support@srvnapp.com">support@srvnapp.com</a> if you believe your account or information has been compromised.</p>
        </section>

        <section>
          <h2>Age eligibility</h2>
          <p>SRVN accounts and account-based features are intended only for individuals aged 18 or older. We request date-of-birth information to assess eligibility. If we become aware that an account belongs to someone under 18, we may restrict or close it and take appropriate steps to remove the related personal information, subject to applicable law. Parents or guardians who believe a minor has created an account may contact us through our support channels.</p>
        </section>

        <section>
          <h2>Information for users in Canada</h2>
          <p>Canadian personal information may be subject to the Personal Information Protection and Electronic Documents Act (PIPEDA) and, depending on your province and the activity involved, provincial private-sector privacy laws. These include laws in Quebec, Alberta and British Columbia. We respect rights to access and correct information, meaningful consent requirements and other rights applicable to your circumstances.</p>
          <p>For Quebec residents, rights and safeguards under Quebec’s <em>Act respecting the protection of personal information in the private sector</em> apply where relevant. These may include rights concerning confidentiality, access, rectification, portability of qualifying computerized information and certain automated decisions. Cross-border processing is addressed in Section 9 of this Policy. You can direct requests or complaints to SRVN using Section 17 below.</p>
          <p>If you remain dissatisfied after contacting us, you may be able to raise a matter with the <a href="https://www.priv.gc.ca/en/report-a-concern/">Office of the Privacy Commissioner of Canada</a> or the provincial regulator with jurisdiction, including the <a href="https://www.cai.gouv.qc.ca/">Commission d’accès à l’information du Québec</a> where applicable.</p>
        </section>

        <section>
          <h2>Information for users in Nigeria</h2>
          <p>For people in Nigeria, the Nigeria Data Protection Act 2023 and applicable rules and guidance issued by the Nigeria Data Protection Commission (NDPC) may govern our processing. Depending on the circumstances and applicable provisions, you may request access, rectification, erasure, withdrawal of consent, objection or restrictions, and exercise other rights provided by law. Our international processing is described in Section 9.</p>
          <p>Submit rights requests or privacy complaints to SRVN through the contact details below. You may also contact the <a href="https://ndpc.gov.ng/">Nigeria Data Protection Commission</a> about matters within its authority.</p>
        </section>

        <section>
          <h2>Changes to this Policy and contact</h2>
          <p>We may update this Privacy Policy as the Services, applicable laws or our information practices change. We will display the updated effective date and provide additional notice or seek consent when legally required. Your rights in relation to information collected before a change remain subject to applicable law.</p>
          <p>
            SRVN Digital Inc.<br />
            108 Peter St, Suite 1020<br />
            Toronto, Ontario M5V 0W2<br />
            Canada<br />
            Email: <a href="mailto:support@srvnapp.com">support@srvnapp.com</a><br />
            Support and privacy requests: <Link href="/support">https://srvnapp.com/support</Link>
          </p>
        </section>
      </article>

      <footer>
        &copy; 2026 SRVN Digital Inc. &nbsp;&middot;&nbsp;
        <Link href="/terms">Terms of Use</Link> &nbsp;&middot;&nbsp;
        <Link href="/support">Support</Link>
      </footer>
    </div>
  );
}
