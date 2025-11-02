import { Avatar, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const InfoCard = (img, alt, text, url) => {
    return (

        <Stack direction="row" spacing={2} justifyContent='space-around'>
            <Avatar src={img}
                alt={alt}
                sx={{ width: 500, height: 500 }}
                variant="square" />

            <div> <Typography>
                {text}
            </Typography>
                <Link to={url}>Show More</Link>
            </div>
        </Stack>

    )
}
