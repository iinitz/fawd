import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Fragment, useCallback, useState } from 'react'

import { Text } from '../Highlight'

import { PageSubSection } from './PageSubSection'

export interface IPageQuestionProps {
  question: string
  detail?: React.ReactNode
  answer?: React.ReactNode
  children?: React.ReactNode
}
export const PageQuestion: React.FC<IPageQuestionProps> = ({
  question, detail, answer, children,
}: IPageQuestionProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const toggleShowAnswer = useCallback(
    () => {
      setOpen((prev) => !prev)
    },
    [],
  )
  return (
    <PageSubSection title={question}>
      {detail}
      {open ? (
        <Fragment>
          <Button onClick={toggleShowAnswer}>Hide answer</Button>
          <Box sx={{ mx: 1 }}>
            <Typography variant="subtitle1">
              Answer: <Text>{answer}</Text>
            </Typography>
            {children}
          </Box>
        </Fragment>
      ) : (
        <Button onClick={toggleShowAnswer}>Show answer</Button>
      )}
    </PageSubSection>
  )
}
