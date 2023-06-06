/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import { ReactNode } from "react";
import Link from "next/link";
import { CookieConsent } from "react-cookie-consent";
import cn from "classnames";
import { useRouter } from "next/router";
import { SkipNavContent } from "@reach/skip-nav";
import { NAVIGATION } from "@lib/constants";
import styles from "../layout.module.css";
import Logo from "../icons/icon-hms";
import MobileMenu from "../mobile-menu";
import PageFooter from "../PageFooter";
import ScrollIndicator from "../ScrollIndicator";
import Dummy from "@components/Dummy";
import NavDropdown from "@components/NavDropdown";
import { hmsConfig } from "../hms/config";
import ViewSource from "../view-source";
import Stars from "@components/Stars";

type Props = {
  children: ReactNode;
  className?: string;
  hideNav?: boolean;
  layoutStyles?: any;
  isLive?: boolean;
};

export default function PostLayout({
  children,
  className,
  hideNav,
  layoutStyles,
  isLive = false,
}: Props) {
  const router = useRouter();
  const activeRoute = router.asPath;
  const disableCta = ["/schedule", "/speakers", "/expo", "/jobs"];
  return (
    <>
      <Stars />
      <ScrollIndicator />
      <div className={styles.background}>
        {!hideNav && (
          <header className={cn(styles.header)} data-datocms-noindex>
            <div className={styles["header-logos"]}>
              <MobileMenu key={router.asPath} />
              <Link href="/" className={styles.logo}>
                <Logo />
              </Link>
            </div>
            <div className={styles.tabs}>
              {NAVIGATION.map(({ name, route }) => (
                <Link
                  key={name}
                  href={route}
                  className={cn(styles.tab, {
                    [styles["tab-active"]]: activeRoute.startsWith(route),
                  })}
                >
                  {name}
                </Link>
              ))}
            </div>

            {(hmsConfig.hmsIntegration &&
              isLive &&
              !disableCta.includes(activeRoute)) ||
            activeRoute === "/" ? (
              <div className={cn(styles["header-right"])}>
                {activeRoute === "/" ? <NavDropdown /> : <Dummy />}
              </div>
            ) : (
              <>
                <div />
                <NavDropdown />
              </>
            )}
          </header>
        )}
        <ViewSource />
        <div className={styles.page}>
          <div className="blog-beams">
            <main className={styles.main} style={layoutStyles}>
              <SkipNavContent />
              <div className={cn(styles.full, className)}>{children}</div>
            </main>
            {!activeRoute.startsWith("/stage") && <PageFooter />}
            <CookieConsent
              enableDeclineButton
              flipButtons
              location="bottom"
              buttonText="Accept"
              declineButtonText="Decline"
              ariaAcceptLabel="Accept Cookies"
              ariaDeclineLabel="Decline Cookies"
              cookieName="gtag"
              style={{
                background:
                  "linear-gradient(to right, #4338ca, transparent, #4338ca)",
                textShadow: "2px 2px black",
              }}
              buttonStyle={{
                background:
                  "radial-gradient(circle at top right, #4338ca, transparent)",
                color: "white",
                fontWeight: "bolder",
                borderRadius: "3px",
                border: "1px black",
                textShadow: "2px 2px black",
              }}
            >
              This Site uses cookies for user experience.{" "}
              <span
                style={{
                  fontSize: "14px",
                  textAlign: "center",
                  marginLeft: "20px",
                }}
              >
                <Link
                  href="/privacy"
                  className="text-slate-300"
                  alt="Privacy Page"
                >
                  Privacy Page
                </Link>
              </span>
            </CookieConsent>
          </div>
        </div>
      </div>
    </>
  );
}