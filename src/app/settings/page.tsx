'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SideLinks from "./sideLinks";
import Account from "./account";

export default function Settings() {
    return <main className="w-full min-h-screen bg-[url('/settingsBg.png')] bg-cover bg-center bg-no-repeat bg-fixed relative overflow-x-hidden">

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#100A0099]"></div>

        {/* Content */}
        <section className="relative z-10 w-full h-full">
            <div className="max-w-[1000px] w-full mx-auto py-8">

                {/* Tabs */}
                <Tabs defaultValue="account" className="w-full gap-12">
                    {/* Tabs List */}
                    <TabsList className="w-full bg-transparent border-none border-[#666666] rounded-none md:px-20 relative before:w-full before:h-[1px] before:bg-gradient-to-r before:from-[#66666600] before:via-[#666666] before:to-[#66666600] before:absolute before:bottom-0">
                        <TabsTrigger value="account" className="md:text-lg lg:text-xl">Account</TabsTrigger>
                        <TabsTrigger value="game-preference" className="md:text-lg lg:text-xl">Game Preference</TabsTrigger>
                        <TabsTrigger value="privacy" className="md:text-lg lg:text-xl">Privacy & Security</TabsTrigger>
                        <TabsTrigger value="help" className="md:text-lg lg:text-xl">Help & Support</TabsTrigger>
                    </TabsList>

                    <div className="w-full grid md:grid-cols-7 md:px-12 px-4 gap-12">
                        {/* Tabs Content */}
                        <main className="md:col-span-5 h-[568px] overflow-y-auto custom-scrollbar">
                            <TabsContent value="account" className="w-full md:pr-12 pr-4 pb-[10px]">
                                <Account />
                            </TabsContent>

                            <TabsContent value="game-preference" className="w-full text-white">Make changes to your game preferences here.</TabsContent>

                            <TabsContent value="privacy" className="w-full text-white">Make changes to your privacy settings here.</TabsContent>

                            <TabsContent value="help" className="w-full text-white">Get help and support here.</TabsContent>
                        </main>
                        {/* Side links */}
                        <aside className="md:col-span-2 flex flex-col gap-7">
                            <SideLinks />
                        </aside>
                    </div>
                </Tabs>

                {/* explanation */}
                <h3 className="text-white italic text-[12px] mt-10 ml-12">
                    Explanation of the settings
                </h3>
            </div>
        </section>
    </main>;
}