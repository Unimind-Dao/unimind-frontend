export const socialUrls = {
  discord: "https://discord.gg/uKS4vjG8", // it's not valid!!! ❌
};

export const sectionName = {
  about: "about",
  benefits: "benefits",
  team: "team",
};

export const sectionLink = Object.values(sectionName).reduce(
  (links, name) => ({ ...links, [name]: `#${name}` }),
  {} as Record<keyof typeof sectionName, string>
);
