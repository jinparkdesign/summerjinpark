import FCThumbnail from "@/public/FLIGHT_CENTER-thumbnail.png";
import HotelThumbnail from "@/public/HOTEL_REDESIGN-thumbnail.png";
import MiuuThumbnail from "@/public/MIUU_NOTE-thumbnail.png";
import VisualThumbnail from "@/public/VISUAL_DESIGN-thumbnail.png";
import FCMain from "@/public/FLIGHT_CENTER-main.png";
import { ProjectId } from "./projects";

export const getProjectThumbnail = (id: ProjectId) => {
  switch (id) {
    case ProjectId.FLIGHT_CENTRE:
      return FCThumbnail;
    case ProjectId.HOTEL_REDESIGN:
      return HotelThumbnail;
    case ProjectId.MIUU_NOTE:
      return MiuuThumbnail;
    case ProjectId.VISUAL_DESIGN:
      return VisualThumbnail;
    default:
      return FCThumbnail;
  }
};

export const getProjectMain = (id: ProjectId) => {
  switch (id) {
    case ProjectId.FLIGHT_CENTRE:
      return FCMain;

    default:
      return FCMain;
  }
};
