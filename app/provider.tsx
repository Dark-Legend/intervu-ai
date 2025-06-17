"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { setDashboardStore } from "./dashboard/store";

type ProviderProp = {
  children: React.ReactNode;
};

const Provider: React.FC<ProviderProp> = ({ children }) => {
  const supabase = createClient();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkUserExist = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data?.user;

      if (!user) {
        setIsReady(true);
        return;
      }

      const { data: Users } = await supabase
        .from("Users")
        .select("*")
        .eq("email", user.email);

      if (Users?.length) {
        const { name, email, img } = Users[0];
        setDashboardStore((state) => {
          state.userData = { name, email, img };
        });
      } else {
        const { data } = await supabase.from("Users").insert([
          {
            name: user.user_metadata?.name,
            email: user.email,
            img: user.user_metadata?.picture,
          },
        ]);

        if (data?.[0]) {
          const { name, email, img } = data[0];
          setDashboardStore((state) => {
            state.userData = { name, email, img };
          });
        }
      }

      setIsReady(true);
    };

    checkUserExist();
  }, []);

  if (!isReady) {
    return (
      <div className="p-5 text-muted-foreground w-screen h-screen flex justify-center items-center">
        Loading..
      </div>
    );
  }

  return <>{children}</>;
};

export default Provider;
