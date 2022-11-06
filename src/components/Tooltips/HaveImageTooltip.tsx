import type {
  TooltipSingleChildrenProps,
  TooltipTextProps,
} from '@components/Tooltips/interfaces/Tooltip.interface';
// types

import TooltipBase from '@components/Tooltips/TooltipBase';
// components

import { StyleTooltipText } from '@components/Tooltips/styles/Tooltip.style';
// styles

interface HaveImageTooltipProps extends TooltipSingleChildrenProps, TooltipTextProps {
  /**
   * 툴팁과 함께 보여질 이미지의 경로(이름)입니다.
   */
  imageUrl: string;
}

/**
 * 이미지를 함께 사용하는 툴팁입니다.
 */
const HaveImageTooltip = ({
  text,
  textSize,
  borderRadiusRatio,
  imageUrl,
  children,
}: HaveImageTooltipProps) => (
  <TooltipBase
    contents={
      <StyleTooltipText textSize={textSize}>
        <img src={imageUrl} alt='TooltipImage' />
        {text}
      </StyleTooltipText>
    }
    borderRadiusRatio={borderRadiusRatio}
  >
    {children}
  </TooltipBase>
);

export default HaveImageTooltip;
