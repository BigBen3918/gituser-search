import React from "react";
import {
    Box,
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
    CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import Action from "../service";

const StyledTableCell = styled(TableCell)({
    padding: "5px",
});

const columns: readonly Column[] = [
    { id: "avatar", label: "Avatar" },
    { id: "login", label: "Login" },
    {
        id: "user",
        label: "User",
    },
];

function Main() {
    const [login, setLogin] = React.useState("");
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [loading, setLoading] = React.useState(false);
    const [rows, setRows] = React.useState<Data[]>([]);

    const handleSearch = async () => {
        try {
            setLoading(true);

            const result: any = await Action.get_users({
                login: login,
                page: page,
                perPage: rowsPerPage,
            });
            setRows(result.items);

            setLoading(false);
        } catch (err: any) {
            setLoading(false);
            console.log(err.message);
        }
    };

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
                    position: "relative",
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
                        color="secondary"
                        endAdornment={
                            <InputAdornment position="end">
                                <SearchIcon color={"secondary"} />
                            </InputAdornment>
                        }
                        sx={{
                            fontSize: "13px",
                            width: "750px",
                        }}
                        value={login}
                        onChange={(e: any) => setLogin(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        sx={{ padding: "0 35px" }}
                        onClick={handleSearch}
                        color="secondary"
                    >
                        Search
                    </Button>
                </Stack>

                {/* Search Result Part */}
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <StyledTableCell
                                        key={column.id}
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        {column.label}
                                    </StyledTableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.length > 0 ? (
                                rows.map((item: Data, index: number) => (
                                    <TableRow hover key={index}>
                                        <StyledTableCell>
                                            <img
                                                src={item.avatar_url}
                                                alt=""
                                                style={{
                                                    width: "45px",
                                                    height: "45px",
                                                    objectFit: "cover",
                                                    borderRadius: "50%",
                                                    border: "3px dash #780f9f",
                                                }}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {item.login}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {item.type}
                                        </StyledTableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle1">
                                            Not exist Data
                                        </Typography>
                                    </TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            )}
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
                {loading && (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            background: "rgba(0, 0, 0, 0.35)",
                            borderRadius: "10px",
                            top: "0",
                            left: "0",
                            zIndex: "1000",
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <Stack justifyContent={"center"} alignItems={"center"}>
                            <CircularProgress color="secondary" size={"30px"} />
                            <br />
                            <Typography
                                variant="h6"
                                // sx={{ color: "white" }}
                                color="secondary"
                            >
                                Searching...
                            </Typography>
                        </Stack>
                    </Box>
                )}
            </Paper>
            <br />
            <br />
        </Container>
    );
}

export default Main;
