// Fetch the templesvisited.json file and display each temple
async function getTemples() {
  let count = 0;
  // Fetch the JSON file
  try {
    const response = await fetch('data/templesvisited.json');
    if (!response.ok) {
      throw new Error('Failed to load templesvisited.json');
    }
    const temples = await response.json();
    const templeContainer = document.querySelector('.grid');
    temples.forEach(temple => {
      // elements
      const section = document.createElement('section');
      const name = document.createElement('h2');
      const paragraph = document.createElement('p');
      const alink = document.createElement('a');
      const slink = document.createElement('a');
      const image = document.createElement('img');

      // Set the content
      name.textContent = temple.name;
      const links = generateTempleLinks(temple.name);
      alink.textContent = 'Official Site';
      slink.textContent = 'Details';

      alink.href = links.church;
      alink.target = '_blank';
      alink.rel = 'noopener noreferrer';

      slink.href = links.thirdparty;
      slink.target = '_blank';
      slink.rel = 'noopener noreferrer';
      paragraph.appendChild(alink);
      paragraph.append(' • ');
      paragraph.appendChild(slink);

      image.src = temple.imageurl;
      image.alt = `Image of ${temple.name}`;

      // Append elements to the section
      section.appendChild(name);
      section.appendChild(paragraph);
      section.appendChild(image);

      // Append the section to the container
      templeContainer.appendChild(section);

      count++;
      document.getElementById('count').textContent = count;
    });
  } catch (error) {
    console.error('Error fetching temples:', error);
  }
}

function generateTempleLinks(name) {
  const hyphenName = name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '') // remove punctuation
    .replace(/\s+/g, '-')        // replace spaces with hyphens
  // other ?
  const church = `https://www.churchofjesuschrist.org/temples/details/${hyphenName}-temple/`;
  const thirdparty = `https://churchofjesuschristtemples.org/${hyphenName}-temple/`;

  return { church, thirdparty };
}


getTemples();
