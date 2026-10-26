const designPages = [
  { name: 'Art Nouveau', slug: '1890s-art-nouveau.html' },
  { name: 'Edwardian', slug: '1900s-edwardian.html' },
  { name: 'WWI Utility', slug: '1910s-utility.html' },
  { name: 'Bauhaus Modern', slug: '1920s-bauhaus.html' },
  { name: 'Constructivism', slug: '1920s-constructivism.html' },
  { name: 'Broadsheet', slug: '1930s-broadsheet.html' },
  { name: 'Art Deco', slug: '1930s-deco.html' },
  { name: 'Workwear', slug: '1940s-workwear.html' },
  { name: 'Noir Studio', slug: '1940s-noir.html' },
  { name: 'Palm Springs', slug: '1950s-palm-springs.html' },
  { name: 'Rockabilly', slug: '1950s-rockabilly.html' },
  { name: 'Americana', slug: '1950s-americana.html' },
  { name: 'Carnaby Mod', slug: '1960s-carnaby.html' },
  { name: 'French Riviera', slug: '1960s-riviera.html' },
  { name: 'Hippie Folk', slug: '1960s-hippie.html' },
  { name: 'Soul & Disco', slug: '1970s-disco.html' },
  { name: 'Punk Fanzine', slug: '1970s-punk.html' },
  { name: 'Desert Disco', slug: '1970s-desert-disco.html' },
  { name: 'Miami Vice', slug: '1980s-miami-vice.html' },
  { name: 'Synthwave', slug: '1980s-synthwave.html' },
  { name: 'Streetwear', slug: '1980s-streetwear.html' },
  { name: 'Grunge', slug: '1990s-grunge.html' },
  { name: 'Minimalism', slug: '1990s-minimal.html' },
  { name: 'Indie Sleaze', slug: '2000s-indie-sleaze.html' },
  { name: 'Y2K Glow', slug: '2000s-y2k.html' },
  { name: 'Minimal Luxury', slug: '2010s-luxury.html' },
  { name: 'Nordic Minimal', slug: '2010s-nordic.html' },
  { name: 'Quiet Luxury', slug: '2020s-quiet-luxury.html' },
  { name: 'Dark Academia', slug: '2020s-dark-academia.html' },
  { name: 'Hyperpop', slug: '2020s-hyperpop.html' }
];

const pageList = document.querySelector('.collection-grid');
if (pageList) {
  pageList.innerHTML = designPages.map((item, index) => `
    <article class="collection-item">
      <div class="thumb" style="background: linear-gradient(135deg, hsl(${(index * 23) % 360} 65% 60%), hsl(${((index + 1) * 19) % 360} 58% 35%));"></div>
      <h4>${item.name}</h4>
      <p>Editorial mood board and styling direction for this era.</p>
    </article>
  `).join('');
}
