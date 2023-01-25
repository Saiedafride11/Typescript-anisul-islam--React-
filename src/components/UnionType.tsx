import React from 'react';

type DataFetchProps = {
      // status: string
      status: "loading" | "error" | "success"
}

const UnionType = ({status}: DataFetchProps) => {
      if(status === 'loading'){
            return <h2>Data is loading...</h2>
      }
      else if(status === 'error'){
            return <h2>Error. Data could not be fetched</h2>
      }
      return (
            <div>
                  <h2>Data fetched successfully</h2>
            </div>
      );
};

export default UnionType;