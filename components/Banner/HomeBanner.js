import { BadgeGroup, BadgeIcon, BadgeMessage } from "@components/Badge";
import { Button, ButtonGroup } from "@components/Button";
import { Content } from "@components/Content";
import { MotionBTTContainer, MotionInfiniteImage } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Icon } from "@iconify/react";
import Image from "next/image";

export const HomeBanner = () => {
    return (
        <SectionContainer className="page-banner--container py-16">
            <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
                {/* Appear First */}
                <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
                    <a href="https://www.producthunt.com/posts/sidepod?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-sidepod">
                        <img
                            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=417879&theme=dark"
                            alt="Sidepod - A&#0032;Spotify&#0032;widget&#0032;to&#0032;control&#0032;your&#0032;music&#0032;from&#0032;anywhere | Product Hunt"
                            width="250"
                            height="54"
                            className="w-[250px] h-[54px]"
                        />
                    </a>
                    <BadgeGroup alignment="center" className={"hidden"}>
                        <BadgeMessage>Discover NutriTrack!</BadgeMessage>
                        <BadgeIcon icon="game-icons:meal" />
                    </BadgeGroup>
                </MotionBTTContainer>
                {/* Appear Second */}
                <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
                    <PageTitle className="text-center mx-auto" type="heavy">
                        The Must-Have Spotify Widget for Music Lovers
                    </PageTitle>
                </MotionBTTContainer>
                {/* Appear Third */}
                <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
                    <Content className="text-center" alignment="center">
                        <p>
                            Tiny but powerful Spotify widget to control your
                            music from anywhere, at anytime.
                        </p>
                    </Content>
                    <div className="mt-6 mb-16 text-center">
                        <ButtonGroup alignment="center">
                            <Button
                                href="#features"
                                className="rounded-full bg-stone-300 hover:bg-stone-700 hover:text-white"
                            >
                                Features
                            </Button>
                            <a
                                role="button"
                                href="https://api.getharmonize.app/sidepod/download_app/"
                                className="btn btn--secondary rounded-full"
                            >
                                Download Now
                                <Icon icon="material-symbols:arrow-forward-rounded" />
                            </a>
                        </ButtonGroup>
                    </div>
                </MotionBTTContainer>
                {/* Appear Fourth */}
                <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
                    <div className="page-banner--image">
                        <video
                            src="/hero_test.mp4"
                            poster="/splash_hero.png"
                            width={512}
                            height={512}
                            autoPlay={false}
                            loop
                            controls={true}
                            className="drop-shadow-xl w-[80%] rounded-2xl mx-auto"
                        />
                    </div>
                </MotionBTTContainer>
            </SectionContainer>
        </SectionContainer>
    );
};
