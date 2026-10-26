const designPages = [
  { name: 'Art Nouveau', slug: '1890s-art-nouveau.html' },
  { name: 'Bauhaus Modern', slug: '1920s-bauhaus.html' },
  { name: 'Constructivism', slug: '1920s-constructivism.html' },
  { name: 'Broadsheet', slug: '1930s-broadsheet.html' },
  { name: 'Workwear', slug: '1940s-workwear.html' },
  { name: 'Palm Springs', slug: '1950s-palm-springs.html' },
  { name: 'Rockabilly', slug: '1950s-rockabilly.html' },
  { name: 'Carnaby Mod', slug: '1960s-carnaby.html' },
  { name: 'French Riviera', slug: '1960s-riviera.html' },
  { name: 'Soul & Disco', slug: '1970s-disco.html' },
  { name: 'Punk Fanzine', slug: '1970s-punk.html' },
  { name: 'Miami Vice', slug: '1980s-miami-vice.html' },
  { name: 'Synthwave', slug: '1980s-synthwave.html' },
  { name: 'Grunge', slug: '1990s-grunge.html' },
  { name: 'Indie Sleaze', slug: '2000s-indie-sleaze.html' }
];

const pageList = document.querySelector('.collection-grid');
if (pageList) {
  pageList.innerHTML = designPages.map((item, index) => `
    <article class="collection-item">
      <div class="thumb" style="background: linear-gradient(135deg, hsl(${(index * 22) % 360} 60% 55%), hsl(${((index + 2) * 17) % 360} 60% 25%));"></div>
      <h4>${item.name}</h4>
      <p>Editorial mood board and mood-led styling direction for this era.</p>
    </article>
  `).join('');
}
