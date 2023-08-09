import { createClient } from '@supabase/supabase-js'

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiaWR4Z3VucHVjdnpueGZubGR3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MTUxODk4NSwiZXhwIjoyMDA3MDk0OTg1fQ.N2fxatXVslll6Y2E35H37u_UdfMzyGf6z2UUrv5m4lY"

const SUPABASE_URL = "https://pbidxgunpucvznxfnldw.supabase.co"

const useSupabase = () => {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

    return {
        supabase,
    }
}

export default useSupabase