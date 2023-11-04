import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIconStyle } from "@fortawesome/react-native-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

interface Props {
  name: string;
  style?: FontAwesomeIconStyle;
  size: number;
}
library.add(fab);

const SocialIcon = ({ name, style, size }: Props) => {
  switch (name) {
    case "Instagram":
      return (
        <FontAwesomeIcon
          style={style}
          icon={["fab", "instagram"]}
          size={size}
          color={"#E1306C"}
        />
      );
    case "Facebook":
      return (
        <FontAwesomeIcon
          style={style}
          icon={["fab", "facebook"]}
          size={size}
          color={"#3b5998"}
        />
      );
    case "Twitter (X)":
      return (
        <FontAwesomeIcon
          style={style}
          icon={["fab", "x-twitter"]}
          size={size}
          color={"black"}
        />
      );
    case "Spotify":
      return (
        <FontAwesomeIcon
          style={style}
          icon={["fab", "spotify"]}
          size={size}
          color={"#1DB954"}
        />
      );
    case "YouTube":
      return (
        <FontAwesomeIcon
          style={style}
          icon={["fab", "youtube"]}
          size={size}
          color={"#FF0000"}
        />
      );
    case "TikTok":
      return (
        <FontAwesomeIcon
          style={style}
          icon={["fab", "tiktok"]}
          size={size}
          color={"#000000"}
        />
      );
    case "Telegram":
      return (
        <FontAwesomeIcon
          style={style}
          icon={["fab", "telegram"]}
          size={size}
          color={"#0088CC"}
        />
      );
    case "LinkedIn":
      return (
        <FontAwesomeIcon
          style={style}
          icon={["fab", "linkedin"]}
          size={size}
          color={"#0077B5"}
        />
      );
    case "Discord":
      return (
        <FontAwesomeIcon
          style={style}
          icon={["fab", "discord"]}
          size={size}
          color={"#7289DA"}
        />
      );
      case "Snapchat":
      return (
        <FontAwesomeIcon
          style={style}
          icon={["fab", "snapchat"]}
          size={size}
          color={"#FFFC00"}
        />
      );
      case "WhatsApp":
      return (
        <FontAwesomeIcon
          style={style}
          icon={["fab", "whatsapp"]}
          size={size}
          color={"#25D366"}
        />
      );
      case "GitHub":
      return (
        <FontAwesomeIcon
          style={style}
          icon={["fab", "github"]}
          size={size}
          color={"#181717"}
        />
      );

    default:
      return (
        <FontAwesomeIcon
          style={style}
          icon={["fab", "x-twitter"]}
          size={size}
          color={"black"}
        />
      );
  }
};

export default SocialIcon;
