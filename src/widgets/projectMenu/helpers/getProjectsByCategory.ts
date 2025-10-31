import { ALL_PROJECTS, PROJECT_CATEGORIES, PROJECT_MENU_DATA } from '../projectMenu.const';
import type { ProjectCategory } from '../projectMenu.types';

export const getProjectsByCategory = (category: ProjectCategory) => {
  if (category === PROJECT_CATEGORIES.ALL) {
    return ALL_PROJECTS;
  }

  return PROJECT_MENU_DATA.filter((project) => project.type === category);
};
