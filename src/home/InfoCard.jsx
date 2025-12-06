
import { Avatar, Typography, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const InfoCard = ({ img, imgTwo, alt, altTwo, text, textTwo, url, urlTwo }) => {
    const navigate = useNavigate()
    return (
        <Stack direction="column" alignItems="center">
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                width="100%"
                justifyContent='space-around' padding={4}
                alignItems="center"
            >
                <Avatar
                    src={img}
                    alt={alt}
                    sx={{ width: 300, height: 300 }}
                    variant="square"
                />

                <Stack direction="column" alignItems="center">
                    <Typography>
                        {text}
                    </Typography>
                    <br />
                    <Button color="secondary" variant="outlined" onClick={() => {
                        navigate(urlTwo)
                    }}>Show More</Button>
                </Stack>

            </Stack>
            <br />
            <br />
            <br />
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                width="100%"
                spacing={{ xs: 1, sm: 2, md: 4 }}
                justifyContent='space-around' padding={4}
                alignItems="center"
            >

                <Avatar
                    src={imgTwo}
                    alt={altTwo}
                    sx={{ width: 300, height: 300, display: { xs: "block", sm: "none" } }}
                    variant="square"
                />

                <Stack direction="column" alignItems="center"
                >
                    <Typography>
                        {textTwo}
                    </Typography>
                    <br />
                    <Button color="secondary" variant="outlined" onClick={() => {
                        navigate(urlTwo)
                    }}>Show More</Button>
                </Stack>

                <Avatar
                    src={imgTwo}
                    alt={altTwo}
                    sx={{ width: 300, height: 300, display: { xs: "none", sm: "block" } }}
                    variant="square"
                />

            </Stack>
        </Stack>

    )
}
