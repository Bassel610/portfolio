import { Stack } from "@mui/material"
import Img from "../../component/img"
import { useMainContext } from "../../Context/context";

function OurWork () {
    const {img1, img2, img3, img4, img5} = useMainContext()
    return (
        <Stack direction='row' alignItems='center' justifyContent='center' spacing={-11} sx={{maxWidth :'80%', margin: 'auto'}}>
            <Img isBorder={true} src={img1} width='300px' height='200px' />
            <Img isBorder={true} src={img2} width='300px' height='200px' />
            <Img isBorder={true} src={img3} width='300px' height='200px' />
            <Img isBorder={true} src={img4} width='300px' height='200px' />
            <Img isBorder={true} src={img5} width='300px' height='200px' />
        </Stack>
    )
}

export default OurWork