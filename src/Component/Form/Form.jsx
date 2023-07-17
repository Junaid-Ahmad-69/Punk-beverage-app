import styles from "./Form.module.css"

const Form = ({abv_gt, ids, beer_name, setFilterBear}) => {
    return (
        <form>
            <div className={styles.formControl}>
                <div className={styles.inputForm}>
                    <label htmlFor="bearName">Bear</label>
                    <input id="bearName" type="text" value={beer_name}
                           onChange={(e) => {
                               setFilterBear((beer_name)=>({...beer_name, beer_name: e.target.value}))
                           }}
                    />
                </div>

                <div className={styles.inputForm}>
                    <label htmlFor="bearAbv">Above Average</label>
                    <input id="bearAbv" type="number" value={abv_gt}
                           onChange={(e) => setFilterBear((abv_gt) => ({...abv_gt, abv_gt: e.target.value}))}/>
                </div>
                <div className={styles.inputForm}>
                    <label htmlFor="bearId">Id</label>
                    <input id="bearId" type="number" value={ids}
                           onChange={(e) => setFilterBear((ids)=>({...ids, ids: e.target.value}))}/>
                </div>
            </div>
        </form>
    )
}

export default Form
