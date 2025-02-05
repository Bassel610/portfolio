import { Box, Stack } from "@mui/material"
import Title from "../component/Title"
import { useMainContext } from "../Context/context"
import Img from "../component/img"


function My_Work () {
    const {images} = useMainContext()
    return (
        <Stack>
            <Title title='Our Work' />
            <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" 
                gap="20px"   justifyContent="center" 
                alignItems="center" width='70%' margin="auto">
                {images.map((img, index) => (
                    <Img showDescription={true} isBorder={true} src={img} width="400px" height="370px" margin='5px 10px' />
                ))}
            </Box>
        </Stack>
    )
}

export default My_Work