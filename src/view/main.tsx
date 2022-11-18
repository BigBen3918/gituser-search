import React from "react";
import {
    Typography,
    OutlinedInput,
    InputAdornment,
    Button,
    Stack,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const columns: readonly Column[] = [
    { id: "avatar", label: "Avatar" },
    { id: "login", label: "Login" },
    {
        id: "user",
        label: "User",
    },
];

const rows: Data[] = [
    {
        avatar: "India",
        login: "abc",
        type: "user",
    },
    {
        avatar: "china",
        login: "sadf0df87er",
        type: "user",
    },
    {
        avatar: "Taiwan",
        login: "asdfasd asdvasrf",
        type: "user",
    },
    {
        avatar: "Spain",
        login: "asdfasdfasdf",
        type: "user",
    },
    {
        avatar: "maroku",
        login: "askdfjlakjsdf",
        type: "user",
    },
];

function Main() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Container maxWidth="xl" sx={{ paddingTop: "50px" }}>
            <Paper
                sx={{
                    background: "white",
                    padding: "30px",
                    borderRadius: "10px",
                }}
            >
                {/* Title Part */}
                <Typography variant="h5" sx={{ padding: "15px 0" }}>
                    Search from the GitHub
                </Typography>

                {/* Search Part */}
                <Stack
                    direction={"row"}
                    sx={{ padding: "10px 0 30px 0" }}
                    spacing={2}
                >
                    <OutlinedInput
                        id="search_input"
                        type="text"
                        size="medium"
                        endAdornment={
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        }
                        sx={{
                            fontSize: "13px",
                            width: "750px",
                        }}
                    />
                    <Button variant="contained" sx={{ padding: "0 35px" }}>
                        Search
                    </Button>
                </Stack>

                {/* Search Result Part */}
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell key={column.id}>
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((item: Data, index: number) => (
                                <TableRow hover key={index}>
                                    <TableCell>{item.avatar}</TableCell>
                                    <TableCell>{item.login}</TableCell>
                                    <TableCell>{item.type}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Container>
    );
}

export default Main;
