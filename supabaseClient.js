import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Supabase Project URL
const SUPABASE_URL = 'https://oioqlvvzmifklxeyqrhy.supabase.co';

// Supabase Public Anon Key
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pb3FsdnZ6bWlma2x4ZXlxcmh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAyNTAxNzEsImV4cCI6MjEwNTgyNjE3MX0.OUUiLovpfvZXb1B3XxD1hXsSkI1vlW7laDtTXFkCNK4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
