"use client";
import { team } from "@/constants";
import { AnimatedTooltip } from "./animated-tooltip";


export function TeamTooltip() {
    return (
        <div className=" hidden md:flex flex-row items-center justify-start w-full mt-4">
            <AnimatedTooltip items={team} />
        </div>
    );
}
