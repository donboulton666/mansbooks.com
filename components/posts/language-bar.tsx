import Link from "next/link";
import { useRouter } from "next/router";

export default function LanguageBar() {
  const currentPath = useRouter().asPath;
  return (
    <section className="mr-0 mt-0 mb-0 flex flex-col items-center md:mb-0 md:flex-row md:justify-end">
      <Link href={currentPath} locale="en">
        <a className="p-1 underline transition-colors duration-200 hover:text-wine-200">
          English
        </a>
      </Link>
      <Link href={currentPath} locale="it">
        <a className="p-1 underline transition-colors duration-200 hover:text-wine-200">
          Italian
        </a>
      </Link>
      <Link href={currentPath} locale="es">
        <a className="p-1 underline transition-colors duration-200 hover:text-wine-200">
          Spanish
        </a>
      </Link>
      <Link href={currentPath} locale="nn">
        <a className="p-1 underline transition-colors duration-200 hover:text-wine-200">
          Norwegian
        </a>
      </Link>
    </section>
  );
}
