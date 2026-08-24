import sharp from "sharp";
import path from "node:path";

const root = process.cwd();

const ink = "#10161c";
const paper = "#f1f3ee";
const copper = "#c1712f";
const copperBright = "#e08a3e";
const muted = "#9aa89e";

const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${ink}"/>
  <rect x="0" y="0" width="1200" height="630" fill="none" stroke="${muted}" stroke-opacity="0.25" stroke-width="1"/>
  <text x="80" y="150" font-family="Georgia, 'IBM Plex Serif', serif" font-size="34" font-style="italic" fill="${copperBright}">Portfolio &#183; DTE Energy Co-op</text>
  <text x="78" y="310" font-family="Georgia, 'IBM Plex Serif', serif" font-size="110" font-weight="600" fill="${paper}">Ahmad Hashmi</text>
  <text x="80" y="410" font-family="Georgia, 'IBM Plex Serif', serif" font-size="34" font-style="italic" fill="${paper}" fill-opacity="0.75">Technical Analyst &amp; Software Engineer</text>
  <line x1="80" y1="470" x2="1120" y2="470" stroke="${muted}" stroke-opacity="0.3" stroke-width="1"/>
  <text x="80" y="530" font-family="Courier New, 'IBM Plex Mono', monospace" font-size="26" letter-spacing="2" fill="${copper}">2:00:00 &#8594; 0:15:00</text>
  <text x="500" y="530" font-family="Courier New, 'IBM Plex Mono', monospace" font-size="26" letter-spacing="2" fill="${muted}">CRYSTAL REPORTS RUNTIME</text>
  <text x="80" y="575" font-family="Courier New, 'IBM Plex Mono', monospace" font-size="20" letter-spacing="2" fill="${muted}">work.ahmadhash.com</text>
</svg>
`;

const iconSvg = `
<svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <rect width="256" height="256" fill="${ink}"/>
  <rect x="14" y="14" width="228" height="228" fill="none" stroke="${copperBright}" stroke-width="4"/>
  <text x="128" y="160" font-family="Georgia, 'IBM Plex Serif', serif" font-size="108" font-weight="600" fill="${paper}" text-anchor="middle">AH</text>
</svg>
`;

await sharp(Buffer.from(ogSvg)).png().toFile(path.join(root, "public", "og-image.png"));
await sharp(Buffer.from(iconSvg)).resize(512, 512).png().toFile(path.join(root, "app", "icon.png"));

console.log("Generated public/og-image.png and app/icon.png");
