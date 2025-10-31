import { SEEALSO_DATA } from '../seeAlso.const';

export const seeAlsoTypeData = (type: string) => {
  return SEEALSO_DATA.filter((item) => item.title !== type);
};
