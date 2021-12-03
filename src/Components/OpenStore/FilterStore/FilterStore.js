import { FilterIcon } from "../../../icons/icons";
import classes from "./FilterStore.module.css";

function FilterStore({ sortPrice, setSortPrice }) {
  return (
    <div className={classes.filterStore}>
      <div className={classes.filterStore_filter}>
        <FilterIcon />
      </div>

      <div className={classes.filterStore_results}>35 Results</div>

      <div className={classes.filterStore_sort}>
        <div style={sortPrice ? { display: "none" } : {}}>Sort By:</div>
        <select onChange={(e) => setSortPrice(e.target.value)}>
          <option value=""></option>
          <option value="low">Price Low to High</option>
          <option value="high">Price High to Low</option>
        </select>

        {/* <SeeMoreIcon /> */}
      </div>
    </div>
  );
}

export default FilterStore;
