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
                padding="20px"
                bgcolor="#e4eff3"
                borderBottom="20px solid black"
            >
                <Typography
                    variant="h6"
                    bgcolor="#f13106ff" textAlign="center" marginTop="auto" marginBottom="auto"
                    color="#fff8f8"
                    border="5px solid #413e3e "
                    padding="12px"
                    borderRadius="20%"

                >
                    Up to 50% OFF Limited Time Only!
                </Typography>
            </Stack>
            <Typography variant="h4" color="#e4eff3" textAlign="center" width="60%" marginTop="auto" marginBottom="auto">
                Everything You Love, All in One Place.
            </Typography>
        </Stack>
    )
}