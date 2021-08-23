import { useState, useEffect, useCallback } from "react";

interface RequestProps<T> {
  url: RequestInfo;
  init?: RequestInit;
  processData?: (data: any) => T;
}

export const useFetch = <T>({ url, init, processData }: RequestProps<T>) => {
  
  const [data, setData] = useState<T>();

  const [stringifiedUrl, stringifiedInit] = [JSON.stringify(url), JSON.stringify(init)];

  const processJson = useCallback(processData || ((jsonBody: any) => jsonBody as T), []);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(url, init);

        if (response.status === 200) {
          const rawData: any = await response.json();
          const processedData = processJson(rawData);
          setData(processedData);
        } else {
          console.error(`Error ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Error ${error}`);
      }
    };
    fetchApi();
  }, [stringifiedUrl, stringifiedInit, processJson]);

  return data;
};
