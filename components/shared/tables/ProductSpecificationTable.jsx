const ProductSpecificationTable = ({description}) => {
    return (
        <>
            {description.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    <th> {row.cells[0]} </th>
                    <td> {row.cells[1]} </td>  
                </tr>
            ))}
        </>
    )
}
export default ProductSpecificationTable;