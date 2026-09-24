import { supabase } from './supabaseClient.js';

document.addEventListener('DOMContentLoaded', async () => {
  await loadPosts();
});

async function loadPosts() {
  // 1. Change 'packages' to 'posts'
  const { data: posts, error } = await supabase.from('posts').select('*');
  
  if (error || !posts || posts.length === 0) {
    console.log('No posts found or error loading:', error);
    return;
  }

  // 2. Look for your website container (e.g., id="posts" or class="posts-container")
  const container = document.getElementById('posts') || document.querySelector('.posts-container');
  if (!container) return;

  // 3. Map your actual column names (like title_am)
  container.innerHTML = posts.map(post => `
    <div class="post-card" style="border: 1px solid #ddd; padding: 20px; border-radius: 12px; margin-bottom: 15px; background: #fff;">
      <h3 style="margin-top: 10px;">${post.title_am || 'Untitled'}</h3>
      <!-- Add other columns from your posts table here if you have them -->
    </div>
  `).join('');
}
