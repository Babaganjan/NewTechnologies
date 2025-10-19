import { Arrow } from "@/shared/icons";

import './_projectListItem.scss';

import { H } from "../Heading/H";
import type { ProjectMenuItemProps } from "../types/ProjectMenu.types";


export const ProjectListItem = ({ item, index, isHovered, onMouseEnter, onMouseLeave }: ProjectMenuItemProps) => (
    <li
      className={`project-menu-item ${isHovered && 'hovered'}`}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
    >
      <div className="project-menu-item__content">
        <span className="project-menu-item__client service-label--services">клиент</span>
        <div className="project-menu-item__subtitle">
          <H level={'5'} className="project-menu-item__subtitle-title">
            {item.subtitle}
          </H>
          <Arrow
            color="var(--text-black)"
            width={12}
            height={15}
            className="project-menu-item__arrow"
          />
        </div>
        <span className="project-menu-item__service-label service-label--services">
          тип услуги
        </span>
        <p className="project-menu-item__service service-label--services">{item.service}</p>
      </div>
    </li>
  );