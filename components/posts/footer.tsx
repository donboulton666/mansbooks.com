import Container from "./container";
import { useRouter } from "next/router";
import i18n from "@lib/i18n";

export default function Footer() {
  const { locale } = useRouter();
  return (
    <footer
      className="bg-accent-1 border-accent-2 border-t"
      data-datocms-noindex
    >
      <Container>
        <div className="flex flex-col items-center py-28 lg:flex-row">
          <h3 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-5xl">
            {i18n.footer.static[locale]}
          </h3>
          <div className="flex flex-col items-center justify-center lg:w-1/2 lg:flex-row lg:pl-4">
            <a
              href="https://www.datocms.com/docs/next-js"
              className="mx-3 mb-6 border border-black bg-black px-12 py-3 font-bold text-slate-300 transition-colors duration-200 hover:bg-white hover:text-black lg:mb-0 lg:px-8"
            >
              {i18n.footer.read[locale]}
            </a>
            <a
              href="https://github.com/datocms/nextjs-demo"
              className="mx-3 font-bold hover:underline"
            >
              {i18n.footer.github[locale]}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
