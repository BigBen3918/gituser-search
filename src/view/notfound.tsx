import { Box, Typography, Stack, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    const StyledStack = styled(Stack)({
        textAlign: "center",
        "@media(max-width: 968px)": {
            h2: {
                fontSize: "28px",
            },
        },
        "@media(max-width: 576px)": {
            h6: {
                fontSize: "17px",
            },
        },
    });

    const StyledIMG = styled("img")({
        width: "500px",
        "@media(max-width: 680px)": {
            width: "100%",
        },
    });

    return (
        <Box>
            <Stack
                direction={"row"}
                sx={{ padding: "3% 50px" }}
                alignItems="center"
                justifyContent={"space-around"}
                flexWrap="wrap"
            >
                <Stack direction={"row"} alignItems="center">
                    <StyledIMG src="./assets/404.png" alt="" />
                </Stack>

                <StyledStack
                    flexDirection={"column"}
                    alignItems="center"
                    justifyContent={"center"}
                >
                    <Typography
                        variant="h2"
                        sx={{ fontFamily: "fantasy", letterSpacing: "20px" }}
                    >
                        AWWW... DON’T CRY.
                    </Typography>
                    <br />
                    <br />
                    <Typography
                        variant="subtitle1"
                        sx={{ fontFamily: "cursive", fontSize: "22px" }}
                    >
                        It's just a 404 Error!
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{ fontFamily: "cursive", fontSize: "22px" }}
                    >
                        What you’re looking for may have been misplaced in Long
                        Term Memory.
                    </Typography>
                    <br />
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{ padding: "13px 20px" }}
                        onClick={() => navigate("/")}
                    >
                        Return Home
                    </Button>
                </StyledStack>
            </Stack>
        </Box>
    );
}

export default NotFound;
