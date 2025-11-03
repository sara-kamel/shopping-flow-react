
import { Avatar, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export const InfoCard = ({ img, imgTwo, alt, altTwo, text, textTwo, url, urlTwo }) => {
    return (
        <Stack direction="column" alignItems="center">
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                width={"100%"}
                justifyContent='space-around' padding={4}
                alignItems="center"
            >
                <div>
                    <Avatar
                        src={img}
                        alt={alt}
                        sx={{ width: 300, height: 300 }}
                        variant="square"
                    />
                </div>
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
                <Stack direction="column" alignItems="center">
                    <Typography>
                        {text}
                    </Typography>
                    <Link to={urlTwo}>Show More</Link>
                </Stack>
                <div>
                    <Avatar
                        src={imgTwo}
                        alt={altTwo}
                        sx={{ width: 300, height: 300 }}
                        variant="square"
                    />
                </div>
            </Stack>
        </Stack>

    )
}
