import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faCircleQuestion,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faChevronDown,
  faChevronUp,
  faLink,
  faUpRightFromSquare,
  faCheck,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export default function initIcons(): void {
  library.add(
    faArrowRight,
    faChevronDown,
    faChevronUp,
    faCircleXmark,
    faCircleQuestion,
    faLink,
    faUpRightFromSquare,
    faCheck,
    faTriangleExclamation,
  );
  dom.watch();
}
