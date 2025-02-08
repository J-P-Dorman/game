import { FontLoader } from "three/addons/loaders/FontLoader.js";

export const loadFont = async (url: string): Promise<any> => {
  const loader = new FontLoader();

  return new Promise((resolve) => {
    loader.load(url, (response) => {
      resolve(response);
    });
  });
};
