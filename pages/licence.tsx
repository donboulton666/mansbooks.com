import React from 'react';
import Head from "next/head";
import Layout from "@components/layout";
import Section from "@components/Section";
import CalloutLabel from "@components/Callout/CalloutLabel";
import Modal from "@components/Modal";

export default function License() {
  return (
    <Layout>
      <Head>
        <title>OSBD License</title>
      </Head>
      <div className="mx-18">
        <div className="z-30 -mt-4">
          <div className="mt-10">
            <div className="mt-16 mb-16 p-8 sm:mt-2">
              <div className="mb-2">
                <h2>Rob Landley</h2>
                <p>                
                  Posted this on
                  <a href="http://lists.landley.net/pipermail/toybox-landley.net/2013-March/004589.html">this on</a>
                  in the Toybox mailing list on 13 March 2013 to introduce the 0BSD licence which was subsequently adopted by the Toybox project.
                  Nobody but me is likely to care, but I'd like to simplify the first paragraph from the current:
                  Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
                  To just say:
                  Permission to use, copy, modify, and / or distribute this software for any purpose with or without fee is hereby granted.
                  Reasoning: it was never my intent to require anybody to copy license text into another project if they cut and pasted something out of toybox. 
                  The "permission for any purpose" is as close to public domain as you can get in our current screwed up legal system without making people uncomfortable the other way. 
                  Besides, my initial reading of that was "all copies of the source code" but that's not what it says, and somebody pointed out that Android has "show license text" options because paranoid lawyers think that sort of thing applies to the BINARY version, which is nuts.
                  I'm not changing it this release, but in case anybody was going to object I thought I'd post it here for a bit first so I can remove your code if it really matters to you. 
                  This version is still outgoing-compatible with the old version code that says the new thing can give code to a project that says the old thing, whether it could receive it depends on how paranoid your lawyers are.
                  Rob
                </p>
                <CalloutLabel label='Zero-Clause BSD'>
                  The 0BSD Zero-Clause BSD license was originated by Rob Landley in <a href="http://www.landley.net/toybox">ToyBox</a>. It's also known as "Free Public License 1.0.0" and is similar to the <a href="https://github.com/aws/mit-0">MIT No Attribution License</a>.
                  It is an extremely permissive license, as it does not require the user to include the copyright notice, license text, or disclaimer in either source or binary forms.
                </CalloutLabel>                
                <p>
                  This service is provided by Intuition Machines, Inc., a
                  Delaware US Corporation ("IMI"). hCaptcha is used to check
                  whether the data entered on our website (such as on a login
                  page or contact form) has been entered by a human or by an
                  automated program.
                </p>
                <Section>                  
                  <h2>0BSD Template</h2>
                  <p>
                    🔰 The 0BSD (Zero-Clause BSD) license.
                    Copyright (C) [year] by [copyright holder] email
                    Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted.
                    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS.
                    IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
                  </p>
                </Section>
                <Section>
                  <p>
                    For more information about hCaptcha and IMI's privacy policy
                    and terms of use, please visit the following links:
                  </p>
                  <a
                    href="https://www.hcaptcha.com/privacy"
                    className="hover:text-pink-500"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-describedby="AJ Instagram"
                    area-label="Privacy"
                  >
                    🔗 https://www.hcaptcha.com/privacy.
                  </a>
                  <a
                    href="https://www.hcaptcha.com/terms"
                    className="hover:text-pink-500"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-describedby="hCaptcha Terms"
                    area-label="hCaptcha Terms"
                  >
                    🔗 https://www.hcaptcha.com/terms.
                  </a>
                </Section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal dialogTitle="Zero-Clause BSD" dialogContent="The 0BSD (Zero-Clause BSD) license was originated by Rob Landley">
        <a href="http://www.landley.net/toybox">It's also known as "Free Public License 1.0.0"</a> and is similar to the <a href="https://github.com/aws/mit-0">MIT No Attribution License</a>
        It is an extremely permissive license, as it does not require the user to include the copyright notice, license text, or disclaimer in either source or binary forms.
      </Modal>
    </Layout>
  );
}
