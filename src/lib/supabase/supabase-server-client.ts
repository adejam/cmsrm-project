import { createClient } from '@supabase/supabase-js'

import 'server-only'

export const supabaseServerClient = () => createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
)
