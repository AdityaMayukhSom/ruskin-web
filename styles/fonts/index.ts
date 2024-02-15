import localFont from "next/font/local";

const circularStd = localFont({
  src: [
    {
      path: "./CircularStd/CircularStd-Book.ttf",
      weight: "400",
    },
    {
      path: "./CircularStd/CircularStd-Medium.ttf",
      weight: "500",
    },
    {
      path: "./CircularStd/CircularStd-Bold.ttf",
      weight: "800",
    },
    {
      path: "./CircularStd/CircularStd-Black.ttf",
      weight: "900",
    },
    {
      path: "./CircularStd/CircularStd-BookItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./CircularStd/CircularStd-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./CircularStd/CircularStd-BoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./CircularStd/CircularStd-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-circular-std",
});

export { circularStd };
