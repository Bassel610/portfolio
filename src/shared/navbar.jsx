import { Box, ListItem, Stack } from '@mui/material'
import logo from '../assets/Logo/Lina Interiors.png';

const getItemStyles = (currentPage, targetPage) => ({
  color: currentPage === targetPage ? '#B7885C' : 'black',
  listStyle: 'none',
  width: 'auto',
  padding: '10px',
  fontWeight: currentPage === targetPage ? '700' : '500',
  fontSize: currentPage === targetPage ? '18px' : '16px',
  lineHeight: '30px',
  cursor: 'pointer',
});
export default function Navbar({isMain, setIsMain}) {
    const pages = ['Home', 'My Work', 'About Me', 'Contact Me'];
  
  return (
    <Stack  width='100%'  direction='row'  
            alignItems='center' justifyContent='space-between'
            pt={1}
            sx={{bgcolor :'#ECEDE7'}}>
        <Box ml={3}>
            <img src={logo} alt='logo' />
        </Box>
        <Stack direction='row' mr={3}>
        {pages.map((page) => {
          return(
        <li onClick={() => setIsMain(page)} key={page} style={getItemStyles(isMain, page)}>
          {page}
        </li>
      )})}
        </Stack>
    </Stack>
  )
}
