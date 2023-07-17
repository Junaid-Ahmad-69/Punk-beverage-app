import BearItem from "./BearItem/BearItem";
import styles from "./BearList.module.css"
import Loader from "../Loader/Loader";

const BearList = ({bear, bearName, bearABV,  isLoading,}) => {
    const pureData = bear.map((bears) => <BearItem bears={bears} key={bears.id}/>)
    return (
        <div className={styles.container}>
            {isLoading ? <Loader/> : <table >
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Tagline</th>
                    <th>First Brewed</th>
                    <th>Description</th>
                    <th>Abv</th>
                    <th>Yeast</th>
                    <th>Image</th>
                </tr>
                </thead>
                <tbody>
                {pureData ? pureData : "No Data Found"}
                </tbody>
            </table>}
        </div>
    )
}

export default BearList
