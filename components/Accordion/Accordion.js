import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import clsx from "clsx";

const accordionData = [
    {
        id: uuid(),
        title: "Does Sidepod have Spotify approval?",
        isOpen: false,
        content:
            "Yes, Sidepod has obtained full approval from Spotify. We adhere to Spotify's guidelines and policies, ensuring that our app and its features are compliant and authorized for use with the Spotify API."
    },
    {
        id: uuid(),
        title: "How much does the premium version cost?",
        isOpen: false,
        content:
            "The premium version is available for a one-time payment of $19.99, granting access to premium features. This includes one year of free updates to ensure continuous enhancements and improvements."
    },
    {
        id: uuid(),
        title: "What is the refund policy?",
        isOpen: false,
        content:
            "Our refund policy is customer-oriented and straightforward. We process all refund requests promptly, no questions asked. We strive to ensure complete customer satisfaction and a hassle-free experience. Please read our refund policy for full details."
    },
    {
        id: uuid(),
        title: "What will I get when I buy this app?",
        isOpen: false,
        content:
            "When you purchase this app, you will be entitled to enjoy all premium features, as well as all future updates for 1 year."
    },
    {
        id: uuid(),
        title: "What payment methods are available?",
        isOpen: false,
        content:
            "We accept payments through Stripe, a trusted and secure platform. Sidepod will never request any payment details directly. Instead, the only way you can pay is through the app settings page, it redirects you to the official payment page secured with Stripe."
    },
    {
        id: uuid(),
        title: "Will I receive an invoice for my purchase?",
        isOpen: false,
        content:
            "Absolutely! We provide an invoice for all purchases made through our platform. The invoice will be sent directly to the email address associated with your account, ensuring transparency and record-keeping."
    },
    {
        id: uuid(),
        title: "How do I update my app?",
        isOpen: false,
        content:
            "Open the settings window via the menubar update section on the top bar. Then navigate to the update tab. Click on 'Update App'."
    },
    {
        id: uuid(),
        title: "What is Sidepod built with?",
        isOpen: false,
        content:
            "Sidepod is a desktop app built with Tauri/Rust and React. The main goal was to design a powerful yet lightweight app."
    },
    {
        id: uuid(),
        title: "Is Sidepod affiliated with Spotify?",
        isOpen: false,
        content:
            "No. Sidepod is an independent entity and is not affiliated with Spotify or its entities in any way. We adhere to developer guidelines and ensure that all music credits are rightfully attributed directly to the artists. We maintain full compliance with these guidelines to uphold the integrity of the music industry and support the creators behind the music."
    }
];

const accordionItemType = {
    top: "rounded-t-lg",
    default: "border rounded-none border-t-0",
    bottom: "border border-t-0 rounded-b-lg"
};

export const Accordion = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const accordionClickHandle = (id) => {
        setActiveAccordion(id === activeAccordion ? null : id);
    };

    return (
        <SectionContainer className="accordion--container my-16 drop-shadow-xl max-w-3xl mx-auto offset-y-0 offset-x-8">
            {accordionData.map((accordionItem, index) => (
                <div
                    key={accordionItem.id}
                    id={accordionItem.id}
                    className={clsx(
                        "accordion-item--container border border-neutral-200 bg-white overflow-hidden",
                        {
                            [accordionItemType.top]: index === 0,
                            [accordionItemType.default]:
                                index > 0 && index < accordionData.length - 1,
                            [accordionItemType.bottom]:
                                index === accordionData.length - 1
                        }
                    )}
                >
                    <h2 className="accordion-item--heading mb-0">
                        <button
                            className="group relative flex w-full font-semibold items-center rounded-t-lg border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition"
                            type="button"
                            aria-expanded={accordionItem.isOpen}
                            onClick={() =>
                                accordionClickHandle(accordionItem.id)
                            }
                        >
                            {accordionItem.title}
                            <Icon
                                icon="material-symbols:keyboard-arrow-up-rounded"
                                className="ml-auto h-8 w-8 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out motion-reduce:transition-none"
                            />
                        </button>
                    </h2>
                    <div
                        className={clsx(
                            "accordion-item--content py-4 px-5 text-base",
                            {
                                hidden: activeAccordion !== accordionItem.id, // Use hidden class to animate height to 0
                                "!visibility block":
                                    activeAccordion === accordionItem.id // Use block class to show content again
                            }
                        )}
                    >
                        <p>{accordionItem.content}</p>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
