import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";
import { Icon } from "@iconify/react";

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="NutriTrack - Avenue Labs landing page template 🚀"
                description="Discover NutriTrack, the effortless way to plan your meals with the power of Notion. Streamline your nutrition journey and achieve your health goals with ease."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Features</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                How It Works
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Why Sidepod will work seamlessly without
                                    interrupting your workflow.
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Pricing</BadgeMessage>
                                {/* <BadgeIcon icon="twemoji:money-bag" /> */}
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Upgrade to Pro!
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    A comparison between free and basic tiers.
                                </p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardHeader className="!text-stone-800 !text-2xl !font-semibold">
                                            Basic
                                        </CardHeader>
                                        <CardHeader className="!text-black !text-5xl !font-bold !my-3">
                                            $0
                                        </CardHeader>
                                        <div className="flex flex-col gap-3 mt-5">
                                            <div className="flex items-center gap-2">
                                                <Icon
                                                    icon="ic:outline-check"
                                                    className="bg-stone-800 text-white rounded-full p-1 text-lg"
                                                />
                                                <p>Play/pause track</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Icon
                                                    icon="ic:outline-check"
                                                    className="bg-stone-800 text-white rounded-full p-1 text-lg"
                                                />
                                                <p>Previous/next track</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Icon
                                                    icon="ic:outline-check"
                                                    className="bg-stone-800 text-white rounded-full p-1 text-lg"
                                                />
                                                <p>Fast forward track</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Icon
                                                    icon="ic:outline-check"
                                                    className="bg-stone-400 text-white rounded-full p-1 text-lg"
                                                />
                                                <p>Search track/lyrics/album</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Icon
                                                    icon="ic:outline-check"
                                                    className="bg-stone-400 text-white rounded-full p-1 text-lg"
                                                />
                                                <p>Only major updates</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Icon
                                                    icon="ic:outline-check"
                                                    className="bg-stone-400 text-white rounded-full p-1 text-lg"
                                                />
                                                <p>Click to launch widget</p>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardHeader className="!text-stone-800 !text-2xl !font-semibold">
                                            Basic
                                        </CardHeader>
                                        <CardHeader className="!text-black flex items-end !text-5xl !font-bold !my-3">
                                            $15.99
                                            <div className="text-sm font-semibold ml-2">
                                                one time
                                            </div>
                                        </CardHeader>
                                        <div className="flex flex-col gap-3 mt-5">
                                            <div className="flex items-center gap-2">
                                                <Icon
                                                    icon="ic:outline-check"
                                                    className="bg-stone-800 text-white rounded-full p-1 text-lg"
                                                />
                                                <p>Play/pause track</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Icon
                                                    icon="ic:outline-check"
                                                    className="bg-stone-800 text-white rounded-full p-1 text-lg"
                                                />
                                                <p>Previous/next track</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Icon
                                                    icon="ic:outline-check"
                                                    className="bg-stone-800 text-white rounded-full p-1 text-lg"
                                                />
                                                <p>Fast forward track</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Icon
                                                    icon="ic:outline-check"
                                                    className="bg-stone-800 text-white rounded-full p-1 text-lg"
                                                />
                                                <p>Search track/lyrics/album</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Icon
                                                    icon="ic:outline-check"
                                                    className="bg-stone-800 text-white rounded-full p-1 text-lg"
                                                />
                                                <p>All updates (for 1 year)</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Icon
                                                    icon="ic:outline-check"
                                                    className="bg-stone-800 text-white rounded-full p-1 text-lg"
                                                />
                                                <p>
                                                    Use shortcut to launch
                                                    widget
                                                </p>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Testimonials */}
                    {/* <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            <BadgeGroup alignment="left">
                                <BadgeMessage>Testimonials</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle className="" type="default">
                                This is what our customers have to say about
                                this template
                            </PageTitle>
                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer> */}
                    {/* Accordions */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>FAQ</BadgeMessage>
                                {/* <BadgeIcon icon="twemoji:-bag" /> */}
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Got some burning questions about{" "}
                                <strong>Sidepod</strong>? <br />
                            </PageTitle>
                            <Accordion />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
