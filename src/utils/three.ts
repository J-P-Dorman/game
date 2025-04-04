import { FontLoader } from "three/addons/loaders/FontLoader.js";

export const loadFont = async (data: any): Promise<any> => {
  const loader = new FontLoader();
  
  return loader.parse(data);
};
