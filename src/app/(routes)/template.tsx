"use client";

import PageTransition from "@/components/wrapper/page-transition";

interface TemplateProps {
    children: React.ReactNode;
}

export default function Template({ children }: TemplateProps) {
    return <PageTransition>{children}</PageTransition>;
}
