import { parse, stringify } from "query-string";
import { useCallback, useState } from "react";

export const useQueryParams = () => {
 const urlParams = parse(window.location.search);

 const [innerData, setInnerData] = useState(urlParams);

 const setData = useCallback((data) => {
     window.location.search = stringify(data);
     setInnerData(data);
 },[setInnerData]);

 return [innerData, setData];
}
