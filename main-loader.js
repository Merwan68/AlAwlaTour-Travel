import { supabase } from './supabaseClient.js';

document.addEventListener('DOMContentLoaded', async () => {
  await loadDynamicPackages();
});

async function loadDynamicPackages() {
  const { data: packages, error } = await supabase.from('packages').select('*');
  if (error || !packages || packages.length === 0) {
    console.log('No packages found or error loading:', error);
    return;
  }

  // Looks for an element with id="packages" or a container class on your website
  const container = document.getElementById('packages') || document.querySelector('.packages-container');
  if (!container) return;
  
  container.innerHTML = packages.map(pkg => `
    <div class="package-card" style="border: 1px solid #ddd; padding: 20px; border-radius: 12px; margin-bottom: 15px; background: #fff;">
      <span class="badge" style="background: #c9a45c; color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;">${pkg.status || 'Available'}</span>
      <h3 style="margin-top: 10px;">${pkg.name_am || pkg.name_en}</h3>
      <div class="price" style="font-size: 1.2rem; font-weight: bold; color: #2c3e50; margin: 8px 0;">${pkg.price} <small>${pkg.currency || 'ETB'}</small></div>
      <ul style="list-style: none; padding: 0; font-size: 0.9rem; color: #555; margin-bottom: 15px;">
        <li>⏱️ ቆይታ: ${pkg.duration_days || '-'} ቀናት</li>
        <li>🕋 መካ ቆይታ: ${pkg.makkah_nights || '-'} ማታ</li>
        <li>🕌 መዲና ቆይታ: ${pkg.madinah_nights || '-'} ማታ</li>
      </ul>
    </div>
  `).join('');
}
