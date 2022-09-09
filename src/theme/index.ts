import { theme as ogpTheme } from '@opengovsg/design-system-react'
import { extendTheme } from '@chakra-ui/react'

import * as foundations from './foundations'

export const theme = extendTheme(ogpTheme, {
    ...foundations,
})
  