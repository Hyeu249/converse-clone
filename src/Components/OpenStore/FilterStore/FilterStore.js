import { FilterIcon } from "../../../icons/icons";
import classes from "./FilterStore.module.css";

function FilterStore() {
  return (
    <div className={classes.filterStore}>
      <div className={classes.filterStore_filter}>
        <FilterIcon />
      </div>

      <div className={classes.filterStore_results}>35 Results</div>

      <div className={classes.filterStore_sort}>
        <div>Sort By:</div>
        <select>
          <option value="1"> </option>
          <option value="1">Newest to Oldest</option>
          <option value="2">Price Low to High</option>
        </select>

        {/* <SeeMoreIcon /> */}
      </div>
    </div>
  );
}

export default FilterStore;
