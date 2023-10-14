import { Layout } from "@components/Layout";

export default function RefundPolicy() {
    return (
        <Layout>
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 p-4 md:p-20">
                <h1 className="my-5 font-bold text-xl sm:text-2xl lg:text-3xl text-center">
                    Refund Policy
                </h1>
                <div className="flex flex-col space-y-4">
                    <p>
                        This Refund Policy outlines the terms and conditions for
                        refunds related to the use of the Sidepod App ("the
                        App"). By using the App, you agree to comply with this
                        refund policy.
                    </p>

                    <h2 className="font-semibold text-lg">One-Time Payment:</h2>
                    <p>
                        The Sidepod App uses a one-time payment model. Once a
                        payment is made for the app's premium features, it is
                        final. There are no automatic recurring charges or
                        subscriptions linked to it, or any hidden charges
                        involved.
                    </p>

                    <h2 className="font-semibold text-lg">
                        No Questions Asked Refund:
                    </h2>
                    <p>
                        If for any reason you're not satisfied with the App, you
                        can request a refund. No explanations or reasons are
                        required.
                    </p>

                    <h2 className="font-semibold text-lg">
                        How to Request a Refund:
                    </h2>
                    <p>
                        Please contact our support team at{" "}
                        <a
                            href="mailto:contact@sidepod.app"
                            className="text-blue-500 underline"
                        >
                            contact@sidepod.app
                        </a>
                        .
                    </p>
                    <p>
                        Once your refund is approved, you will continue to have
                        access to premium features & updates until the end of
                        that month.
                    </p>

                    <h2 className="font-semibold text-lg">
                        Refund Amount and Method:
                    </h2>
                    <p>
                        If you request a refund, we will return the full amount
                        paid for the App via the original payment method you
                        used for your purchase.
                    </p>

                    <h2 className="font-semibold text-lg">
                        Changes to the Refund Policy:
                    </h2>
                    <p>
                        We may modify or update this Refund Policy at any time.
                        Changes will be effective immediately upon posting the
                        revised policy. We encourage you to periodically review
                        this policy.
                    </p>

                    <h2 className="font-semibold text-lg">Contact Us:</h2>
                    <p>
                        If you have any questions or need assistance, please
                        reach out to our support team at{" "}
                        <a
                            href="mailto:contact@sidepod.app"
                            className="text-blue-500 underline"
                        >
                            contact@sidepod.app
                        </a>
                        .
                    </p>
                </div>
            </div>
        </Layout>
    );
}
