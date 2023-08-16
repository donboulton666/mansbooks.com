import React from "react";
import { useCallback, useState } from "react";
import AuthForm from "../app/auth/auth-form";
import Join from "@components/Join";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { register } from "@lib/user-api";
import cn from "classnames";
import useEmailQueryParam from "@lib/hooks/use-email-query-param";
import styleUtils from "./utils.module.css";
import styles from "./conf-entry.module.css";

type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

export default function ConfEntry(
  { session }: { session: Session | null },
  { onRegister }: { onRegister: () => void }
) {
  const supabase = createClientComponentClient<Database>();
  const user = session?.user;
  const [username, setUsername] = useState<string | null>(null);

  const handleRegister = useCallback(
    async (token?: string) => {
      const res = await register(email, token);

      if (!res.ok) {
        const json = await res.json();
        setErrorMsg(getErrorMsg(json.error.code));
        setFormState("error");
        return;
      }

      onRegister();
    },
    [user, onRegister]
  );

  useEmailQueryParam("session", setUsername);

  return (
    <>
      <div
        className={cn(
          styles.container,
          styleUtils.appear,
          styleUtils["appear-first"]
        )}
      >
        <h1 className={cn(styles.hero)}>Ready to experience a live stage?</h1>
        <h2 className={cn(styles.description)}>
          Github or Use your Email to SignIn
        </h2>
        {!session ? (
          <div className={styles["form-row"]}>
            <AuthForm />
          </div>
        ) : (
          <>
            <div>
              <Join session={session} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
