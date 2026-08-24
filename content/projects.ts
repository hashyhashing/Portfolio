export type Project = {
  title: string;
  period: string;
  summary: string;
  bullets: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    title: "Real-Time Embedded ML Systems",
    period: "Feb 2026 – Apr 2026",
    summary:
      "On-device neural network inference on a Nordic nRF52840 microcontroller — no cloud round trip.",
    bullets: [
      "Deployed NN inference on an ARM Cortex-M4 (nRF52840) using TensorFlow Lite Micro.",
      "Trained CNN classifiers for gesture recognition (9-axis IMU) and keyword spotting (PDM mic spectrograms).",
      "Applied INT8 post-training quantization to fit the model on-device.",
    ],
    stack: ["TensorFlow Lite Micro", "Nordic nRF52840", "Python", "C++"],
  },
  {
    title: "Open Source Contributor — Intel Neural Network Distiller",
    period: "Jan 2026 – Apr 2026",
    summary: "Modernized a legacy Intel research toolkit and extended it for cross-platform use.",
    bullets: [
      "Upgraded legacy Python 3.7 code to Python 3.11+ and contributed to documentation via Git-based workflows.",
      "Extended functionality with new visualization and analysis tools.",
      "Implemented Windows compatibility with graceful error handling for other operating systems.",
    ],
    stack: ["Python", "WSL", "Git", "GitHub"],
  },
  {
    title: "Drone Flight Intelligence System",
    period: "Oct 2025 – Dec 2025",
    summary: "A real-time streaming pipeline for drone telemetry, from ingestion to anomaly detection.",
    bullets: [
      "Engineered a Kafka + Spark Streaming pipeline ingesting and cleaning 10,000+ sensor telemetry points, landing processed data in AWS S3.",
      "Built an S3-backed dashboard and prototyped anomaly-detection models in Jupyter to explore flight stability patterns.",
    ],
    stack: ["Python", "Kafka", "Spark", "AWS S3"],
  },
];
