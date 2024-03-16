import { EditorBtns, HeaderHeirachyType } from '@/lib/constants'
import {
  Bold,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Heading5Icon,
  Heading6Icon,
  TypeIcon,
} from 'lucide-react'
import React from 'react'


type Props = { headerHeirachy: HeaderHeirachyType }

const HeaderPlaceholder = ({headerHeirachy}: Props) => {
  const handleDragStart = (e: React.DragEvent, type: EditorBtns) => {
    if (type === null) return
    // console.log(type)
    e.dataTransfer.setData('componentType', type)
  }

  // console.log(headerHeirachy)

  let Icon = Heading1Icon

  switch (headerHeirachy) {
    case 'h2':
      Icon = Heading2Icon
      break;

      case 'h3':
        Icon = Heading3Icon
        break;
        case 'h4':
      Icon = Heading4Icon
      break;
      case 'h5':
      Icon = Heading5Icon
      break;
      case 'h6':
      Icon = Heading6Icon
      break;
      case 'p':
      Icon = TypeIcon
      break;
      case 'blockquote':
      Icon = Bold
      break;
  
    default:
      break;
  }

  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, headerHeirachy)}
      className=" h-14 w-14 bg-muted rounded-lg flex items-center justify-center"
    >
      <Icon
        size={40}
        className="text-muted-foreground"
      />
    </div>
  )
}

export default HeaderPlaceholder
