import BackToTop from "@/components/common/back-to-top";
import LenisWrapper from "@/components/wrapper/lenis-wrapper";
import PreloaderWrapper from "@/components/wrapper/preloader-wrapper";
import CtaForm from "@/sections/cta-form";
import Footer from "@/sections/footer";
import Navigation from "@/sections/navigation";
import NavigationMobile from "@/sections/navigation-mobile";


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PreloaderWrapper>
      <LenisWrapper>
        <div className=" hidden md:block">
          <BackToTop />
        </div>
        <Navigation />
        <NavigationMobile />
        {children}
        <CtaForm />
        <Footer />
      </LenisWrapper>
    </PreloaderWrapper>

  );
}
