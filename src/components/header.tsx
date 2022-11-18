import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
    const HeaderBox = styled(Box)({
        padding: 0,
        background: "#780f9f",
        cursor: "context-menu",
        userSelect: "none",

        "> div": {
            padding: "20px 30px",

            h2: {
                fontSize: "25px",
                fontWeight: "bold",
                color: "#ddd",
            },

            svg: {
                fontSize: "30px",
                color: "white",
            },
        },
    });

    return (
        <HeaderBox>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <SearchIcon />
                <Typography variant="h2">Searcher</Typography>
            </Stack>
        </HeaderBox>
    );
}

export default Header;
