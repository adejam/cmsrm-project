import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { type NextRequest } from "next/server";
import { appRouter } from "@/server/api/root";
import { createTRPCContext } from "@/server/api/trpc";
import { createAnonServerClient } from "@/lib/supabase/supabase-anon-server-client";
import { Session } from "@supabase/supabase-js";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a HTTP request (e.g. when you make requests from Client Components).
 */
const createContext = async (req: NextRequest, session: Session | null) => {
  return createTRPCContext({
    headers: req.headers,
    auth: session
  });
};

const handler = async (req: NextRequest) => {
  const supabase = createAnonServerClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  await fetchRequestHandler({
    endpoint: "/api/v1/trpc",
    req,
    router: appRouter,
    createContext: () => createContext(req, session),
    onError:
      process.env.NODE_ENV === "development"
        ? ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
            );
          }
        : undefined,
  });
}

export { handler as GET, handler as POST };
