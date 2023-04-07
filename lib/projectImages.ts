import FCThumbnail from "@/public/FLIGHT_CENTER-thumbnail.png";
import HotelThumbnail from "@/public/HOTEL_REDESIGN-thumbnail.png";
import MiuuThumbnail from "@/public/MIUU_NOTE-thumbnail.png";
import VisualThumbnail from "@/public/VISUAL_DESIGN-thumbnail.png";
import HugMugThumbnail from "@/public/HUG-MUG-thumbnail.png";
import eCycleThumbnail from "@/public/ECYCLE-thumbnail.png";
import ParkYourPhoneThumbnail from "@/public/PARK-YOUR-PHONE-thumbnail.gif";
import SignThumbnail from "@/public/SIGN-thumbnail.png";
import TiktokThumbnail from "@/public/TIKTOK-thumbnail.gif";
import SaveMyFridgeThumbnail from "@/public/SAVE-MY-FRIDGE-thumbnail.gif";
import Android3DThumbnail from "@/public/ANDROID-3D-thumbnail.gif";
import VisualShapeThumbnail from "@/public/VISUAL-SHAPE-thumbnail.gif";

import FCMain from "@/public/FLIGHT_CENTER-main.png";
import HotelMain from "@/public/HOTEL_REDESIGN-main.png";
import MiuuMain from "@/public/MIUU_NOTE-main.png";

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
    case ProjectId.HUG_MUG:
      return HugMugThumbnail;
    case ProjectId.ECYCLE:
      return eCycleThumbnail;
    case ProjectId.PARK_YOUR_PHONE:
      return ParkYourPhoneThumbnail;
    case ProjectId.SIGN:
      return SignThumbnail;
    case ProjectId.TIKTOK:
      return TiktokThumbnail;
    case ProjectId.SAVE_MY_FRIDGE:
      return SaveMyFridgeThumbnail;
    case ProjectId.ANDROID_3D:
      return Android3DThumbnail;
    case ProjectId.VISUAL_SHAPE:
      return VisualShapeThumbnail;
    default:
      return FCThumbnail;
  }
};

export const getProjectMain = (id: ProjectId) => {
  switch (id) {
    case ProjectId.FLIGHT_CENTRE:
      return FCMain;
    case ProjectId.HOTEL_REDESIGN:
      return HotelMain;
    case ProjectId.MIUU_NOTE:
      return MiuuMain;
    default:
      return FCMain;
  }
};
