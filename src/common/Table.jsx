import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function CommonTable({
  columns,
  rows,
  onRowClick,
  filter,
  filterField,
  filterValue = "All",
}) {
  const filteredRows = filter
    ? rows.filter((row) =>
        filterValue === "All" ? true : row[filterField] === filterValue
      )
    : rows;

  return (
    <TableContainer
      component={Paper}
      sx={{
        mt: 3,
        width: "100%",
        maxHeight: {
          xs: "calc(100vh - 200px)",
          md: "calc(100vh - 300px)",
        },
        overflowY: "auto",
        overflowX: "auto",
      }}
    >
      <Table
        stickyHeader
        sx={{
          minWidth: 700,
          bgcolor: "#F3F4F6",
          borderLeft: "1px solid #CACACA",
        }}
        aria-label="data table"
      >
        {/* HEADER */}
        <TableHead>
          <TableRow>
            {columns.map((col, index) => (
              <TableCell
                key={index}
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "12px", sm: "13px", md: "14px" },
                  px: { xs: 1, sm: 2 },
                  py: { xs: 1, sm: 2 },
                  color: "#9CA3AF",
                  bgcolor: "#F3F4F6",
                  borderRight:
                    index !== columns.length - 1
                      ? "1px solid #CACACA"
                      : "none",

                   display: col.hideOnMobile
                    ? { xs: "none", md: "table-cell" }
                    : "table-cell",
                }}
              >
                {col.header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* BODY */}
        <TableBody>
          {filteredRows.map((row, index) => {
            const active = index % 2 === 0;

            return (
              <TableRow
                key={row.id || index}
                onClick={() => onRowClick?.(row)}
                sx={{
                  bgcolor: active ? "#ffffffd7" : "#F3F4F6",
                  cursor: onRowClick ? "pointer" : "default",
                  "&:hover": {
                    bgcolor: "#E5E7EB",
                  },
                }}
              >
                {columns.map((col, colIndex) => (
                  <TableCell
                    key={colIndex}
                    sx={{
                      fontSize: { xs: "12px", sm: "13px", md: "14px" },
                      px: { xs: 1, sm: 2 },
                      py: { xs: 1, sm: 2 },
                      borderRight:
                        colIndex !== columns.length - 1
                          ? "1px solid #CACACA"
                          : "none",

                      display: col.hideOnMobile
                        ? { xs: "none", md: "table-cell" }
                        : "table-cell",
                    }}
                  >
                    {col.render(row)}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}