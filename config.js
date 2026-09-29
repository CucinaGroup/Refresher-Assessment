// Supabase connection for the Cucina Staff Refresher Quiz.
// Find these in Supabase: Project Settings → API.
// The anon (public) key is safe to publish — the database rules in schema.sql
// stop the public from reading answers, reading results or editing questions.
window.QUIZ_CONFIG = {
  SUPABASE_URL: "https://YOUR-PROJECT-ID.supabase.co",
  SUPABASE_ANON_KEY: "YOUR-ANON-PUBLIC-KEY"
};
