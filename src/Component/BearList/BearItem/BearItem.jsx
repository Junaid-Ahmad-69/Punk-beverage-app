const BearItem = ({bears}) => {
    const ingredient = bears.ingredients.yeast;
    return (
        <tr>
            <td>{bears.id}</td>
            <td>{bears.name}</td>
            <td>{bears.tagline}</td>
            <td>{bears.first_brewed}</td>
            <td>{bears.description}</td>
            <td>{bears.abv}</td>
            <td>{ingredient}</td>
            <td><img src={bears.image_url} alt={bears.name} width={25}/></td>
        </tr>
    )
}

export default BearItem
