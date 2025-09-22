export const getDisplayName = (src: string): string => {
  const filename =
    src
      .split("/")
      .pop()
      ?.replace(/\.[^/.]+$/, "") ?? "";

  const overrides: Record<string, string> = {
    "cup-cake": "Cupcake",
    "ice-cream": "Ice Cream",
    hotdog: "Hot Dog",
    popcorn: "Popcorn",
    fries: "Fries",
    pineapple: "Pineapple",
    ice_cream: "Ice Cream",
    cup_cake: "Cupcake",
  };

  if (overrides[filename]) return overrides[filename];

  return filename
    .split(/[-_ ]+/)
    .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : ""))
    .join(" ");
};
