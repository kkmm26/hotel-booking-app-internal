import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dfhwijdqemaiuddzhtuj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmaHdpamRxZW1haXVkZHpodHVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4Mjg5NDUsImV4cCI6MjA1NjQwNDk0NX0.3g7cOewZPVtBtAQZjivMBewGaLckWq04vHT25oRMwfA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
