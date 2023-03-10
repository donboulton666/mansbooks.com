import Container from "./container";
import Link from "next/link";
import cn from "classnames";
import i18n from "@lib/i18n";
import { useRouter } from "next/router";

export default function Alert({ preview }) {
  const { locale } = useRouter();

  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-slate-300": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              {i18n.alert.draftContent[locale]}{" "}
              <Link
                href="/api/exit-preview"
                className="underline transition-colors duration-200 hover:text-wine-200"
              >
                {i18n.alert.clickCta[locale]}
              </Link>{" "}
              {i18n.alert.exitPreview[locale]}
            </>
          ) : (
            <>
              {i18n.alert.publishedContent[locale]}{" "}
              <Link
                href="/api/preview"
                className="underline transition-colors duration-200 hover:text-wine-200"
              >
                {i18n.alert.clickCta[locale]}
              </Link>{" "}
              {i18n.alert.enterPreview[locale]}
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
