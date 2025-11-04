
import { Avatar, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export const InfoCard = ({ img, imgTwo, alt, altTwo, text, textTwo, url, urlTwo }) => {
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
                    <Link to={url}>Show More</Link>
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
                    sx={{ width: { sx: 300, sm: 0 }, height: 300, display: { xs: "block", sm: "none" } }}
                    variant="square"
                />

                <Stack direction="column" alignItems="center"
                >
                    <Typography>
                        {textTwo}
                    </Typography>
                    <Link to={urlTwo}>Show More</Link>
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
