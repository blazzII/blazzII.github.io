// Animated network graph background
const canvas = document.getElementById('netCanvas');
const ctx = canvas.getContext('2d');

let W, H, nodes = [];

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', () => { resize(); init(); });

function init() {
  const count = Math.floor((W * H) / 18000);
  nodes = Array.from({ length: count }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    r: Math.random() * 2.5 + 1,
    pulse: Math.random() * Math.PI * 2
  }));
}
init();

const MAX_DIST = 150;

function draw() {
  ctx.clearRect(0, 0, W, H);

  // Move nodes
  for (const n of nodes) {
    n.x += n.vx;
    n.y += n.vy;
    n.pulse += 0.03;
    if (n.x < 0 || n.x > W) n.vx *= -1;
    if (n.y < 0 || n.y > H) n.vy *= -1;
  }

  // Draw edges
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < MAX_DIST) {
        const alpha = (1 - d / MAX_DIST) * 0.25;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = `rgba(0,180,255,${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }
  }

  // Draw nodes
  for (const n of nodes) {
    const glow = 0.5 + 0.5 * Math.sin(n.pulse);
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0,229,255,${0.4 + 0.4 * glow})`;
    ctx.shadowColor = '#00e5ff';
    ctx.shadowBlur = 6 * glow;
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  requestAnimationFrame(draw);
}
draw();