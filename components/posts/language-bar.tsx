import Link from "next/link";
import { useRouter } from "next/router";

export default function LanguageBar() {
  const currentPath = useRouter().asPath;
  return (
    <section className="mr-0 mt-0 mb-0 flex flex-col items-center md:mb-0 md:flex-row md:justify-start">
      <Link
        href={currentPath}
        locale="en"
        className="p-1 text-wine-200 underline decoration-wine-300 decoration-wavy underline-offset-8 transition duration-300 hover:text-wine-200"
      >
        English
      </Link>
      <Link
        href={currentPath}
        locale="it"
        className="p-1 text-wine-200 underline decoration-wine-300 decoration-wavy underline-offset-8 transition duration-300 hover:text-wine-200"
      >
        Italian
      </Link>
      <Link
        href={currentPath}
        locale="es"
        className="p-1 text-wine-200 underline decoration-wine-300 decoration-wavy underline-offset-8 transition duration-300 hover:text-wine-200"
      >
        Spanish
      </Link>
      <Link
        href={currentPath}
        locale="nn"
        className="p-1 text-wine-200 underline decoration-wine-300 decoration-wavy underline-offset-8 transition duration-300 hover:text-wine-200"
      >
        Norwegian
      </Link>
    </section>
  );
}
