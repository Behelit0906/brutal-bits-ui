// buttonUtils.ts
export const getSizeClass = (size: string): string => {
  switch (size) {
    case 'sm':
      return 'px-3 py-2 text-xs';
    case 'md':
      return 'px-4 py-[10px] text-sm';
    case 'lg':
      return 'px-6 py-[10px] text-base';
    default:
      return '';
  }
};

export const getRadiusClass = (size: string): string => {
  switch (size) {
    case 'sm':
      return 'rounded-lg';
    case 'md':
      return 'rounded-xl';
    case 'lg':
      return 'rounded-[14px]';
    case 'full':
      return 'rounded-full';
    default:
      return '';
  }
};

export const getBorderSize = (size: string): string => {
  switch (size) {
    case 'sm':
      return 'border';
    case 'md':
      return 'border-2';
    case 'lg':
      return 'border-[3px]';
    default:
      return '';
  }
}

export const getShadowSize = (type: string, size: string): string => {
  switch (type) {
    case 'default': {
      if(size === 'sm') return 'shadow-[2px_2px_0px_rgba(0,0,0,1)]'
      else if(size === 'md') return 'shadow-[3px_3px_0px_rgba(0,0,0,1)]'
      else return 'shadow-[4px_4px_0px_rgba(0,0,0,1)]'
    }
    case 'hover': {
      if(size === 'sm') return 'hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]';
      else if(size === 'md') return 'hover:shadow-[3px_3px_0px_rgba(0,0,0,1)]';
      else return 'hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]';
    }
      
    default:
      return '';
  }
}

export const getColorClass = (color: string): string => {
  switch (color) {
    case 'default':
      return 'bg-default';
    case 'primary':
      return 'bg-primary';
    case 'secondary':
      return 'bg-secondary';
    case 'success':
      return 'bg-success';
    case 'warning':
      return 'bg-warning'
    case 'danger':
      return 'bg-danger'
    default:
      return ''
  }
}

