import React from 'react';

type ButtonStyleProps = {
      btnStyle: React.CSSProperties
}

const StyleProps = (props: ButtonStyleProps) => {
      return (
            <div style={props.btnStyle}>
                  Button Style
            </div>
      );
};

export default StyleProps;