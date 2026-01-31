// config.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://zoouyzujhvclmoenagqp.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_FdwKXcBs9ISqo6VL47PUsg_40E6qGbP';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);