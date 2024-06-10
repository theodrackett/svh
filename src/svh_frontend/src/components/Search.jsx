import Categories from "./Categories";

function Search() {
    return (
        <section className="search-filter">
        <input type="text" placeholder="Search events..." />
        <Categories />
      </section>
    )
}

export default Search;