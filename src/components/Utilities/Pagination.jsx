const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    })
  }

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1)
    scrollTop()
  }

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1)
    scrollTop()
  }

  return (
    <div className="flex items-center justify-center gap-4 px-2 py-4 text-2xl text-color-primary">
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="transition-all hover:text-color-accent"
        >
          prev
        </button>
      )}
      <p>
        {page} off {lastPage}
      </p>

      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className="transition-all hover:text-color-accent"
        >
          next
        </button>
      )}
    </div>
  )
}
export default Pagination
