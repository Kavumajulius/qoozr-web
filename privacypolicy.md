# Privacy Policy for Qoozr

**Last Updated: April 28, 2026**

**Effective Date: April 28, 2026**

**Policy URL: https://qoozr.app/privacy** *(update before submission)*

---

## Background

Kavuma Kigere Julius ("we," "us," or "our") understands that your privacy is important to you and that you care about how your personal data is used and shared. We respect and value the privacy of everyone who uses **Qoozr** (the "App"), our AI-powered educational quiz and homework assistant platform, and we only collect and use your personal data as described in this Privacy Policy.

Any personal data we collect will only be used as permitted by law. We are committed to handling your information transparently and responsibly.

Please read this Privacy Policy carefully and ensure that you understand it. By downloading, installing, or using the App, you agree to the collection and use of information in accordance with this policy.

For information about how we collect, use, share, and otherwise process the personal information of users under age 13 ("Children"), please refer to **Section 13** of this Privacy Policy.

---

## 1. Information About Us

The App is owned and operated by:

**Developer:** Kavuma Kigere Julius

**App Name:** Qoozr (also known as "Quick-Think")

**Email Address:** support@qoozr.app *(update to your confirmed support email before submission)*

**Privacy Contact:** privacy@qoozr.app *(update before submission)*

**Developer Account Name (as registered with Apple):** Kavuma Kigere Julius

Qoozr is an AI-powered educational platform that helps users of all ages learn through dynamically generated quizzes, personalized subject tracking, and an AI-powered homework scanning tool. The App supports users in over 30 subject categories across 7 languages, tailored by age bracket and country context.

---

## 2. What Does This Policy Cover?

This Privacy Policy applies solely to your use of the **Qoozr mobile application**, available on the Apple App Store. The App may contain links to third-party websites or services (for example, links to our support resources). Please note that we have no control over how your data is collected, stored, or used by other websites, and we advise you to check the privacy policies of any such websites before providing any data to them.

This policy covers:

- The Qoozr mobile application ("the App")
- All features within the App, including the Quiz Engine, AI Scan (Homework Helper), QuickScore Dashboard, Subscription/Paywall, and Account Management

---

## 3. What Is Personal Data?

Personal data is any information that relates to an identifiable person who can be directly or indirectly identified, in particular by reference to an identifier. In simpler terms, personal data is any information about you that enables you to be identified. This covers obvious information such as your name and email address, but it also covers less obvious information such as device identifiers, usage patterns, and online identifiers.

---

## 4. Your Rights

Depending on your jurisdiction, you may have the following rights regarding your personal data. We will always work to uphold these rights:

- **The right to be informed** — This Privacy Policy tells you everything you need to know about how we collect and use your data. You can always contact us to find out more.
- **The right to access** — You may request a copy of the personal data we hold about you. See Section 15 for how to make this request.
- **The right to rectification** — If any personal data we hold about you is inaccurate or incomplete, you have the right to have it corrected.
- **The right to erasure ("right to be forgotten")** — You may request that we delete your personal data and account. See Section 14 for details.
- **The right to restrict processing** — You may ask us to limit how we use your personal data.
- **The right to object** — You may object to us using your personal data for a particular purpose.
- **The right to withdraw consent** — Where we rely on your consent as the legal basis for processing your data, you are free to withdraw that consent at any time through your device privacy settings or by contacting us directly. Withdrawal of consent does not affect the lawfulness of processing based on consent before its withdrawal.
- **The right to data portability** — Where applicable, you may request a copy of your personal data in a commonly used, machine-readable format.

To exercise any of these rights, please contact us using the details provided in **Section 17**.

---

## 5. What Personal Data Do We Collect and How?

We collect information necessary to provide, improve, and personalize the App's educational features. Below is a complete breakdown of what we collect and why.

### 5A. Account & Authentication Data

When you sign in to Qoozr using **Sign in with Apple** or **Sign in with Google**, we receive and store:

- **Full name** (as provided by your authentication provider, if you consent to share it)
- **Email address** (used to identify your account and for communication)
- **Profile picture URL** (as provided by Google, if applicable)
- **Firebase Authentication User ID (UID)** — a unique, anonymized identifier used internally to link all of your account data

We use **Firebase Authentication** (provided by Google) to securely manage account access. We do not store your password — authentication is handled entirely by Apple or Google.

