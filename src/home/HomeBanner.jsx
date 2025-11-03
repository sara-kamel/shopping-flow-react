import { Stack, Typography } from "@mui/material"

export const HomeBanner = () => {
    return (
        <Stack
            sx={{ width: "100%", height: "300px" }}
            bgcolor="#413e3e"
            borderBottom="20px solid black"
            direction="row"
            justifyContent="space-between"
        >
            <Stack
                sx={{ width: "40%", height: "300px" }}
                bgcolor="#FFC107"
                borderBottom="20px solid black"
            >
                <Typography variant="h4" color="#eb1212ff" textAlign="center" marginTop="auto" marginBottom="auto">
                    Up to 50% OFF Limited Time Only!
                </Typography>
            </Stack>
            <Typography variant="h4" color="#FFC107" textAlign="center" width="60%" marginTop="auto" marginBottom="auto">
                Everything You Love, All in One Place.
            </Typography>
        </Stack>
    )
}