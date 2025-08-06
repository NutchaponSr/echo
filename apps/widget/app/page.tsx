"use client";

import { useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api"; 

export default function Page() {
  const users = useQuery(api.users.getMeny);

  return (
    <div className="flex items-center justify-center min-h-svh">
      <p>App/Widget</p>
      <pre>
        {JSON.stringify(users, null, 2)}
      </pre>
    </div>
  )
}