### 5B. Educational & Usage Data

To provide personalized learning experiences, we collect and store the following in our database (Firebase Firestore):

- **Age bracket** — one of: Ages 6–9, 10–13, 14–17, or 18+ (used to calibrate quiz difficulty and content appropriateness)
- **Country selection** — used to localize quiz content (e.g., local history, geography)
- **Preferred subjects** — the subjects you have selected to study
- **Quiz performance data** — your scores on each quiz session
- **QuickScore** — a composite score reflecting your overall learning progress
- **Subject mastery percentages** — per-subject progress scores
- **Study streaks** — daily engagement tracking to encourage consistent learning
- **Language preference** — your chosen interface language (one of: English, German, Spanish, French, Korean, Japanese, Portuguese)

This data is stored securely in your Firestore account profile and is linked to your Firebase UID.

### 5C. Camera & Image Data (AI Scan Feature)

When you use the **AI Scan (Homework Helper)** feature:

- The App requests access to your device **camera** and/or **photo library** (via `expo-camera` and `expo-image-picker`)
- Images are captured or selected solely for the purpose of AI-powered homework analysis
- Images are converted to a compressed base64 format on your device before transmission
- **Images are transmitted to our AI processing service (OpenRouter / GPT-4o-mini)** to identify and solve problems shown in the image
- **We do not store these images on our servers.** The image data is used solely for the immediate analysis request and is not retained by us or our AI provider beyond the time necessary to process your request
- Camera and photo library access is only activated when you explicitly use the Scan feature. You may deny camera access in your device settings at any time, which will disable the Scan feature

### 5D. AI Processing Data

When you use the Quiz Engine or the AI Scan feature:

- Your quiz parameters (subject, age bracket, country, language) are sent to **OpenRouter** to generate quiz questions
- Your homework images and any translated results are processed by **OpenRouter (GPT-4o-mini)**
- AI interactions are not used to build a personal profile of you or to train AI models on your personal data
- We do not share personally identifiable information (such as your name or email) with our AI providers when generating quiz content

### 5E. Device & Technical Data

We automatically collect limited technical data necessary for the operation and security of the App:

- **Device platform** (iOS) — used to determine payment processing routes (Apple IAP only)
- **App version** — used for debugging and crash diagnosis
- **Push notification token** — when you grant notification permission, a device token is registered with **Expo Notifications** to deliver reminders and learning nudges

We do not collect IP addresses, browser fingerprints, or precise geolocation data.

### 5F. Subscription & Purchase Data

When you purchase a subscription or restore a previous purchase:

- **RevenueCat** (our subscription management service) collects: your anonymous or Firebase-linked App User ID, subscription entitlement status, product identifier, transaction date, and platform
- **Apple** processes your payment through its In-App Purchase system. Qoozr does not receive, process, or store your full payment card details, bank details, or Apple ID credentials at any point
- RevenueCat may also collect limited device and platform information necessary for entitlement verification

---

## 6. How Do We Use Your Personal Data?

We use the collected data for the following purposes:

- **To create and maintain your account** — using your authentication data to identify you securely
- **To provide the App's core functionality** — generating personalized quizzes, tracking your progress, and powering the AI Scan feature
- **To personalize your learning experience** — using your age bracket, country, subject preferences, and language setting to tailor all content and difficulty levels
- **To track and display your learning progress** — your QuickScore, subject mastery, and streaks are stored and surfaced back to you through the dashboard
- **To process in-app purchases and subscriptions** — granting Pro access upon purchase confirmation from Apple and RevenueCat
- **To restore previous purchases** — verifying your entitlement history through RevenueCat when you request a restore
- **To deliver push notifications** — sending learning reminders, streak alerts, and feature updates if you have granted notification permission
- **To provide customer support** — using your email and account information to respond to support requests
- **To improve the App** — using aggregated, anonymized usage patterns to understand how features are used and where improvements are needed
- **To ensure the security and integrity of the App** — detecting abuse, preventing fraud, and ensuring the App operates correctly
- **To comply with legal obligations** — where required by applicable law

We do not use your personal data for advertising, profiling for marketing purposes, or selling to third parties.

---

## 7. How and Where Do We Store Your Data?

Your personal data is stored primarily in **Google Firebase** infrastructure, which uses servers located in the United States and other regions globally. Firebase is a Google Cloud product that meets industry-standard data security certifications.

