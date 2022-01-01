/* eslint-disable react/no-array-index-key */
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import Zoom from '@mui/material/Zoom'
import { Theme } from '@mui/material/styles'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import darkTheme from 'prism-react-renderer/themes/vsDark'
import lightTheme from 'prism-react-renderer/themes/vsLight'
import { useCallback, useMemo, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { useTheme } from '../../contexts/ThemeContext'
import { ThemeMode } from '../../types'

import {
  Line, LineContent, LineNo, Pre,
} from './Line'

export declare interface ICodeProps {
  language: Language
  code: string
}
export const Code: React.FC<ICodeProps> = ({ language, code }: ICodeProps) => {
  const [copyLabel, setCopyLabel] = useState<string>('Copy')
  const { currentTheme } = useTheme()
  const handleCopy = useCallback(
    () => {
      setCopyLabel('Copied !')
      setTimeout(
        () => {
          setCopyLabel('Copy')
        },
        1000,
      )
    },
    [],
  )
  const highlightTheme = useMemo(
    () => (currentTheme === ThemeMode.Dark ? darkTheme : lightTheme),
    [currentTheme],
  )
  return (
    <Highlight {...defaultProps} theme={highlightTheme} language={language} code={code.trim()}>
      {({
        className, style, tokens, getLineProps, getTokenProps,
      }) => (
        <Card variant="outlined" sx={{ my: 2 }}>
          <CardContent sx={{ p: 0 }}>
            <Pre className={className} style={style}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })}>
                  <LineNo>{i + 1}</LineNo>
                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </LineContent>
                </Line>
              ))}
            </Pre>
          </CardContent>
          <Divider />
          <CardActions>
            <Typography color="textSecondary" sx={{ ml: 1 }}>Language: {language}</Typography>
            <Box flexGrow={1} />
            <CopyToClipboard text={code.trim()} onCopy={handleCopy}>
              <Tooltip
                TransitionComponent={Zoom}
                title={copyLabel}
                placement="left"
                arrow
              >
                <IconButton>
                  <ContentCopyIcon fontSize="small" sx={{ color: (theme: Theme) => theme.palette.text.secondary }} />
                </IconButton>
              </Tooltip>
            </CopyToClipboard>
          </CardActions>
        </Card>
      )}
    </Highlight>
  )
}
