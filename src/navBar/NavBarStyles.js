import { Badge, styled, Typography, Input, Button } from '@mui/material'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'

export const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px'
  }
}))

export const StyledTypography = styled(Typography)(({ theme }) => ({
  display: 'none',
  fontFamily: 'monospace',
  fontWeight: 700,
  padding: '10px',
  color: 'inherit',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    width: '35%',
    letterSpacing: '.2rem',
    flexGrow: 1
  },
  [theme.breakpoints.up('md')]: {
    width: 'auto',
    letterSpacing: '.5rem',
    flexGrow: 0
  }
}))

export const StyledHeaderIconSmall = styled(MonetizationOnOutlinedIcon)(
  ({ theme }) => ({
    display: 'flex',
    width: '2rem',
    height: '2rem',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  })
)

export const StyledHeaderIconLarge = styled(MonetizationOnOutlinedIcon)(
  ({ theme }) => ({
    display: 'none',
    width: '2.5rem',
    height: '2.5rem',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  })
)

export const StyledInputField = styled(Input)(({ theme }) => ({
  color: 'white',
  [theme.breakpoints.down('sm')]: {
    '& .MuiInputLabel-root': {
      fontSize: theme.spacing(3)
    }
  }
}))

export const StyledSearchButton = styled(Button)(({ theme }) => ({
  color: 'white',
  fontSize: theme.spacing(1.3),
  padding: '3px 4px',
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.spacing(2),
    padding: '6px 8px'
  }
}))
