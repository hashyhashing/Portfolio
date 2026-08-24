import sharp from "sharp";
import path from "node:path";

const root = process.cwd();
const src = path.join(root, "Images");
const dest = path.join(root, "public", "images", "culture");

const jobs = [
  {
    in: "DTE-Digital-Transformation.jpg",
    out: "digital-transformation-day-1.jpg",
  },
  {
    in: "DTE-Digital-Transformation-2.JPG",
    out: "digital-transformation-day-2.jpg",
  },
  {
    in: "DTE-Student-Spotlight.png",
    out: "student-spotlight.jpg",
  },
  {
    in: "DTE-Best-Dressed-July-4th.png",
    out: "best-dressed-july-4th.jpg",
  },
];

for (const job of jobs) {
  const inPath = path.join(src, job.in);
  const outPath = path.join(dest, job.out);
  const image = sharp(inPath).rotate();
  const meta = await image.metadata();
  const maxWidth = 1800;
  const resized =
    meta.width && meta.width > maxWidth ? image.resize({ width: maxWidth }) : image;

  await resized.flatten({ background: "#ffffff" }).jpeg({ quality: 82, mozjpeg: true }).toFile(outPath);

  const inSize = (await sharp(inPath).metadata()).size ?? 0;
  console.log(`${job.in} -> ${job.out}`);
}

console.log("Done.");
