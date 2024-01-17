import React from 'react';
import { useCollapse } from 'react-collapsed';

interface Props {
  title: string;
  contents: Array<Array<string>>;
}

export default function BankAcctNo({ title, contents }: Props) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({ defaultExpanded: true });

  const getArrow = (isExpanded: boolean) => {
    const imgSuffix = isExpanded ? 'top' : 'down';
    const imgSrc = `/images/ico_arrow_${imgSuffix}.png`;
    const style = { width: '16px', marginLeft: 'auto' };
    return <img style={style} alt={imgSrc} src={imgSrc} />;
  };

  return (
    <div
      style={{
        margin: '10px 36px',
        border: '1px solid #f2f2f2',
        borderRadius: '8px',
        boxShadow: '1px 2px 4px #f2f2f2',
        WebkitTextStroke: '0.2px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '15px',
          borderRadius: '8px 8px 0px 0px',
          background: '#f2f2f2',
        }}
        {...getToggleProps()}
      >
        <span style={{ marginLeft: 'auto', paddingLeft: '29px' }}>{title}</span>
        {getArrow(isExpanded)}
      </div>
      <div {...getCollapseProps()}>
        {React.Children.toArray(
          contents.map((content) => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                padding: '10px 20px',
                fontSize: '14.2px',
                lineHeight: 2,
                borderBottom: '2px solid #f2f2f2',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                <span style={{ marginRight: 'auto' }}>{content[0]}</span>
                <button
                  type="button"
                  style={{
                    border: '4px solid #f2f2f2',
                    borderRadius: '4px',
                    background: '#f2f2f2',
                    fontFamily: 'inherit',
                    fontWeight: 'bold',
                    WebkitTextStroke: '0px',
                  }}
                >
                  복사하기
                </button>
              </div>
              <span>{content[1]}</span>
            </div>
          )),
        )}
      </div>
    </div>
  );
}
