import Svg, {Path, type PathProps, type SvgProps} from 'react-native-svg'

import {usePalette} from '#/lib/hooks/usePalette'

const ratio = 16 / 100.3335

export function Logotype({
  fill,
  ...rest
}: {fill?: PathProps['fill']} & SvgProps) {
  const pal = usePalette('default')
  // @ts-ignore it's fiiiiine
  const size = parseInt(rest.width || 32) * 1.5

  return (
    <Svg
      fill="none"
      viewBox="0 0 100.333 16"
      {...rest}
      width={size}
      height={Number(size) * ratio}>
      <Path fill={fill || pal.text.color} d="" />
    </Svg>
  )
}