We take the security of your personal data seriously and implement the following measures:

- **Encryption in transit** — all data transmitted between the App and our backend services uses HTTPS / TLS encryption
- **Encryption at rest** — Firebase Firestore and Firebase Authentication encrypt stored data at rest
- **Access controls** — only the authenticated user can read or write their own data, enforced through Firebase Security Rules
- **Principle of least privilege** — our Firebase Security Rules (`firestore.rules`) are configured so that users can only access their own data records
- **No retention of scan images** — images captured for the AI Scan feature are not stored on our servers or databases

Despite these measures, no method of electronic transmission or storage is 100% secure. We cannot guarantee the absolute security of your information, but we will notify you if we become aware of a breach affecting your personal data.

---

## 8. Do We Share Your Personal Data?

**We do not sell, rent, or trade your personal data to any third party.**

We share your personal data only with the following categories of third-party service providers who help us operate the App. Each is contractually required to protect your data and use it only for the purpose for which it was shared:

| Service Provider | Purpose | Data Shared |
|---|---|---|
| **Firebase / Google** | Authentication, database (Firestore), cloud infrastructure | UID, name, email, quiz data |
| **Apple Inc.** | Sign in with Apple authentication; In-App Purchase processing | Authentication token; payment transaction (Apple retains full payment details) |
| **RevenueCat Inc.** | Subscription and entitlement management | App User ID, product identifier, entitlement status, transaction date |
| **OpenRouter (via openai SDK)** | AI quiz generation and homework image analysis | Quiz parameters (subject, age, country, language); homework images (not personally identifiable) |

All third-party providers are required to provide an equivalent level of data protection as described in this policy. We do not authorize them to use your data for their own independent purposes.

We may also disclose personal data in the following limited circumstances:

- **Legal compliance** — if required by law, court order, or government authority
- **Protection of rights** — if necessary to protect the rights, property, or safety of Qoozr, our users, or the public
- **Business transfers** — in the event of a merger, acquisition, or sale of all or part of our business, your data may be transferred to the acquiring entity under the same privacy protections described in this policy

---

## 9. Sign-On Procedures

### 9.1 Sign in with Apple

Qoozr offers **Sign in with Apple** as an authentication method. When you choose this option, Apple authenticates your identity and shares a limited set of information with us (subject to your preferences set in your Apple ID account). Apple may share your name and email address (or a private relay email) with us. Apple may also provide information about whether you are logged in to your Apple ID account.

The legal basis for this processing is your consent, given when you choose to sign in using your Apple ID.

