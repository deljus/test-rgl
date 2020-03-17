import React from 'react';
import GridLayout from 'react-grid-layout';
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"

function App() {
  const layout = [
    {i: 'a', x: 0, y: 0, w: 2, h: 2, static: true},
    {i: 'b', x: 2, y: 0, w: 3, h: 2, minW: 2, maxW: 6, isDraggable: false},
    {i: 'c', x: 5, y: 0, w: 2, h: 2},
    {i: 'd', x: 0, y: 1, w: 1, h: 2}
  ];
  return (
    <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1000}>
      <div key="a" className="a"><span className="text">This is static element. (No dnd no resize)</span></div>
      <div key="b" className="b"><span className="text">This is element resize from 2 to 6 points (No dnd)</span></div>
      <div key="c" className="c"><span className="text">This is element resize and dnd</span></div>
      <div key="d" className="d"><span className="text">Custom resize icon</span></div>
    </GridLayout>
  )
}

export default App;
