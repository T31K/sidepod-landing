import { Layout } from "@components/Layout";

export default function Home() {
    return (
        <Layout>
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 p-4 md:p-20">
                <h1 className="my-5 font-bold text-xl sm:text-2xl lg:text-3xl text-center">
                    Privacy Policy
                </h1>
                <div className="flex flex-col space-y-4">
                    <p>
                        This Privacy Policy outlines how Sidepod (the App)
                        collects, uses, and protects the personal information of
                        its users. The App is designed for macOS and allows
                        users to control Spotify. By using the App, you agree to
                        the collection and use of your personal information as
                        described in this Privacy Policy.
                    </p>

                    <h2 className="font-semibold text-lg">
                        1. Information Collection and Use:
                    </h2>
                    <p>
                        The App collects and uses the following information for
                        the purpose of connecting the user to Spotify&apos;s
                        API:
                    </p>
                    <p>
                        <strong>Email Address:</strong> The App strictly
                        collects the user&apos;s email address. This information
                        is used solely for the purpose of connecting the user to
                        Spotify&apos;s API and providing access to the
                        App&apos;s functionalities.
                    </p>

                    <h2 className="font-semibold text-lg">2. Data Security:</h2>
                    <p>
                        The App takes reasonable measures to protect the
                        collected personal information from unauthorized access,
                        disclosure, alteration, or destruction. However, no
                        method of transmission or electronic storage is
                        completely secure, and therefore, the App cannot
                        guarantee the absolute security of the information.
                    </p>

                    <h2 className="font-semibold text-lg">
                        3. Third-Party Services:
                    </h2>
                    <p>
                        The App may use third-party services, such as
                        Spotify&apos;s API, to provide its functionalities.
                        These services have their own privacy policies governing
                        the collection, use, and disclosure of personal
                        information. We encourage you to review the privacy
                        policies of these third-party services.
                    </p>

                    <h2 className="font-semibold text-lg">
                        4. Data Retention:
                    </h2>
                    <p>
                        The App retains the user&apos;s email address for as
                        long as necessary to provide access to the App&apos;s
                        functionalities. If a user decides to revoke access or
                        delete their account, their email address will be
                        promptly deleted from our records.
                    </p>

                    <h2 className="font-semibold text-lg">
                        5. Information Sharing:
                    </h2>
                    <p>
                        The App does not share or sell personal information with
                        any third parties, except as required by law or with the
                        user&apos;s explicit consent.
                    </p>

                    <h2 className="font-semibold text-lg">
                        6. Children&apos;s Privacy:
                    </h2>
                    <p>
                        The App does not knowingly collect personal information
                        from individuals under the age of 13. If we become aware
                        that we have collected personal information from a child
                        without parental consent, we will take steps to promptly
                        delete the information.
                    </p>

                    <h2 className="font-semibold text-lg">
                        7. Changes to the Privacy Policy:
                    </h2>
                    <p>
                        The App may update this Privacy Policy from time to
                        time. We will notify users of any significant changes by
                        providing a prominent notice within the App or by
                        sending an email to the registered email address.
                    </p>

                    <h2 className="font-semibold text-lg">8. Contact Us:</h2>
                    <p>
                        If you have any questions or concerns about this Privacy
                        Policy or the App&apos;s privacy practices, please
                        contact us at contact@sidepod.app.
                    </p>
                </div>
            </div>
        </Layout>
    );
}
