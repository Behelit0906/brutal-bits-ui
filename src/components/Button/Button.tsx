import { ReactNode } from "react"
import { getSizeClass, getRadiusClass, getBorderSize, getShadowSize, getColorClass } from "../../utils/buttonUtils"

interface Props {
  children: ReactNode | ReactNode[]
  size?: 'sm' | 'md' | 'lg'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  disabled?: boolean
  borderSize?: 'sm' | 'md' | 'lg'
  shadow?: 'none' | 'default' | 'hover'
  shadowSize ?: 'sm' | 'md' | 'lg'
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
}

function Button (
  { 
    children, 
    size = 'md', 
    radius = 'none', 
    disabled = false, 
    borderSize = "md", 
    shadow = 'none',
    shadowSize = 'md',
    color = 'default' }: Props): React.JSX.Element {

  const sizeClass = getSizeClass(size);
  const radiusClass = getRadiusClass(radius)
  const disabledClass = disabled ? 'opacity-60' : ''
  const borderSizeClass = getBorderSize(borderSize)
  const shadowClass = getShadowSize(shadow, shadowSize);
  const colorClass = getColorClass(color)

  return (
    <button 
    disabled={disabled} 
    className={`${colorClass} ${borderSizeClass} border-black ${sizeClass} ${radiusClass} ${disabledClass} ${shadowClass}`}>
      { children }
    </button>
  )
}

export default Button