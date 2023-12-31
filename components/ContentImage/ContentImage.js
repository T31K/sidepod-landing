import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentVideoData = [
    {
        id: uuid(),
        title: "Summon and hide whenever you need",
        content:
            "Summon your music whenever inspiration strikes. Or ask it to tuck itself away to leave your screen clutter-free. Interact with your music without disrupting your workflow.",
        align: "right",
        video: "/feature_1_test.mp4",
        poster: "/splash_1.png"
    },
    {
        id: uuid(),
        title: "Full controls over your music",
        content:
            "Our Spotify Widget gives you full control over your tracks,  Adjust the volume, skip songs, pause, or shuffle with ease, all from a compact and user-friendly interface.",
        align: "left",
        video: "/feature_2_test.mp4",
        poster: "/splash_2.png"
    },
    {
        id: uuid(),
        title: "Search seamlessly for any songs",
        content:
            "Summon your music whenever inspiration strikes. Or ask it to tuck itself away to leave your screen clutter-free. Interact with your music without disrupting your workflow.",
        align: "right",
        video: "/feature_3_test.mp4",
        poster: "/splash_3.png"
    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentVideoData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--video rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <video
                            src={item.video}
                            width={512}
                            height={512}
                            autoPlay={false}
                            loop
                            poster={item.poster}
                            controls={true}
                            className="drop-shadow-xl rounded-2xl w-full offset-y-0 offset-x-8 blur-16"
                        />
                    </div>
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black w-[300px]">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
