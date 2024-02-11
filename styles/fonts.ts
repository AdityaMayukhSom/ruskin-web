import localFont from "next/font/local";

const circularStd = localFont({
  src: [
    {
      path: "./fonts/CircularStd/CircularStd-Book.ttf",
      weight: "400",
    },
    {
      path: "./fonts/CircularStd/CircularStd-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/CircularStd/CircularStd-Bold.ttf",
      weight: "800",
    },
    {
      path: "./fonts/CircularStd/CircularStd-Black.ttf",
      weight: "900",
    },
    {
      path: "./fonts/CircularStd/CircularStd-BookItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/CircularStd/CircularStd-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/CircularStd/CircularStd-BoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./fonts/CircularStd/CircularStd-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-circular-std",
});

export { circularStd };