**Provider:** Apple Inc., One Apple Park Way, Cupertino, CA 95014, USA
**Privacy Policy:** [https://www.apple.com/legal/privacy/](https://www.apple.com/legal/privacy/)

### 9.2 Sign in with Google

Qoozr offers **Sign in with Google** as an authentication method via the `@react-native-google-signin/google-signin` library and Firebase Authentication. When you choose this option, Google authenticates your identity and provides us with your Google account name, email address, and profile picture (if your Google account has one).

The legal basis for this processing is your consent, given when you choose to sign in using your Google Account.

**Provider:** Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland
**Privacy Policy:** [https://policies.google.com/privacy](https://policies.google.com/privacy)

---

## 10. In-App Purchases & Subscription Management

### 10.1 Apple In-App Purchase (StoreKit)

All digital purchases and subscriptions within Qoozr are processed exclusively through **Apple's In-App Purchase (IAP) system** using Apple StoreKit. Qoozr does not accept payments through any third-party payment gateway, external website, or any method other than Apple's IAP. This is in full compliance with Apple's App Store Review Guidelines.

Apple processes your payment transaction and retains your billing information. Qoozr does not receive, access, store, or process your payment card number, bank account details, or full Apple ID credentials at any time.

**Provider:** Apple Inc., One Apple Park Way, Cupertino, CA 95014, USA
**Apple's Privacy Policy:** [https://www.apple.com/legal/privacy/](https://www.apple.com/legal/privacy/)

### 10.2 RevenueCat — Subscription Management Layer

Qoozr uses **RevenueCat** as a subscription management and entitlement verification service. RevenueCat sits on top of Apple's IAP system and enables us to reliably grant, manage, and restore Pro access across sessions and reinstalls.

**What RevenueCat receives:**
- Your App User ID (either your Firebase UID or an anonymous RevenueCat-generated identifier)
- The subscription product identifier (e.g., Qoozr_Monthly, Qoozr_Annual)
- Your subscription entitlement status (active / expired)
- Transaction date and renewal status from Apple
- Device platform (iOS)

**What RevenueCat does NOT receive:**
- Your full name or email address
- Your payment card details or billing address
- Any quiz data, homework images, or educational content

RevenueCat is contractually obligated to use this data only to provide subscription management services to Qoozr and not for any independent commercial purpose.

**Provider:** RevenueCat Inc., 633 Tasman Drive, Sunnyvale, CA 94089, USA
**RevenueCat Privacy Policy:** [https://www.revenuecat.com/privacy](https://www.revenuecat.com/privacy)

### 10.3 Subscription Plans

Qoozr Pro is available in the following subscription tiers, all processed through Apple IAP:

| Plan | Details |
|---|---|
| **7-Day Free Trial** | 7 days of full Pro access at no charge, then converts to the Monthly plan |
| **Qoozr Pro Monthly** | Full Pro access, billed monthly |
| **Qoozr Pro Annual** | Full Pro access, billed annually (discounted rate) |

Pricing for each plan is clearly displayed on the paywall screen **before** you tap the subscribe button. No hidden charges apply.

The free tier of Qoozr is fully functional and can be tested and used without any purchase.

### 10.4 Restore Purchases

A **"Restore Purchases"** button is available on the Qoozr paywall screen. If you have previously subscribed to Qoozr Pro and reinstall the App or switch devices, tapping this button will verify your prior purchase with Apple and RevenueCat and restore your Pro access. No additional charge is made for restoring a valid, active subscription.

### 10.5 Subscription Renewal, Cancellation & Refunds

- Subscriptions **automatically renew** at the end of each billing period unless cancelled at least 24 hours before the renewal date
- Your Apple account will be charged for renewal within 24 hours prior to the end of the current billing period
- You can manage and cancel your subscription at any time through **iOS Settings → [Your Apple ID] → Subscriptions → Qoozr**
- Cancellation takes effect at the end of the current paid period — you retain Pro access until expiry
- Refund requests must be submitted directly to Apple through [https://reportaproblem.apple.com](https://reportaproblem.apple.com). Qoozr does not issue refunds directly.

---

## 11. Third-Party Services

We use the following third-party service providers to operate, power, and improve Qoozr. This section details each provider, the data they may process, and where to find their privacy policies.

### 11.1 Authentication & Cloud Infrastructure — Firebase (Google)

**Service:** Firebase Authentication & Cloud Firestore (database)
**Provider:** Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
**Data Processed:** Authentication tokens, User UID, name, email, all quiz and progress data stored in Firestore
**Privacy Policy:** [https://firebase.google.com/support/privacy](https://firebase.google.com/support/privacy)
**Google Privacy Policy:** [https://policies.google.com/privacy](https://policies.google.com/privacy)

Firebase Firestore stores all of your user profile data, quiz scores, and learning progress. Data is protected by Firebase Security Rules that enforce user-level access control — only you can read and write your own data.

### 11.2 AI Quiz Generation & Homework Analysis — OpenRouter

**Service:** AI language model API (GPT-4o-mini) used for quiz question generation and homework image analysis
**Provider:** OpenRouter Inc., USA
**Data Processed:** Quiz parameters (subject, age bracket, country, language); base64-encoded homework images for the Scan feature
**Note:** Personally identifiable information (name, email) is NOT sent to OpenRouter. Quiz prompts contain only educational context. Homework images are not linked to your account identity.
**OpenRouter Privacy Policy:** [https://openrouter.ai/privacy](https://openrouter.ai/privacy)
**Underlying Model Provider (OpenAI):** [https://openai.com/privacy](https://openai.com/privacy)

### 11.3 Subscription Management — RevenueCat

*(See Section 10.2 above for full details.)*

**Service:** In-App Purchase entitlement verification and subscription state management
**Provider:** RevenueCat Inc., 633 Tasman Drive, Sunnyvale, CA 94089, USA
**Privacy Policy:** [https://www.revenuecat.com/privacy](https://www.revenuecat.com/privacy)

### 11.4 Push Notifications — Expo Notifications

**Service:** Push notification delivery infrastructure
**Provider:** Expo (Expo Software Inc.) / Apple Push Notification Service (APNs)
**Data Processed:** Device push notification token
**Purpose:** Sending optional learning reminders, streak alerts, and important App updates
**Privacy Policy:** [https://expo.dev/privacy](https://expo.dev/privacy)

You can disable push notifications at any time through **iOS Settings → Notifications → Qoozr**.

### 11.5 Local Storage — AsyncStorage

Certain preferences and cached data (such as your language preference and locally cached quiz questions) are stored locally on your device using `@react-native-async-storage/async-storage`. This data never leaves your device and is not transmitted to our servers. It is cleared when you uninstall the App.

---

## 12. App Tracking Transparency (ATT)

In accordance with Apple's **App Tracking Transparency (ATT)** framework (iOS 14.5+), Qoozr uses `expo-tracking-transparency` to request your permission before any cross-app or cross-site tracking activity takes place.

**Qoozr does not display third-party advertisements** and does not participate in advertising networks. The ATT prompt, if shown, relates to any optional analytics or attribution that may be used to understand how users discover the App (e.g., App Store search vs. referral).

You can review and change your tracking preference at any time through:
**iOS Settings → Privacy & Security → Tracking → Qoozr**

If you deny tracking permission, all App features continue to function normally. No data is shared with advertising networks regardless of your ATT choice.

---

## 13. Children's Privacy (COPPA Compliance)

### 13.1 Overview

Qoozr is committed to protecting the privacy of children. The App includes an age bracket selection of **Ages 6–9**, which means children under the age of 13 may use the App. This Section 13 describes our practices regarding the collection, use, and disclosure of personal information from children under 13 ("Children"), in compliance with the **Children's Online Privacy Protection Act (COPPA)**.

Parents and legal guardians ("Parents") should review this section carefully before allowing their Children to use the App.

### 13.2 Parental Consent Required (Under 13)

Users under 13 years of age must obtain permission from their parent or legal guardian before using Qoozr. By allowing a Child to use the App, the Parent represents that:

(a) They have reviewed this Privacy Policy and consent to the collection practices described herein;
(b) The Child's use of the App complies with all applicable laws and regulations.

If we become aware that we have collected personal information from a Child without verified parental consent, we will take steps to delete that information as promptly as possible.

### 13.3 Limited Data Collection from Children

We collect only the **minimum amount of personal information** necessary to provide the App's educational service to Children. For users in the Ages 6–9 bracket, we collect:

- **Firebase Authentication UID** — a technical identifier to maintain the Child's account and learning session
- **Age bracket** (Ages 6–9) — to ensure all quiz content and AI-generated material is age-appropriate
- **Country selection** — to localize educational content
- **Quiz scores and progress data** — to show the Child their learning progress within the App
- **Notification token** — only if the Parent grants notification permission on the device

We do **not** collect the following from Children's accounts:
- Full name or email address beyond what the authentication provider supplies at sign-in
- Physical address
- Phone number
- Precise geolocation data
- Any information for advertising or marketing purposes

### 13.4 How We Use Children's Personal Information

We use data from Children's accounts **only** for the following limited purposes:

(a) To provide age-appropriate quiz content and educational features;
(b) To maintain the Child's account and track their learning progress within the App;
(c) To ensure the security and integrity of the service;
(d) To comply with legal obligations.

We do **not** use Children's personal information for:
- Targeted or behavioral advertising
- Building advertising or marketing profiles
- Training AI or machine learning models
- Any commercial purpose unrelated to providing the educational service

### 13.5 Disclosure of Children's Personal Information

We do not sell, rent, or disclose Children's personal information to third parties for their own commercial purposes. We may share Children's data only in the following extremely limited circumstances:

(a) **Service providers for internal operations** — Firebase (for account storage) and OpenRouter (for AI content generation, using only age bracket and educational parameters — no personally identifiable information). These providers are contractually prohibited from using Children's data for any purpose other than providing the specified service to Qoozr.

(b) **Legal compliance** — if required by law, court order, or government request.

(c) **Business transfers** — in the event of a merger or acquisition, subject to the acquiring entity maintaining the same level of COPPA-compliant data protection.

Children's accounts are **not** connected to advertising networks, social media platforms, analytics advertising partners, or any third-party AI model training programs.

### 13.6 Parental Rights and Controls

Parents have the following rights regarding their Child's personal information held by Qoozr:

**(a) Right to Review** — Parents may contact us to learn what information is associated with their Child's account.

**(b) Right to Delete** — Parents may request complete deletion of their Child's account and all associated data by contacting us at the address in Section 17. Upon a verified deletion request, we will delete the Child's account and all associated data within 30 days, except where retention is required by law.

**(c) Right to Refuse Further Collection** — Parents may contact us to request that we stop collecting further personal data from their Child. Note that because a persistent identifier is required for account functionality, this would result in account termination.

**(d) Right to Revoke Consent** — Parents may revoke their consent for the collection, use, and disclosure of their Child's personal information at any time by contacting us using the details in Section 17.

### 13.7 Children and AI Features

The AI Scan (Homework Helper) feature may be used by Children in the Ages 6–9 bracket with parental supervision. To protect Children's privacy when using AI features:

(a) Homework images sent for AI analysis contain **no personally identifiable information** about the Child (no name, face, or account details are included in the image prompt);
(b) Images are processed immediately for the requested educational purpose and are **not retained** by OpenRouter or by Qoozr beyond the duration of the analysis request;
(c) No data from a Child's use of AI features is used to train AI models — whether our own or third-party models;
(d) AI-generated responses are strictly educational in nature and designed to be age-appropriate based on the selected age bracket.

---

## 14. Data Retention and Deletion

### Retention

We retain your personal data for as long as your account remains active or as long as is necessary to provide you with the App's services. Specifically:

- **Account and authentication data** — retained for the lifetime of your active account
- **Quiz performance and progress data** — retained while your account is active
- **Locally cached questions** — stored on-device via AsyncStorage; cleared on app uninstall
- **Subscription and purchase records** — retained by RevenueCat and Apple for as long as required by their respective policies and applicable tax/financial regulations
- **AI scan images** — not retained; processed in real-time and discarded immediately

### Account Deletion

You may request the deletion of your account and all associated data at any time by:

1. Using the account deletion option in **App Settings → Profile → Delete Account** (where available in the App), or
2. Contacting us directly at **privacy@qoozr.app** *(update before submission)* with the subject line "Account Deletion Request"

Upon receiving a verified deletion request, we will:
- Delete your user record from Firebase Authentication and all associated data from Firestore within **30 days**
- Notify RevenueCat to remove your App User ID from their active records
- Confirm deletion to you by email

Please note: RevenueCat and Apple retain transaction records for legal and financial compliance purposes independent of our deletion. We cannot delete payment records held by Apple or RevenueCat on our behalf.

---

## 15. How Can I Access My Personal Data?

You have the right to request a copy of the personal data we hold about you (a "Subject Access Request").

To make a Subject Access Request:
- Email us at **privacy@qoozr.app** *(update before submission)* with the subject line "Subject Access Request"
- Please include your registered email address or Firebase UID to help us identify your account

There is no charge for a Subject Access Request unless your request is manifestly unfounded or excessive.

We aim to respond to all Subject Access Requests within **30 days** of receipt. In cases involving complex requests, we may require up to 60 days and will inform you of this in advance.

---

## 16. Changes to This Privacy Policy

We may update this Privacy Policy from time to time to reflect changes in our practices, new features, or changes in applicable law. When we update the policy, we will:

- Update the "Last Updated" date at the top of this document
- Post the updated policy at the public URL stated at the top of this document
- Notify you of material changes through an in-app notification or via email where we have your contact details

We recommend that you review this Privacy Policy periodically. Your continued use of the App after any changes constitutes your acceptance of the updated policy.

For material changes affecting Children's privacy practices, we will notify Parents directly and, where required by COPPA, obtain renewed parental consent before implementing the changes.

---

## 17. Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please contact us:

**Developer:** Kavuma Kigere Julius

**General Support:** support@qoozr.app *(update before submission)*

**Privacy & Data Requests:** privacy@qoozr.app *(update before submission)*

**Subject Line for data requests:** Please use one of the following:
- "Subject Access Request" — to request a copy of your data
- "Account Deletion Request" — to delete your account and data
- "Children's Privacy" — for COPPA-related parental inquiries

We aim to respond to all privacy-related inquiries within **10 business days**.

---

*This Privacy Policy was written to comply with Apple's App Store Review Guidelines, the Children's Online Privacy Protection Act (COPPA), and applicable data protection standards. For the full Apple App Store submission checklist compliance mapping, refer to the internal `appsubmitchecklist.md` document.*
