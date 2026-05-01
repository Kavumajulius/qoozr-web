import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions — Qoozr: AI Tutor & Quiz",
    description: "Read Qoozr: AI Tutor & Quiz's Terms & Conditions before using our AI learning platform.",
};

export default function TermsPage() {
    const sections = [
        {
            title: "Introduction & Acceptance",
            content: [
                "Welcome to Qoozr: AI Tutor & Quiz, an AI-powered educational quiz and homework assistant application (the \"App\") developed and operated by Kavuma Kigere Julius (\"we,\" \"us,\" or \"our\").",
                "These Terms and Conditions (\"Terms\") govern your access to and use of the Qoozr mobile application, available on the Apple App Store. Please read these Terms carefully before downloading, installing, or using the App.",
                "By downloading, installing, registering for, or using the App — including by tapping \"Continue,\" \"Sign In,\" or \"Get Started\" — you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not use the App.",
                "If you are under the age of 13, your parent or legal guardian must read and accept these Terms on your behalf before you use the App. See Section 11 for Children's Terms."
            ],
        },
        {
            title: "About Qoozr",
            content: [
                "Qoozr: AI Tutor & Quiz is an AI-powered educational platform designed to make learning engaging, personalized, and accessible. The App provides:",
                [
                    "AI-Generated Quizzes — Dynamic quiz questions generated on demand by AI (OpenRouter / GPT-4o-mini) across 30+ subjects, calibrated to your age bracket and country",
                    "AI Scan (Homework Helper) — An AI-powered tool that analyzes photographs of homework or educational text and provides step-by-step explanations and solutions",
                    "QuickScore Dashboard — A progress tracking system showing your quiz scores, subject mastery percentages, and daily study streaks",
                    "Multilingual Support — Available in 7 languages: English, German, Spanish, French, Korean, Japanese, and Portuguese",
                    "Qoozr Pro Subscription — An optional paid subscription tier unlocking full access to all features"
                ],
                "Qoozr is intended as a supplementary educational tool. It is not a replacement for formal schooling, qualified teachers, or professional academic advice."
            ],
        },
        {
            title: "Eligibility & Account Requirements",
            content: [
                "To legally access and utilize the Qoozr platform, you must be at least 13 years of age. Users situated between the ages of 13 and 18, or the legal age of majority in their respective jurisdiction, must obtain explicit parental or legal guardian consent prior to creating an account. By registering for our Services, you represent, warrant, and guarantee that you fulfill these fundamental eligibility criteria.",
                [
                    "Ages 6–12 (under 13): A parent or legal guardian must consent to account creation and use of the App on behalf of the child",
                    "Ages 13–17: Minors may use the App; parental awareness is encouraged",
                    "Ages 18+: Full independent access"
                ],
                "We do not knowingly allow users under the age of 6 to use the App. If we become aware that an account has been created for a child under 6 without parental consent, we will take steps to suspend or delete that account."
            ],
        },
        {
            title: "Parental Consent (Under 13)",
            content: [
                "If you are a parent or legal guardian creating or permitting a child under 13 to use Qoozr:",
                [
                    "You accept these Terms on behalf of your child",
                    "You confirm that you have reviewed our Privacy Policy — specifically Section 13 (Children's Privacy / COPPA) — and consent to the limited data collection practices described therein",
                    "You are responsible for supervising your child's use of the App, including their use of the AI Scan feature",
                    "You may contact us at privacyinquiry@qoozrapp.com at any time to review, correct, or delete your child's data"
                ]
            ],
        },
        {
            title: "Account Accuracy",
            content: [
                "You agree to provide accurate, current, and complete information when creating your account and to keep that information up to date. Providing false or misleading information — including falsely claiming to be over 13 — is a violation of these Terms and may result in account termination."
            ],
        },
        {
            title: "Account Registration & Security",
            content: [
                "Sign-In Methods: Qoozr uses third-party single sign-on (SSO) services for authentication. You may sign in using:",
                [
                    "Sign in with Apple — provided by Apple Inc.",
                    "Sign in with Google — provided by Google LLC, managed through Firebase Authentication"
                ],
                "By signing in via one of these methods, you authorize Qoozr to receive your basic profile information (name and email address) from the authentication provider in accordance with your settings on their respective platform. You agree to the terms of service of the authentication provider you choose."
            ],
        },
        {
            title: "Account Responsibility",
            content: [
                "Your account is personal to you. You are responsible for:",
                [
                    "Maintaining the confidentiality of your Apple ID or Google Account credentials",
                    "All activity that occurs under your account, whether or not authorized by you",
                    "Immediately notifying us at support@qoozrapp.com if you become aware of any unauthorized use of your account"
                ],
                "We are not liable for any loss or damage arising from your failure to maintain the security of your sign-in credentials."
            ],
        },
        {
            title: "Account Termination by Us",
            content: [
                "We reserve the right to suspend or permanently terminate your account, with or without prior notice, if:",
                [
                    "You violate any provision of these Terms",
                    "You use the App in a manner that is harmful to other users, to us, or to third parties",
                    "You provide false information during registration or use",
                    "We are required to do so by law or court order",
                    "We cease to operate the App"
                ],
                "Upon termination, your right to use the App immediately ceases. You may request deletion of your account data as described in Section 14 of our Privacy Policy."
            ],
        },
        {
            title: "Account Deletion by You",
            content: [
                "You may delete your account at any time by:",
                [
                    "Using App Settings → Profile → Delete Account (where available in the App), or",
                    "Contacting us at privacyinquiry@qoozrapp.com with the subject \"Account Deletion Request\""
                ],
                "Account deletion is subject to our data retention practices as described in the Privacy Policy."
            ],
        },
        {
            title: "Free Tier & Qoozr Pro Features",
            content: [
                "Qoozr is free to download and includes a fully functional free tier. No purchase is required to access the App's core educational features. The free tier includes:",
                [
                    "Access to AI-generated quizzes across available subjects",
                    "Basic QuickScore progress tracking",
                    "Limited access to the AI Scan (Homework Helper) feature",
                    "Support for all 7 languages"
                ],
                "The free tier is complete and testable without any payment. Apple's reviewers and new users can fully evaluate the App's value without making a purchase."
            ],
        },
        {
            title: "Qoozr Pro Features",
            content: [
                "Qoozr Pro is an optional paid subscription that unlocks the full feature set, including but not limited to:",
                [
                    "Unlimited AI quiz generation across all subject categories",
                    "Full and unlimited access to the AI Scan (Homework Helper) feature",
                    "Full QuickScore dashboard with detailed subject mastery analytics",
                    "Priority AI response speeds",
                    "Access to all future Pro features as they are released"
                ],
                "A complete and up-to-date list of Pro features is available within the App on the subscription paywall screen."
            ],
        },
        {
            title: "In-App Purchases & Subscription Billing",
            content: [
                "Apple In-App Purchase (StoreKit): All paid features in Qoozr are available exclusively through Apple's In-App Purchase (IAP) system, using Apple StoreKit. We do not accept payments through any external website, third-party payment processor, or any method other than Apple's IAP system, in full compliance with Apple's App Store Review Guidelines.",
                "All billing is handled by Apple. Your Apple ID account will be charged upon purchase confirmation. Qoozr does not receive, store, or process your payment card details, bank information, or full Apple ID credentials."
            ],
        },
        {
            title: "Subscription Plans & Pricing",
            content: [
                "Qoozr Pro is available in the following subscription tiers. Pricing is displayed clearly on the in-app paywall screen before you tap the subscribe or purchase button:",
                [
                    "7-Day Free Trial — Full Pro access for 7 days at no charge, then automatically converts to the Monthly plan",
                    "Qoozr Pro Monthly — Full Pro access, billed monthly",
                    "Qoozr Pro Annual — Full Pro access, billed annually at a discounted rate"
                ],
                "Exact pricing in your local currency is displayed on the paywall screen before purchase. All prices are inclusive of applicable taxes as determined by Apple."
            ],
        },
        {
            title: "Auto-Renewal Disclosure",
            content: [
                "Important: Qoozr Pro subscriptions automatically renew at the end of each billing period unless you cancel at least 24 hours before the end of the current period.",
                [
                    "Your Apple ID account will be charged for renewal within 24 hours prior to the end of the current billing period",
                    "The renewal charge will be at the same price as your current plan, unless we have notified you of a price change",
                    "You will not receive a separate renewal notification from Qoozr — Apple manages the renewal billing cycle",
                    "If you started with the 7-Day Free Trial and do not cancel before the trial ends, your subscription will automatically convert to the Monthly plan and you will be billed accordingly"
                ]
            ],
        },
        {
            title: "Cancellation",
            content: [
                "You may cancel your Qoozr Pro subscription at any time through:",
                "iOS Settings → [Your Apple ID] → Subscriptions → Qoozr → Cancel Subscription",
                "Alternatively, you may manage subscriptions directly at: https://apps.apple.com/account/subscriptions",
                "Cancellation takes effect at the end of the current paid billing period. You will retain full Qoozr Pro access until that date. No partial refunds are issued for unused days in a billing period.",
                "Deleting the App from your device does not cancel your subscription. You must cancel through your Apple ID settings as described above."
            ],
        },
        {
            title: "Refund Policy",
            content: [
                "All refund requests for Qoozr Pro purchases must be submitted directly to Apple, as Apple processes all payments:",
                "Report a Problem: https://reportaproblem.apple.com",
                "Apple's refund decisions are final and at their sole discretion.",
                "Qoozr does not issue refunds directly. If you believe you have been charged in error, please contact us at support@qoozrapp.com and we will do our best to assist you in working with Apple."
            ],
        },
        {
            title: "Restore Purchases",
            content: [
                "If you have previously purchased Qoozr Pro and reinstall the App, switch to a new device, or find that your Pro access has not been correctly applied, you may restore your purchase at no additional charge.",
                "To restore your purchase: Open the App and navigate to the subscription/paywall screen, then tap the \"Restore Purchases\" button.",
                "The App will verify your purchase history with Apple and RevenueCat and restore your active entitlement if one exists. You must be signed in to the same Apple ID used for the original purchase for restoration to succeed.",
                "Restoration does not create new subscription charges. If you have no active or valid prior subscription, restoration will not grant Pro access."
            ],
        },
        {
            title: "AI-Powered Features & Accuracy Disclaimer",
            content: [
                "The Qoozr Quiz Engine uses artificial intelligence (via OpenRouter / GPT-4o-mini) to generate quiz questions dynamically based on your selected subject, age bracket, country, and language. Because questions are generated by AI on demand, question sets vary each session, providing a fresh learning experience."
            ],
        },
        {
            title: "AI Scan (Homework Helper)",
            content: [
                "The AI Scan feature allows you to photograph homework, worksheets, or educational text. The image is transmitted to our AI processing service (OpenRouter), which analyzes the content and provides:",
                [
                    "An identification of the subject and question(s)",
                    "A simple explanation of the underlying concept",
                    "Step-by-step solution guidance",
                    "A final answer"
                ],
                "Images submitted for AI Scan are used only for the immediate analysis request and are not stored on our servers or retained by our AI provider beyond the time necessary to process your request. See Section 5C of our Privacy Policy for full details."
            ],
        },
        {
            title: "AI Accuracy Disclaimer",
            content: [
                "AI-generated content — including quiz questions, answer explanations, and homework solutions — may not always be accurate, complete, or up to date.",
                "We make no warranty or representation that:",
                [
                    "Quiz questions are error-free or reflect current curriculum standards",
                    "Homework solutions are mathematically or factually correct in all cases",
                    "AI-generated explanations are a substitute for teacher or tutor review"
                ],
                "AI technology has inherent limitations. Outputs should be used as a learning aid and starting point for understanding, not as a definitive or authoritative source of academic truth."
            ],
        },
        {
            title: "No Reliance for Critical Decisions",
            content: [
                "You agree not to rely solely on AI-generated content from Qoozr for:",
                [
                    "Formal examinations or assessments",
                    "Medical, legal, financial, or other professional advice",
                    "Any situation where an error could cause significant harm"
                ],
                "Always verify important information with a qualified teacher, tutor, or authoritative educational resource."
            ],
        },
        {
            title: "Academic Integrity Policy",
            content: [
                "Qoozr is designed to support learning, not to replace it. The AI Scan (Homework Helper) feature is intended to help you understand how to solve problems — not to produce answers for you to submit as your own work without understanding.",
                "You agree that you will:",
                [
                    "Use the AI Scan feature as a learning tool to understand concepts and problem-solving processes",
                    "Review and genuinely attempt to understand the step-by-step solutions provided before using them in any academic context",
                    "Comply with the academic integrity policies of your school, university, or educational institution",
                    "Take personal responsibility for the work you submit in academic settings"
                ]
            ],
        },
        {
            title: "Prohibited Academic Conduct",
            content: [
                "You agree that you will not:",
                [
                    "Use Qoozr to commit academic fraud, plagiarism, or any other form of academic dishonesty as defined by your institution",
                    "Submit AI-generated answers directly as your own work without genuine understanding or disclosure where required by your institution",
                    "Use the App in any examination or assessment context where outside assistance is prohibited"
                ],
                "We are committed to building tools that make learners smarter, not dependent. The step-by-step format of our AI Scan responses is specifically designed to teach the process of solving a problem, not just deliver an answer."
            ],
        },
        {
            title: "Acceptable Use Policy",
            content: [
                "You are granted a limited, non-exclusive, non-transferable, revocable licence to use the App solely for your personal, non-commercial educational purposes in accordance with these Terms."
            ],
        },
        {
            title: "Prohibited Conduct",
            content: [
                "You agree that you will not:",
                [
                    "Reverse engineer, decompile, or disassemble any part of the App or attempt to access its source code",
                    "Use the App for any commercial purpose — including reselling access, creating derivative products based on its output, or building competing services — without our prior written consent",
                    "Circumvent or attempt to bypass any subscription restriction, paywall, or feature gate in the App",
                    "Submit any content via the AI Scan feature that is illegal, obscene, hateful, defamatory, or that violates the rights of any third party",
                    "Upload personal information of others — including other people's faces, private documents, or identifying information — through the AI Scan feature",
                    "Use automated scripts, bots, or tools to access, scrape, or interact with the App in any manner not permitted by these Terms",
                    "Interfere with or disrupt the integrity or performance of the App or its connected servers and services",
                    "Impersonate any person or entity or misrepresent your affiliation with any person or entity when using the App",
                    "Violate any applicable local, national, or international law or regulation while using the App"
                ],
                "Violation of this Acceptable Use Policy may result in immediate account suspension or termination without refund."
            ],
        },
        {
            title: "Intellectual Property",
            content: [
                "All content within the App — including but not limited to the Qoozr name, logo, branding, app design, user interface, AI prompt structures, quiz formats, and software code — is owned by or licensed to Kavuma Kigere Julius and is protected by applicable intellectual property laws.",
                "You are granted a limited licence to use the App for personal educational purposes only. Nothing in these Terms transfers any ownership of Qoozr's intellectual property to you."
            ],
        },
        {
            title: "User-Submitted Content (Homework Images)",
            content: [
                "When you use the AI Scan feature, you submit images (\"User Content\") to the App for AI processing. You retain full ownership of any images you submit.",
                "By submitting an image, you grant us a limited, temporary, non-exclusive licence to process that image through our AI services solely for the purpose of delivering the requested AI analysis back to you. This licence expires as soon as the analysis request is completed and the image is discarded.",
                "We do not claim any ownership over your User Content. We do not store, reuse, or sell your submitted images. We do not use your images to train AI models."
            ],
        },
        {
            title: "Content Warranties",
            content: [
                "You represent and warrant that:",
                [
                    "You own or have the right to submit any content you upload",
                    "Your submitted content does not violate the rights of any third party (including privacy rights, copyright, or intellectual property rights)",
                    "Your submitted content does not contain illegal material"
                ]
            ],
        },
        {
            title: "Feedback",
            content: [
                "If you provide feedback, suggestions, or ideas about the App, you grant us a perpetual, irrevocable, royalty-free licence to use that feedback for any purpose, including improving the App, without obligation to compensate you."
            ],
        },
        {
            title: "Children's Terms (COPPA Supplement)",
            content: [
                "This section supplements the Children's Privacy provisions in Section 13 of our Privacy Policy and applies specifically to users under the age of 13.",
                "Parents and guardians:",
                [
                    "By permitting your child to use Qoozr, you accept these Terms on their behalf and take full responsibility for their use of the App",
                    "You are responsible for supervising your child's use of the AI Scan feature. Images submitted by your child are processed by our AI service (OpenRouter) and are not stored — but you should be aware that any image your child captures is transmitted over the internet for processing",
                    "The App's AI Scan feature provides educational assistance. You should help your child understand the difference between using AI as a learning aid and submitting AI-generated work as their own in academic settings (see Section 8)",
                    "You may contact us at privacyinquiry@qoozrapp.com to review, update, or request deletion of your child's personal data at any time. We will respond within 10 business days",
                    "Qoozr does not display third-party advertisements and does not use Children's data for advertising or AI model training purposes"
                ]
            ],
        },
        {
            title: "Children Under 13",
            content: [
                "You should use the App with your parent or guardian's knowledge and permission. If your parent or guardian has not agreed to these Terms, you must not use the App. Please ask them to read these Terms and the Privacy Policy with you."
            ],
        },
        {
            title: "Third-Party Services",
            content: [
                "The App integrates with the following third-party services to operate. We are not responsible for the practices, content, or availability of these third-party services:",
                [
                    "Firebase Authentication — Google LLC — Account sign-in and security",
                    "Cloud Firestore — Google LLC — Storing your progress and quiz data",
                    "Sign in with Apple — Apple Inc. — Apple SSO authentication",
                    "Sign in with Google — Google LLC — Google SSO authentication",
                    "Apple IAP (StoreKit) — Apple Inc. — Processing all in-app purchases",
                    "RevenueCat — RevenueCat Inc. — Subscription entitlement management",
                    "OpenRouter / GPT-4o-mini — OpenRouter Inc. — AI quiz generation and image analysis",
                    "Expo Notifications — Expo (Software Inc.) — Push notification delivery"
                ],
                "By using the App, you acknowledge that your use of these third-party services is subject to their respective terms and privacy policies. We are not a party to your agreements with these providers."
            ],
        },
        {
            title: "Push Notifications",
            content: [
                "If you grant notification permission, Qoozr may send you push notifications including:",
                [
                    "Learning reminders — nudges to maintain your daily study streak",
                    "Streak alerts — warnings that your streak is at risk",
                    "Feature updates — notifications about new subjects, features, or app updates",
                    "Subscription notices — reminders about trial expiry (if applicable)"
                ],
                "Push notifications are entirely optional. You may disable them at any time through: iOS Settings → Notifications → Qoozr → Allow Notifications (toggle off)",
                "Disabling notifications has no effect on the App's core functionality or your subscription status."
            ],
        },
        {
            title: "Disclaimer of Warranties",
            content: [
                "The App is provided \"as is\" and \"as available\" without warranties of any kind, either express or implied.",
                "To the fullest extent permitted by applicable law, Kavuma Kigere Julius expressly disclaims all warranties, including but not limited to:",
                [
                    "Implied warranties of merchantability and fitness for a particular purpose — we make no warranty that the App is suitable for any specific educational purpose or will meet your specific learning needs",
                    "Accuracy of AI-generated content — quiz questions, homework solutions, and AI explanations are generated by AI and may contain errors. We do not warrant that any AI-generated content is accurate, complete, current, or free from errors (see Section 7.3)",
                    "Uninterrupted or error-free operation — we do not warrant that the App will always be available, operate without interruption, be free from bugs or errors, or that defects will be corrected",
                    "Third-party service availability — we are not responsible for downtime or errors in third-party services including Firebase, OpenRouter, RevenueCat, or Apple's IAP system that may affect App functionality"
                ],
                "Nothing in these Terms affects your statutory rights as a consumer under applicable law."
            ],
        },
        {
            title: "Limitation of Liability",
            content: [
                "To the fullest extent permitted by applicable law:",
                [
                    "Kavuma Kigere Julius shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the App, including but not limited to: loss of data, loss of educational progress, or any harm resulting from reliance on AI-generated content",
                    "Our total aggregate liability to you for any claim arising out of or relating to these Terms or your use of the App shall not exceed the amount you paid for Qoozr Pro in the 12 months preceding the claim, or USD $10, whichever is greater",
                    "AI content errors — We are not liable for any academic consequence, grade impact, or educational harm arising from reliance on AI-generated quiz questions, explanations, or homework solutions. You use the AI Scan feature and quiz engine at your own discretion and risk",
                    "Third-party service failures — We are not liable for any loss or damage caused by outages, errors, or changes in third-party services (Firebase, OpenRouter, RevenueCat, Apple IAP) that are outside our control"
                ],
                "Some jurisdictions do not allow the exclusion or limitation of certain warranties or liabilities. In such jurisdictions, the above limitations apply only to the extent permitted by law."
            ],
        },
        {
            title: "Indemnification",
            content: [
                "You agree to defend, indemnify, and hold harmless Kavuma Kigere Julius and any related parties from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in any way connected with:",
                [
                    "Your use of the App in violation of these Terms",
                    "Your violation of any third party's rights, including intellectual property rights or privacy rights",
                    "Any content you submit through the AI Scan feature that infringes on the rights of others",
                    "Your violation of any applicable law or regulation"
                ]
            ],
        },
        {
            title: "Changes to These Terms",
            content: [
                "We may update these Terms from time to time. When we do, we will:",
                [
                    "Update the \"Last Updated\" date at the top of this document",
                    "Post the updated Terms at the public URL stated at the top of this document",
                    "For material changes, notify you through an in-app notification or email (where we hold your contact information)"
                ],
                "Your continued use of the App after updated Terms take effect constitutes your acceptance of the revised Terms. If you do not agree to the updated Terms, you must stop using the App and may request account deletion as described in our Privacy Policy.",
                "For changes that materially affect Children's use of the App, we will notify Parents directly and obtain renewed parental consent where required by COPPA before the changes take effect."
            ],
        },
        {
            title: "Governing Law & Dispute Resolution",
            content: [
                "These Terms are governed by and construed in accordance with the laws of the Republic of Uganda, without regard to its conflict of law provisions."
            ],
        },
        {
            title: "Informal Resolution First",
            content: [
                "We believe most issues can be resolved by talking directly. Before initiating any formal legal action, you agree to contact us at support@qoozrapp.com to describe your concern and give us a reasonable opportunity (not less than 30 days) to resolve it informally."
            ],
        },
        {
            title: "Dispute Resolution",
            content: [
                "If a dispute cannot be resolved informally, any claim arising out of or relating to these Terms or the App shall be resolved through binding arbitration or in the courts of competent jurisdiction in the Republic of Uganda."
            ],
        },
        {
            title: "No Class Actions",
            content: [
                "To the fullest extent permitted by applicable law, you waive any right to bring claims as a plaintiff or class member in any class action, consolidated action, or representative action proceeding."
            ],
        },
        {
            title: "Contact Us",
            content: [
                "For questions, concerns, or legal notices regarding these Terms and Conditions, please contact:",
                [
                    "Developer: Kavuma Kigere Julius",
                    "General Support: support@qoozrapp.com",
                    "Legal & Privacy Contact: privacyinquiry@qoozrapp.com"
                ],
                "Subject Lines for specific requests:",
                [
                    "\"Terms Question\" — for questions about these Terms",
                    "\"Account Deletion Request\" — to request account deletion",
                    "\"Children's Privacy\" — for COPPA-related parental inquiries",
                    "\"Subscription Issue\" — for billing or subscription concerns"
                ],
                "We aim to respond to all inquiries within 10 business days."
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
                        Effective: April 28, 2026
                    </div>
                    <h1 className="text-[56px] md:text-[72px] leading-[1] font-medium tracking-tighter text-white mb-8">
                        Terms & <span className="text-accent italic">Conditions</span>
                    </h1>
                    <p className="text-[18px] text-white/50 leading-relaxed mx-auto max-w-[600px]">
                        Please read these Terms & Conditions carefully before using Qoozr: AI Tutor & Quiz. They govern your use of our AI-powered educational platform.
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
                                    <span className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center text-[15px] font-bold flex-shrink-0">
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

                    {/* Related Documents */}
                    <div className="mt-20 border-b border-border/20 pb-20">
                        <div className="flex flex-col items-center justify-center gap-4 mb-10 text-center">
                            <span className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center text-[15px] font-bold flex-shrink-0">
                                {sections.length + 1}
                            </span>
                            <h2 className="text-[32px] font-medium text-text-main tracking-tight">Related Documents</h2>
                        </div>
                        <div className="px-4 flex flex-col items-center gap-6">
                            <p className="text-[16px] text-text-muted leading-relaxed text-center max-w-[680px]">
                                These Terms and Conditions should be read together with our Privacy Policy, which provides additional important information about how we collect, use, and protect your personal data.
                            </p>
                            <Link
                                href="/privacy-policy"
                                className="inline-flex items-center gap-2 bg-white border border-border text-text-main px-8 py-4 rounded-full font-bold text-[15px] hover:bg-[#f7f7f7] transition-all"
                            >
                                View Privacy Policy
                            </Link>
                        </div>
                    </div>

                    {/* Contact Box */}
                    <div className="mt-20 bg-[#f9f9f9] rounded-[32px] p-12 border border-border/30 text-center flex flex-col items-center">
                        <h3 className="text-[24px] font-medium text-text-main mb-4">Have questions about our Terms?</h3>
                        <p className="text-[16px] text-text-muted leading-relaxed mb-8 max-w-[500px]">
                            We're dedicated to ensuring you fully understand these agreements. Reach out to our legal support team at any time for clarification.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="mailto:support@qoozrapp.com"
                                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold text-[15px] hover:scale-[1.02] active:scale-95 transition-all"
                            >
                                Contact Legal Team
                            </a>
                            <Link
                                href="/privacy-policy"
                                className="inline-flex items-center gap-2 bg-white border border-border text-text-main px-8 py-4 rounded-full font-bold text-[15px] hover:bg-[#f7f7f7] transition-all"
                            >
                                View Privacy Policy
                            </Link>
                        </div>
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