"use client";

import { createClient } from "@/utils/supabase/client";
import React, { useEffect, useState } from "react";

const Provider = ({ children }) => {
  const [user, setUser] = useState<null | object>();
  const supabase = createClient();
  useEffect(() => {
    checkUserExist();
  }, []);

  const checkUserExist = () => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      console.log(user, "USR");
      let { data: Users, error } = await supabase
        .from("Users")
        .select("*")
        .eq("email", user?.email);
      console.log(user);
      if (!Users?.length) {
        const { data, error } = await supabase.from("Users").insert([
          {
            name: user?.user_metadata?.name,
            email: user?.email,
            img: user?.user_metadata?.picture,
          },
        ]);
        console.log(data, "NEW USER");
      }
    });
  };
  console.log(user, "USER");
  return <div>{children}</div>;
};

export default Provider;
