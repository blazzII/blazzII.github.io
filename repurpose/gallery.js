const imageItems = [
  { file: '916-owners-cabinet.jpg', label: 'Owners Cabinet' },
  { file: 'cabinet-adds-dining-2.jpg', label: 'Dining Cabinet' },
  { file: 'cabinet-adds-dining.jpg', label: 'Cabinet Add-On' },
  { file: 'cabinet-shelfs.jpg', label: 'Cabinet Shelves' },
  { file: 'coffeetable1.jpg', label: 'Coffee Table' },
  { file: 'garrett-wall.jpg', label: 'Accent Wall' },
  { file: 'easels.jpg', label: 'Display Easels' },
  { file: 'j.k.blazzard-fireplace.jpeg', label: 'Fireplace Build' },
  { file: 'j.k.blazzard-fireplacefront.jpeg', label: 'Fireplace Front' },
  { file: 'k-j-bath-done.jpg', label: 'Bath Finish' },
  { file: 'k-j-half-bath.jpg', label: 'Half Bath' },
  { file: 'love-sign.jpg', label: 'Love Sign' },
  { file: 'mudroom-seat-from-dressor.jpg', label: 'Mudroom Seat' },
  { file: 'plumbing-k-j-half.jpg', label: 'Bath Plumbing' },
  { file: 'shed.jpg', label: 'Shed Build' },
  { file: 'shelf-insert.jpg', label: 'Shelf Insert' },
  { file: 'toilet-paper-lighthouse.jpg', label: 'Lighthouse Holder' }
];

function buildGallery() {
  const gallery = document.getElementById('gallery');
  if (!gallery) {
    return;
  }

  imageItems.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'card';

    const image = document.createElement('img');
    image.src = item.file;
    image.alt = `Build project: ${item.label}`;
    image.loading = 'lazy';

    const meta = document.createElement('div');
    meta.className = 'meta';

    const heading = document.createElement('h2');
    heading.textContent = item.label;

    const detail = document.createElement('p');
    detail.textContent = 'Build project, some using repurposed materials';

    meta.appendChild(heading);
    meta.appendChild(detail);

    card.appendChild(image);
    card.appendChild(meta);

    gallery.appendChild(card);
  });
}

buildGallery();
