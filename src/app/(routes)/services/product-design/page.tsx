import { productDesignProcess, productDesignFaq } from "@/constants";
import { Metadata } from "next";
import Cta from "@/sections/cta";
import Faqs from "@/sections/faqs";
import Process from "@/sections/process";
import ProductDesignHero from "@/sections/product-design-hero";
import ProductDesignServices from "@/sections/product-design-services";
import RecentWork from "@/sections/recent-work";
import Testimonials from "@/sections/testimonials";
import WhyUsProductDesign from "@/sections/why-us-product-design";

const ProductDesignPage = () => {
    return (
        <div>
            <ProductDesignHero />
            <ProductDesignServices />
            <RecentWork />
            <Cta title="We Design Products That People Can’t Ignore" />
            <WhyUsProductDesign />
            <Process
                headingOne="Product"
                headingTwo="Design"
                description="From discovery to launch, we follows a structured process to deliver exceptional UI/UX designs. Our approach ensures every step is user-focused and results-driven."
                processSteps={productDesignProcess}
            />
            <Testimonials />
            <Faqs faqs={productDesignFaq} />
        </div>
    );
}

export const metadata: Metadata = {
    metadataBase: new URL("https://www.bhytesoftware.com"),
    keywords: [
        "product design services",
        "ui/ux design",
        "user experience design",
        "user interface design",
        "prototyping",
    ],
    title: "Product Design Services - Reframe Labs",
    description:
        "Create intuitive and beautiful products with Reframe Labs's product design services. We specialize in UI/UX research, wireframing, prototyping, and user-centered design.",
    alternates: {
        canonical: "/services/product-design",
    },
    openGraph: {
        title: "Product Design Services - Reframe Labs",
        siteName: "Reframe Labs",
        description:
            "Create intuitive and beautiful products with Reframe Labs's product design services. We specialize in UI/UX research, wireframing, prototyping, and user-centered design.",
        images: ["/og/design.png"],
        url: "/services/product-design",
    },
    twitter: {
        card: "summary_large_image",
        title: "Product Design Services - Reframe Labs",
        description:
            "Create intuitive and beautiful products with Reframe Labs's product design services. We specialize in UI/UX research, wireframing, prototyping, and user-centered design.",
        images: ["/og/design.png"],
        creator: "@bhyte_software",
    },
    icons: "/favicon.ico",
};

export default ProductDesignPage;