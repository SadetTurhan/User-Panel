import { useCallback } from "react";

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    isActive: boolean;
    role: string;
    phone: string;
  }

  const renderPageLinks = useCallback(() => {
    if (pageCount === 0) return null;
    const visiblePageButtonCount = 3;
    let numberOfButtons =
    pageCount < visiblePageButtonCount ? pageCount : visiblePageButtonCount;
    const pageIndices = [pageIndex];
    numberOfButtons--;
    [...Array(numberOfButtons)].forEach((_item, itemIndex) => {
      const pageNumberBefore = pageIndices[0] - 1;
      const pageNumberAfter = pageIndices[pageIndices.length - 1] + 1;
      if (
        pageNumberBefore >= 0 &&
        (itemIndex < numberOfButtons / 2 || pageNumberAfter > pageCount - 1)
      ) {
        pageIndices.unshift(pageNumberBefore);
      } else {
        pageIndices.push(pageNumberAfter);
      }
    });
    return pageIndices.map((pageIndexToMap) => (
      <li key={pageIndexToMap}>
        <Button content={pageIndexToMap + 1} nClick={() => gotoPage(pageIndexToMap)}active={pageIndex === pageIndexToMap}/>/li>
    ));
  }, [pageCount, pageIndex]);
  return (
    <div>
    <ul className="flex gap-2">
      <li>
        <Button
          content={
            <div className="flex ml-1"><div size="0.6rem" />
              <div size="0.6rem" className="-translate-x-1/2" />
            </div>

          }

          onClick={() => gotoPage(0)}

          disabled={!canPreviousPage}

        />

      </li>

      {renderPageLinks()}

      <li>

        <Button2

          content={

            <div className="flex ml-1">

              <div size="0.6rem" />
              <FaChevronRight size="0.6rem" className="-translate-x-1/2" />
            </div>
          }
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        />
      </li>
    </ul> 
    </div>);

