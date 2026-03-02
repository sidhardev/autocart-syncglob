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
        filterValue === "All" ? true : row[filterField] === filterValue,
      )
    : rows;

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table
        sx={{
          minWidth: 900,
          bgcolor: "#F3F4F6",
          borderLeft: "1px solid #CACACA",
        }}
        aria-label="data table"
      >
        <TableHead sx={{ bgcolor: "#F3F4F6" }}>
          <TableRow>
            {columns.map((col, index) => (
              <TableCell
                key={index}
                sx={{
                  borderRight:
                    index !== columns.length - 1 ? "1px solid #CACACA" : "none",
                  fontWeight: 600,
                  color: "#9CA3AF",
                  fontStyle: "SemiBold",
                  fontFamily: "Source Sans Pro",
                }}
              >
                {col.header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody sx={{ mt: 3 }}>
          {filteredRows.map((row, index) => {
            const active = index % 2 === 0;
            return (
              <TableRow
                key={row.id || index}
                sx={{
                  bgcolor: active ? "#ffffffd7" : "#F3F4F6",
                  cursor: onRowClick ? "pointer" : "default",
                  "&:hover": {
                    bgcolor: "#E5E7EB",
                  },
                }}
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((col, colIndex) => (
                  <TableCell
                    key={colIndex}
                    sx={{
                      borderRight:
                        colIndex !== columns.length - 1
                          ? "1px solid #CACACA"
                          : "none",
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
