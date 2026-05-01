import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy — Qoozr: AI Tutor & Quiz",
    description: "Learn how Qoozr: AI Tutor & Quiz collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
    const sections = [
        {
            title: "Information About Us",
            content: [
                "The App is owned and operated by:",
                [
                    "Developer: Kavuma Kigere Julius",
                    "App Name: Qoozr: AI Tutor & Quiz",
                    "Email Address: support@qoozrapp.com",
                    "Privacy Contact: privacyinquiry@qoozrapp.com",
                    "Developer Account Name (as registered with Apple): Kavuma Kigere Julius"
                ],
                "Qoozr: AI Tutor & Quiz is an AI-powered educational platform that helps users of all ages learn through dynamically generated quizzes, personalized subject tracking, and an AI-powered homework scanning tool. The App supports users in over 30 subject categories across 7 languages, tailored by age bracket and country context."
            ],
        },
        {
            title: "What Does This Policy Cover?",
            content: [
                "This Privacy Policy applies solely to your use of the Qoozr mobile application, available on the Apple App Store. The App may contain links to third-party websites or services (for example, links to our support resources). Please note that we have no control over how your data is collected, stored, or used by other websites, and we advise you to check the privacy policies of any such websites before providing any data to them.",
                "This policy covers:",
                [
                    "The Qoozr mobile application (\"the App\")",
                    "All features within the App, including the Quiz Engine, AI Scan (Homework Helper), QuickScore Dashboard, Subscription/Paywall, and Account Management"
                ]
            ],
        },
        {
            title: "What Is Personal Data?",
            content: [
                "Personal data is any information that relates to an identifiable person who can be directly or indirectly identified, in particular by reference to an identifier. In simpler terms, personal data is any information about you that enables you to be identified. This covers obvious information such as your name and email address, but it also covers less obvious information such as device identifiers, usage patterns, and online identifiers."
            ],
        },
        {
            title: "Your Rights",
            content: [
                "Depending on your jurisdiction, you may have the following rights regarding your personal data. We will always work to uphold these rights:",
                [
                    "The right to be informed — This Privacy Policy tells you everything you need to know about how we collect and use your data. You can always contact us to find out more.",
                    "The right to access — You may request a copy of the personal data we hold about you. See Section 15 for how to make this request.",
                    "The right to rectification — If any personal data we hold about you is inaccurate or incomplete, you have the right to have it corrected.",
                    "The right to erasure (\"right to be forgotten\") — You may request that we delete your personal data and account. See Section 14 for details.",
                    "The right to restrict processing — You may ask us to limit how we use your personal data.",
                    "The right to object — You may object to us using your personal data for a particular purpose.",
                    "The right to withdraw consent — Where we rely on your consent as the legal basis for processing your data, you are free to withdraw that consent at any time through your device privacy settings or by contacting us directly. Withdrawal of consent does not affect the lawfulness of processing based on consent before its withdrawal.",
                    "The right to data portability — Where applicable, you may request a copy of your personal data in a commonly used, machine-readable format."
                ],
                "To exercise any of these rights, please contact us using the details provided in Section 17."
            ],
        },
        {
            title: "What Personal Data Do We Collect and How?",
            content: [
                "We collect information necessary to provide, improve, and personalize the App's educational features. Below is a complete breakdown of what we collect and why.",
                "Account & Authentication Data: When you sign in to Qoozr using Sign in with Apple or Sign in with Google, we receive and store:",
                [
                    "Full name (as provided by your authentication provider, if you consent to share it)",
                    "Email address (used to identify your account and for communication)",
                    "Profile picture URL (as provided by Google, if applicable)",
                    "Firebase Authentication User ID (UID) — a unique, anonymized identifier used internally to link all of your account data"
                ],
                "We use Firebase Authentication (provided by Google) to securely manage account access. We do not store your password — authentication is handled entirely by Apple or Google."
            ],
        },
        {
            title: "Educational & Usage Data",
            content: [
                "To provide personalized learning experiences, we collect and store the following in our database (Firebase Firestore):",
                [
                    "Age bracket — one of: Ages 6–9, 10–13, 14–17, or 18+ (used to calibrate quiz difficulty and content appropriateness)",
                    "Country selection — used to localize quiz content (e.g., local history, geography)",
                    "Preferred subjects — the subjects you have selected to study",
                    "Quiz performance data — your scores on each quiz session",
                    "QuickScore — a composite score reflecting your overall learning progress",
                    "Subject mastery percentages — per-subject progress scores",
                    "Study streaks — daily engagement tracking to encourage consistent learning",
                    "Language preference — your chosen interface language (one of: English, German, Spanish, French, Korean, Japanese, Portuguese)"
                ],
                "This data is stored securely in your Firestore account profile and is linked to your Firebase UID."
            ],
        },
        {
            title: "Camera & Image Data (AI Scan Feature)",
            content: [
                "When you use the AI Scan (Homework Helper) feature:",
                [
                    "The App requests access to your device camera and/or photo library (via expo-camera and expo-image-picker)",
                    "Images are captured or selected solely for the purpose of AI-powered homework analysis",
                    "Images are converted to a compressed base64 format on your device before transmission",
                    "Images are transmitted to our AI processing service (OpenRouter / GPT-4o-mini) to identify and solve problems shown in the image",
                    "We do not store these images on our servers. The image data is used solely for the immediate analysis request and is not retained by us or our AI provider beyond the time necessary to process your request",
                    "Camera and photo library access is only activated when you explicitly use the Scan feature. You may deny camera access in your device settings at any time, which will disable the Scan feature"
                ]
            ],
        },
        {
            title: "AI Processing Data",
            content: [
                "When you use the Quiz Engine or the AI Scan feature:",
                [
                    "Your quiz parameters (subject, age bracket, country, language) are sent to OpenRouter to generate quiz questions",
                    "Your homework images and any translated results are processed by OpenRouter (GPT-4o-mini)",
                    "AI interactions are not used to build a personal profile of you or to train AI models on your personal data",
                    "We do not share personally identifiable information (such as your name or email) with our AI providers when generating quiz content"
                ]
            ],
        },
        {
            title: "Device & Technical Data",
            content: [
                "We automatically collect limited technical data necessary for the operation and security of the App:",
                [
                    "Device platform (iOS) — used to determine payment processing routes (Apple IAP only)",
                    "App version — used for debugging and crash diagnosis",
                    "Push notification token — when you grant notification permission, a device token is registered with Expo Notifications to deliver reminders and learning nudges"
                ],
                "We do not collect IP addresses, browser fingerprints, or precise geolocation data."
            ],
        },
        {
            title: "Subscription & Purchase Data",
            content: [
                "When you purchase a subscription or restore a previous purchase:",
                [
                    "RevenueCat (our subscription management service) collects: your anonymous or Firebase-linked App User ID, subscription entitlement status, product identifier, transaction date, and platform",
                    "Apple processes your payment through its In-App Purchase system. Qoozr does not receive, process, or store your full payment card details, bank details, or Apple ID credentials at any point",
                    "RevenueCat may also collect limited device and platform information necessary for entitlement verification"
                ]
            ],
        },
        {
            title: "How Do We Use Your Personal Data?",
            content: [
                "We use the collected data for the following purposes:",
                [
                    "To create and maintain your account — using your authentication data to identify you securely",
                    "To provide the App's core functionality — generating personalized quizzes, tracking your progress, and powering the AI Scan feature",
                    "To personalize your learning experience — using your age bracket, country, subject preferences, and language setting to tailor all content and difficulty levels",
                    "To track and display your learning progress — your QuickScore, subject mastery, and streaks are stored and surfaced back to you through the dashboard",
                    "To process in-app purchases and subscriptions — granting Pro access upon purchase confirmation from Apple and RevenueCat",
                    "To restore previous purchases — verifying your entitlement history through RevenueCat when you request a restore",
                    "To deliver push notifications — sending learning reminders, streak alerts, and feature updates if you have granted notification permission",
                    "To provide customer support — using your email and account information to respond to support requests",
                    "To improve the App — using aggregated, anonymized usage patterns to understand how features are used and where improvements are needed",
                    "To ensure the security and integrity of the App — detecting abuse, preventing fraud, and ensuring the App operates correctly",
                    "To comply with legal obligations — where required by applicable law"
                ],
                "We do not use your personal data for advertising, profiling for marketing purposes, or selling to third parties."
            ],
        },
        {
            title: "How and Where Do We Store Your Data?",
            content: [
                "Your personal data is stored primarily in Google Firebase infrastructure, which uses servers located in the United States and other regions globally. Firebase is a Google Cloud product that meets industry-standard data security certifications.",
                "We take the security of your personal data seriously and implement the following measures:",
                [
                    "Encryption in transit — all data transmitted between the App and our backend services uses HTTPS / TLS encryption",
                    "Encryption at rest — Firebase Firestore and Firebase Authentication encrypt stored data at rest",
                    "Access controls — only the authenticated user can read or write their own data, enforced through Firebase Security Rules",
                    "Principle of least privilege — our Firebase Security Rules (firestore.rules) are configured so that users can only access their own data records",
                    "No retention of scan images — images captured for the AI Scan feature are not stored on our servers or databases"
                ],
                "Despite these measures, no method of electronic transmission or storage is 100% secure. We cannot guarantee the absolute security of your information, but we will notify you if we become aware of a breach affecting your personal data."
            ],
        },
        {
            title: "Do We Share Your Personal Data?",
            content: [
                "We do not sell, rent, or trade your personal data to any third party.",
                "We share your personal data only with the following categories of third-party service providers who help us operate the App. Each is contractually required to protect your data and use it only for the purpose for which it was shared:",
                [
                    "Firebase / Google — Authentication, database (Firestore), cloud infrastructure — Data: UID, name, email, quiz data",
                    "Apple Inc. — Sign in with Apple authentication; In-App Purchase processing — Data: Authentication token; payment transaction (Apple retains full payment details)",
                    "RevenueCat Inc. — Subscription and entitlement management — Data: App User ID, product identifier, entitlement status, transaction date",
                    "OpenRouter (via openai SDK) — AI quiz generation and homework image analysis — Data: Quiz parameters (subject, age, country, language); homework images (not personally identifiable)"
                ],
                "All third-party providers are required to provide an equivalent level of data protection as described in this policy. We do not authorize them to use your data for their own independent purposes.",
                "We may also disclose personal data in the following limited circumstances:",
                [
                    "Legal compliance — if required by law, court order, or government authority",
                    "Protection of rights — if necessary to protect the rights, property, or safety of Qoozr, our users, or the public",
                    "Business transfers — in the event of a merger, acquisition, or sale of all or part of our business, your data may be transferred to the acquiring entity under the same privacy protections described in this policy"
                ]
            ],
        },
        {
            title: "Sign-On Procedures",
            content: [
                "Sign in with Apple: Qoozr offers Sign in with Apple as an authentication method. When you choose this option, Apple authenticates your identity and shares a limited set of information with us (subject to your preferences set in your Apple ID account). Apple may share your name and email address (or a private relay email) with us. Apple may also provide information about whether you are logged in to your Apple ID account.",
                "The legal basis for this processing is your consent, given when you choose to sign in using your Apple ID.",
                "Provider: Apple Inc., One Apple Park Way, Cupertino, CA 95014, USA. Privacy Policy: https://www.apple.com/legal/privacy/",
                "Sign in with Google: Qoozr offers Sign in with Google as an authentication method via the @react-native-google-signin/google-signin library and Firebase Authentication. When you choose this option, Google authenticates your identity and provides us with your Google account name, email address, and profile picture (if your Google account has one).",
                "The legal basis for this processing is your consent, given when you choose to sign in using your Google Account.",
                "Provider: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. Privacy Policy: https://policies.google.com/privacy"
            ],
        },
        {
            title: "In-App Purchases & Subscription Management",
            content: [
                "Apple In-App Purchase (StoreKit): All digital purchases and subscriptions within Qoozr are processed exclusively through Apple's In-App Purchase (IAP) system using Apple StoreKit. Qoozr does not accept payments through any third-party payment gateway, external website, or any method other than Apple's IAP. This is in full compliance with Apple's App Store Review Guidelines.",
                "Apple processes your payment transaction and retains your billing information. Qoozr does not receive, access, store, or process your payment card number, bank account details, or full Apple ID credentials at any time.",
                "Provider: Apple Inc., One Apple Park Way, Cupertino, CA 95014, USA. Apple's Privacy Policy: https://www.apple.com/legal/privacy/",
                "RevenueCat: Qoozr uses RevenueCat as a subscription management and entitlement verification service. RevenueCat sits on top of Apple's IAP system and enables us to reliably grant, manage, and restore Pro access across sessions and reinstalls.",
                "What RevenueCat receives: Your App User ID (either your Firebase UID or an anonymous RevenueCat-generated identifier), The subscription product identifier (e.g., Qoozr_Monthly, Qoozr_Annual), Your subscription entitlement status (active / expired), Transaction date and renewal status from Apple, Device platform (iOS).",
                "What RevenueCat does NOT receive: Your full name or email address, Your payment card details or billing address, Any quiz data, homework images, or educational content.",
                "Provider: RevenueCat Inc., 633 Tasman Drive, Sunnyvale, CA 94089, USA. RevenueCat Privacy Policy: https://www.revenuecat.com/privacy"
            ],
        },
        {
            title: "Subscription Plans",
            content: [
                "Qoozr Pro is available in the following subscription tiers, all processed through Apple IAP:",
                [
                    "7-Day Free Trial — 7 days of full Pro access at no charge, then converts to the Monthly plan",
                    "Qoozr Pro Monthly — Full Pro access, billed monthly",
                    "Qoozr Pro Annual — Full Pro access, billed annually (discounted rate)"
                ],
                "Pricing for each plan is clearly displayed on the paywall screen before you tap the subscribe button. No hidden charges apply. The free tier of Qoozr is fully functional and can be tested and used without any purchase.",
                "Restore Purchases: A \"Restore Purchases\" button is available on the Qoozr paywall screen. If you have previously subscribed to Qoozr Pro and reinstall the App or switch devices, tapping this button will verify your prior purchase with Apple and RevenueCat and restore your Pro access. No additional charge is made for restoring a valid, active subscription.",
                "Subscription Renewal, Cancellation & Refunds:",
                [
                    "Subscriptions automatically renew at the end of each billing period unless cancelled at least 24 hours before the renewal date",
                    "Your Apple account will be charged for renewal within 24 hours prior to the end of the current billing period",
                    "You can manage and cancel your subscription at any time through iOS Settings → [Your Apple ID] → Subscriptions → Qoozr",
                    "Cancellation takes effect at the end of the current paid period — you retain Pro access until expiry",
                    "Refund requests must be submitted directly to Apple through https://reportaproblem.apple.com. Qoozr does not issue refunds directly."
                ]
            ],
        },
        {
            title: "Third-Party Services",
            content: [
                "Authentication & Cloud Infrastructure — Firebase (Google): Service: Firebase Authentication & Cloud Firestore (database). Provider: Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Data Processed: Authentication tokens, User UID, name, email, all quiz and progress data stored in Firestore.",
                "Privacy Policy: https://firebase.google.com/support/privacy. Google Privacy Policy: https://policies.google.com/privacy",
                "Firebase Firestore stores all of your user profile data, quiz scores, and learning progress. Data is protected by Firebase Security Rules that enforce user-level access control — only you can read and write your own data."
            ],
        },
        {
            title: "AI Quiz Generation & Homework Analysis",
            content: [
                "Service: AI language model API (GPT-4o-mini) used for quiz question generation and homework image analysis. Provider: OpenRouter Inc., USA. Data Processed: Quiz parameters (subject, age bracket, country, language); base64-encoded homework images for the Scan feature.",
                "Note: Personally identifiable information (name, email) is NOT sent to OpenRouter. Quiz prompts contain only educational context. Homework images are not linked to your account identity.",
                "OpenRouter Privacy Policy: https://openrouter.ai/privacy. Underlying Model Provider (OpenAI): https://openai.com/privacy"
            ],
        },
        {
            title: "Push Notifications & Local Storage",
            content: [
                "Push Notifications — Expo Notifications: Service: Push notification delivery infrastructure. Provider: Expo (Expo Software Inc.) / Apple Push Notification Service (APNs). Data Processed: Device push notification token. Purpose: Sending optional learning reminders, streak alerts, and important App updates.",
                "Privacy Policy: https://expo.dev/privacy",
                "You can disable push notifications at any time through iOS Settings → Notifications → Qoozr.",
                "Local Storage — AsyncStorage: Certain preferences and cached data (such as your language preference and locally cached quiz questions) are stored locally on your device using @react-native-async-storage/async-storage. This data never leaves your device and is not transmitted to our servers. It is cleared when you uninstall the App."
            ],
        },
        {
            title: "App Tracking Transparency (ATT)",
            content: [
                "In accordance with Apple's App Tracking Transparency (ATT) framework (iOS 14.5+), Qoozr uses expo-tracking-transparency to request your permission before any cross-app or cross-site tracking activity takes place.",
                "Qoozr does not display third-party advertisements and does not participate in advertising networks. The ATT prompt, if shown, relates to any optional analytics or attribution that may be used to understand how users discover the App (e.g., App Store search vs. referral).",
                "You can review and change your tracking preference at any time through: iOS Settings → Privacy & Security → Tracking → Qoozr.",
                "If you deny tracking permission, all App features continue to function normally. No data is shared with advertising networks regardless of your ATT choice."
            ],
        },
        {
            title: "Children's Privacy (COPPA Compliance)",
            content: [
                "Overview: Qoozr is committed to protecting the privacy of children. The App includes an age bracket selection of Ages 6–9, which means children under the age of 13 may use the App. This section describes our practices regarding the collection, use, and disclosure of personal information from children under 13 (\"Children\"), in compliance with the Children's Online Privacy Protection Act (COPPA).",
                "Parents and legal guardians (\"Parents\") should review this section carefully before allowing their Children to use the App.",
                "Parental Consent Required (Under 13): Users under 13 years of age must obtain permission from their parent or legal guardian before using Qoozr. By allowing a Child to use the App, the Parent represents that: (a) They have reviewed this Privacy Policy and consent to the collection practices described herein; (b) The Child's use of the App complies with all applicable laws and regulations.",
                "If we become aware that we have collected personal information from a Child without verified parental consent, we will take steps to delete that information as promptly as possible."
            ],
        },
        {
            title: "Limited Data Collection from Children",
            content: [
                "We collect only the minimum amount of personal information necessary to provide the App's educational service to Children. For users in the Ages 6–9 bracket, we collect:",
                [
                    "Firebase Authentication UID — a technical identifier to maintain the Child's account and learning session",
                    "Age bracket (Ages 6–9) — to ensure all quiz content and AI-generated material is age-appropriate",
                    "Country selection — to localize educational content",
                    "Quiz scores and progress data — to show the Child their learning progress within the App",
                    "Notification token — only if the Parent grants notification permission on the device"
                ],
                "We do not collect the following from Children's accounts: Full name or email address beyond what the authentication provider supplies at sign-in, Physical address, Phone number, Precise geolocation data, Any information for advertising or marketing purposes."
            ],
        },
        {
            title: "How We Use Children's Personal Information",
            content: [
                "We use data from Children's accounts only for the following limited purposes:",
                [
                    "To provide age-appropriate quiz content and educational features",
                    "To maintain the Child's account and track their learning progress within the App",
                    "To ensure the security and integrity of the service",
                    "To comply with legal obligations"
                ],
                "We do not use Children's personal information for: Targeted or behavioral advertising, Building advertising or marketing profiles, Training AI or machine learning models, Any commercial purpose unrelated to providing the educational service."
            ],
        },
        {
            title: "Disclosure of Children's Personal Information",
            content: [
                "We do not sell, rent, or disclose Children's personal information to third parties for their own commercial purposes. We may share Children's data only in the following extremely limited circumstances:",
                [
                    "Service providers for internal operations — Firebase (for account storage) and OpenRouter (for AI content generation, using only age bracket and educational parameters — no personally identifiable information). These providers are contractually prohibited from using Children's data for any purpose other than providing the specified service to Qoozr.",
                    "Legal compliance — if required by law, court order, or government request.",
                    "Business transfers — in the event of a merger or acquisition, subject to the maintaining the same level of COPPA-compliant data protection."
                ],
                "Children's accounts are not connected to advertising networks, social media platforms, analytics advertising partners, or any third-party AI model training programs."
            ],
        },
        {
            title: "Parental Rights and Controls",
            content: [
                "Parents have the following rights regarding their Child's personal information held by Qoozr:",
                [
                    "Right to Review — Parents may contact us to learn what information is associated with their Child's account.",
                    "Right to Delete — Parents may request complete deletion of their Child's account and all associated data by contacting us at the address in Section 17. Upon a verified deletion request, we will delete the Child's account and all associated data within 30 days, except where retention is required by law.",
                    "Right to Refuse Further Collection — Parents may contact us to request that we stop collecting further personal data from their Child. Note that because a persistent identifier is required for account functionality, this would result in account termination.",
                    "Right to Revoke Consent — Parents may revoke their consent for the collection, use, and disclosure of their Child's personal information at any time by contacting us using the details in Section 17."
                ]
            ],
        },
        {
            title: "Children and AI Features",
            content: [
                "The AI Scan (Homework Helper) feature may be used by Children in the Ages 6–9 bracket with parental supervision. To protect Children's privacy when using AI features:",
                [
                    "Homework images sent for AI analysis contain no personally identifiable information about the Child (no name, face, or account details are included in the image prompt)",
                    "Images are processed immediately for the requested educational purpose and are not retained by OpenRouter or by Qoozr beyond the duration of the analysis request",
                    "No data from a Child's use of AI features is used to train AI models — whether our own or third-party models",
                    "AI-generated responses are strictly educational in nature and designed to be age-appropriate based on the selected age bracket"
                ]
            ],
        },
        {
            title: "Data Retention and Deletion",
            content: [
                "Retention: We retain your personal data for as long as your account remains active or as long as is necessary to provide you with the App's services. Specifically:",
                [
                    "Account and authentication data — retained for the lifetime of your active account",
                    "Quiz performance and progress data — retained while your account is active",
                    "Locally cached questions — stored on-device via AsyncStorage; cleared on app uninstall",
                    "Subscription and purchase records — retained by RevenueCat and Apple for as long as required by their respective policies and applicable tax/financial regulations",
                    "AI scan images — not retained; processed in real-time and discarded immediately"
                ]
            ],
        },
        {
            title: "Account Deletion",
            content: [
                "You may request the deletion of your account and all associated data at any time by:",
                [
                    "Using the account deletion option in App Settings → Profile → Delete Account (where available in the App), or",
                    "Contacting us directly at privacyinquiry@qoozrapp.com with the subject line \"Account Deletion Request\""
                ],
                "Upon receiving a verified deletion request, we will: Delete your user record from Firebase Authentication and all associated data from Firestore within 30 days, Notify RevenueCat to remove your App User ID from their active records, Confirm deletion to you by email.",
                "Please note: RevenueCat and Apple retain transaction records for legal and financial compliance purposes independent of our deletion. We cannot delete payment records held by Apple or RevenueCat on our behalf."
            ],
        },
        {
            title: "How Can I Access My Personal Data?",
            content: [
                "You have the right to request a copy of the personal data we hold about you (a \"Subject Access Request\").",
                "To make a Subject Access Request: Email us at privacyinquiry@qoozrapp.com with the subject line \"Subject Access Request\". Please include your registered email address or Firebase UID to help us identify your account.",
                "There is no charge for a Subject Access Request unless your request is manifestly unfounded or excessive.",
                "We aim to respond to all Subject Access Requests within 30 days of receipt. In cases involving complex requests, we may require up to 60 days and will inform you of this in advance."
            ],
        },
        {
            title: "Changes to This Privacy Policy",
            content: [
                "We may update this Privacy Policy from time to time to reflect changes in our practices, new features, or changes in applicable law. When we update the policy, we will:",
                [
                    "Update the \"Last Updated\" date at the top of this document",
                    "Post the updated policy at the public URL stated at the top of this document",
                    "Notify you of material changes through an in-app notification or via email where we have your contact details"
                ],
                "We recommend that you review this Privacy Policy periodically. Your continued use of the App after any changes constitutes your acceptance of the updated policy.",
                "For material changes affecting Children's privacy practices, we will notify Parents directly and, where required by COPPA, obtain renewed parental consent before implementing the changes."
            ],
        },
        {
            title: "Contact Us",
            content: [
                "If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please contact us:",
                [
                    "Developer: Kavuma Kigere Julius",
                    "General Support: support@qoozrapp.com",
                    "Privacy & Data Requests: privacyinquiry@qoozrapp.com"
                ],
                "Subject Line for data requests: Please use one of the following:",
                [
                    "\"Subject Access Request\" — to request a copy of your data",
                    "\"Account Deletion Request\" — to delete your account and data",
                    "\"Children's Privacy\" — for COPPA-related parental inquiries"
                ],
                "We aim to respond to all privacy-related inquiries within 10 business days."
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border/30">
                <div className="framer-container flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center gap-2 group">
                        <img 
                            src="/images/logo.png" 
                            alt="Qoozr Logo" 
                            className="w-12 h-12 object-contain drop-shadow-sm transition-transform group-hover:scale-105"
                        />
                        <span className="text-xl font-bold tracking-tight text-text-main">Qoozr</span>
                    </Link>
                    <Link
                        href="/"
                        className="text-[15px] font-bold text-text-muted hover:text-text-main transition-colors flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </header>

            {/* Hero */}
            <section className="pt-40 pb-16 bg-[#0e1010]">
                <div className="framer-container max-w-[760px] mx-auto text-center">
                    <div className="inline-block bg-white/10 border border-white/10 rounded-full px-5 py-2 text-[13px] font-bold text-white/50 mb-8 tracking-wide uppercase">
                        Last updated: April 28, 2026
                    </div>
                    <h1 className="text-[56px] md:text-[72px] leading-[1] font-medium tracking-tighter text-white mb-8">
                        Privacy <span className="text-primary italic">Policy</span>
                    </h1>
                    <p className="text-[18px] text-white/50 leading-relaxed mx-auto max-w-[600px]">
                        Your privacy is important to us. This policy explains how Qoozr: AI Tutor & Quiz collects, uses, and protects your personal data when you use our AI-powered educational platform.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-24">
                <div className="framer-container max-w-[800px] mx-auto">
                    <div className="space-y-20">
                        {sections.map((section, i) => (
                            <div key={i} className="border-b border-border/20 pb-20 last:border-none">
                                <div className="flex flex-col items-center justify-center gap-4 mb-10 text-center">
                                    <span className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center text-[15px] font-bold flex-shrink-0">
                                        {i + 1}
                                    </span>
                                    <h2 className="text-[32px] font-medium text-text-main tracking-tight">{section.title}</h2>
                                </div>
                                <div className="px-4 flex flex-col items-center gap-6">
                                    {section.content.map((block, idx) => (
                                        Array.isArray(block) ? (
                                            <div key={idx} className="w-full max-w-[640px] flex justify-center">
                                                <ul className="list-disc pl-6 text-left text-[16px] text-text-muted leading-relaxed space-y-3 w-fit">
                                                    {block.map((item, itemIdx) => (
                                                        <li key={itemIdx}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ) : (
                                            <p key={idx} className="text-[16px] text-text-muted leading-relaxed text-center max-w-[680px]">
                                                {block}
                                            </p>
                                        )
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Box */}
                    <div className="mt-20 bg-[#f9f9f9] rounded-[32px] p-12 border border-border/30 text-center flex flex-col items-center">
                        <h3 className="text-[24px] font-medium text-text-main mb-4">Questions about our privacy practices?</h3>
                        <p className="text-[16px] text-text-muted leading-relaxed mb-8 max-w-[500px]">
                            If you have any questions about this Privacy Policy or how we handle your personal data, please contact our Privacy Team.
                        </p>
                        <a
                            href="mailto:privacyinquiry@qoozrapp.com"
                            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold text-[15px] hover:scale-[1.02] active:scale-95 transition-all"
                        >
                            Contact Privacy Team
                        </a>
                    </div>
                </div>
            </section>

            <div className="border-t border-border/30 py-10">
                <div className="framer-container text-center">
                    <p className="text-[14px] text-text-muted/40 font-medium">© 2026 Qoozr. All rights reserved.</p>
                </div>
            </div>
        </main>
    );
}