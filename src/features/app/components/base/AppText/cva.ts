// CVA
import { cva, type VariantProps } from 'class-variance-authority'

export const text = cva('', {
  variants: {
    size: {
      small: ['text-small'],
      medium: ['text-base'],
      large: ['text-large'],
      xlarge: ['text-xlarge'],
      x2large: ['text-x2large']
    },
    weight: {
      normal: ['font-normal'],
      semibold: ['font-semibold'],
      bold: ['font-bold'],
      xbold: ['font-extrabold'],
      '2xlbold': ['font-black']
    },
    align: {
      left: ['text-left'],
      right: ['text-right'],
      center: ['text-center']
    }
  },
  compoundVariants: [{ intent: 'primary', size: 'medium' }],
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
    weight: 'normal'
  }
})

// Interfaces
export interface IAppTextProps extends VariantProps<typeof text> {
  className?: string
  children: string | number
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'x2large'
  weight?: 'bold' | 'semibold' | 'xbold' | '2xlbold'
  align?: 'left' | 'right' | 'center'
}