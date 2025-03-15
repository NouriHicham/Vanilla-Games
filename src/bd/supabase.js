import { createClient } from '@supabase/supabase-js'
//Creando la conexión con supabase
const supabaseUrl = 'https://vdjvncqvcjurxznhytoo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkanZuY3F2Y2p1cnh6bmh5dG9vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MjA0NTIyOCwiZXhwIjoyMDU3NjIxMjI4fQ.dn4tT6s_M1gsNcpSajXXQFtBo3q5gBWm0RngfiUraSg'
//exportamos la conexión
export const supabase = createClient(supabaseUrl, supabaseKey)
