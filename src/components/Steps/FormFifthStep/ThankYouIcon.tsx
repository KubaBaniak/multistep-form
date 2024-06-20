import styled from "styled-components";
import ThankYouSvg from "../../../../public/assets/images/icon-thank-you.svg";

const Icon = styled.img.attrs({
  src: ThankYouSvg,
})`
  svg {
    width: 30px;
    height: 30px;
  }
`;

export default function ThankYouIcon() {
  return <Icon src={ThankYouSvg} />;
}
