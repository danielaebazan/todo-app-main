import React from 'react';

import { DragDropContext } from 'react-beautiful-dnd';

const DragAndDrop = ({ children, handleDragEnd }) => {
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {children}
    </DragDropContext>
  );
};

export default DragAndDrop;
